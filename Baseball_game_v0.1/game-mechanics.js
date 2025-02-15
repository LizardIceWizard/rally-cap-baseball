// game-mechanics.js

export const gameState = {
    balls: 0,
    strikes: 0,
    outs: 0,
    inning: 1,
    isTopInning: true,
    homeScore: 0,
    awayScore: 0,
    bases: [null, null, null],
    currentPitcher: null, // not used in at-bat resolution
    currentBatter: null,
    lastPlayResult: null,
    isHitAndRun: false,
    momentum: 1, // neutral momentum; clamped between 0.8 and 1.2
    currentBatterIndex: 0,
    gameOver: false,
    // For box score tracking
    boxScore: [],
    prevAwayScore: 0,
    prevHomeScore: 0
  };
  
  export function swing(type) {
    if (!gameState.currentBatter) return { type: 'error', description: 'No batter set' };
  
    let contactChance = gameState.currentBatter.stats.contact / 100;
    switch (type) {
      case 'contact': contactChance *= 1.1; break;
      case 'power':   contactChance *= 0.9; break;
      case 'bunt':    contactChance *= 1.5; break;
    }
  
    if (Math.random() > contactChance) {
      gameState.strikes++;
      if (gameState.strikes >= 3) {
        gameState.outs++;
        resetCount();
        adjustMomentum(false);
        return { type: 'out', description: 'Strike out!' };
      }
      adjustMomentum(false);
      return { type: 'strike', description: 'Swing and miss!' };
    }
  
    return calculateHitResult(type);
  }
  
  export function bunt() {
    if (!gameState.currentBatter) return { type: 'error', description: 'No batter set' };
  
    const buntChance = 0.8;
    const success = Math.random() < buntChance;
    if (!success) {
      gameState.strikes++;
      if (gameState.strikes >= 3) {
        gameState.outs++;
        resetCount();
        adjustMomentum(false);
        return { type: 'out', description: 'Failed bunt, strike three!' };
      }
      adjustMomentum(false);
      return { type: 'strike', description: 'Foul bunt' };
    }
    if (gameState.bases[2] && gameState.outs < 2) {
      gameState.outs++;
      addRuns(1);
      gameState.bases[2] = null;
      resetCount();
      adjustMomentum(true);
      return { type: 'sacrifice', description: 'Sacrifice bunt, run scores!' };
    }
    gameState.outs++;
    resetCount();
    if (Math.random() < 0.2) {
      advanceRunners(1);
      gameState.bases[0] = 'runner';
      adjustMomentum(true);
      return { type: 'single', description: 'Bunt for a hit!' };
    }
    adjustMomentum(false);
    return { type: 'out', description: 'Bunt out!' };
  }
  
  export function hitAndRun() {
    if (!hasRunnersOnBase()) return { type: 'error', description: 'No runners on base' };
    gameState.isHitAndRun = true;
    return { type: 'hitandrun', description: 'Hit and run is on!' };
  }
  
  export function attemptSteal() {
    let baseToSteal = -1;
    if (gameState.bases[1] && !gameState.bases[2]) baseToSteal = 2;
    else if (gameState.bases[0] && !gameState.bases[1]) baseToSteal = 1;
    if (baseToSteal === -1) return { type: 'error', description: 'No eligible runner to steal' };
    const stealChance = 0.7;
    const success = Math.random() < stealChance;
    if (success) {
      gameState.bases[baseToSteal] = gameState.bases[baseToSteal - 1];
      gameState.bases[baseToSteal - 1] = null;
      return { type: 'steal', description: 'Successful steal!' };
    } else {
      gameState.bases[baseToSteal - 1] = null;
      gameState.outs++;
      return { type: 'out', description: 'Caught stealing!' };
    }
  }
  
  function calculateHitResult(swingType) {
    let roll = Math.random();
    if (swingType === 'power') roll *= 0.9;
    if (swingType === 'contact') roll *= 1.1;
    const momentumFactor = 2 - gameState.momentum;
    const HR_THRESHOLD = 0.05 * momentumFactor;
    const TRIPLE_THRESHOLD = 0.10 * momentumFactor;
    const DOUBLE_THRESHOLD = 0.25 * momentumFactor;
    const SINGLE_THRESHOLD = 0.50 * momentumFactor;
  
    let outcome;
    if (roll < HR_THRESHOLD) {
      let runs = 1 + gameState.bases.filter(b => b !== null).length;
      // Scale runs down by 75%
      let scaledRuns = Math.floor(runs * 0.25);
      if (scaledRuns < 1) scaledRuns = 1;
      addRuns(scaledRuns);
      gameState.bases = [null, null, null];
      outcome = { type: 'homerun', description: `Home run! ${scaledRuns} run(s) score!` };
      adjustMomentum(true);
    } else if (roll < TRIPLE_THRESHOLD) {
      let runs = advanceRunners(3);
      let scaledRuns = Math.floor(runs * 0.25);
      if (scaledRuns < 1 && runs > 0) scaledRuns = 1;
      gameState.bases[2] = 'runner';
      outcome = { type: 'triple', description: `Triple! ${scaledRuns} run(s) score!` };
      adjustMomentum(true);
    } else if (roll < DOUBLE_THRESHOLD) {
      let runs = advanceRunners(2);
      let scaledRuns = Math.floor(runs * 0.25);
      if (scaledRuns < 1 && runs > 0) scaledRuns = 1;
      gameState.bases[1] = 'runner';
      outcome = { type: 'double', description: `Double! ${scaledRuns} run(s) score!` };
      adjustMomentum(true);
    } else if (roll < SINGLE_THRESHOLD) {
      let runs = advanceRunners(1);
      let scaledRuns = Math.floor(runs * 0.25);
      if (scaledRuns < 1 && runs > 0) scaledRuns = 1;
      gameState.bases[0] = 'runner';
      outcome = { type: 'single', description: `Single! ${scaledRuns} run(s) score!` };
      adjustMomentum(true);
    } else {
      gameState.outs++;
      if (roll < SINGLE_THRESHOLD + 0.05 && gameState.bases[2] && gameState.outs < 3) {
        addRuns(1);
        gameState.bases[2] = null;
        outcome = { type: 'out', description: 'Sacrifice fly, run scores!' };
      } else {
        outcome = { type: 'out', description: 'Out!' };
      }
      adjustMomentum(false);
    }
    return outcome;
  }
  
  function adjustMomentum(hitOccurred) {
    const delta = 0.05;
    if (hitOccurred) {
      gameState.momentum = Math.min(1.2, gameState.momentum + delta);
    } else {
      gameState.momentum = Math.max(0.8, gameState.momentum - delta);
    }
  }
  
  function handleFailedHitAndRun() {
    if (Math.random() < 0.7) {
      for (let i = 0; i < gameState.bases.length; i++) {
        if (gameState.bases[i]) {
          gameState.bases[i] = null;
          gameState.outs++;
          if (gameState.outs >= 3) break;
        }
      }
    }
    gameState.isHitAndRun = false;
  }
  
  function advanceRunners(basesToAdvance) {
    let runs = 0;
    for (let i = 2; i >= 0; i--) {
      if (gameState.bases[i] !== null) {
        if (i + basesToAdvance > 2) {
          runs++;
          gameState.bases[i] = null;
        } else {
          gameState.bases[i + basesToAdvance] = gameState.bases[i];
          gameState.bases[i] = null;
        }
      }
    }
    addRuns(runs);
    return runs;
  }
  
  function addRuns(runs) {
    if (gameState.isTopInning) {
      gameState.awayScore += runs;
    } else {
      gameState.homeScore += runs;
    }
  }
  
  function resetCount() {
    gameState.balls = 0;
    gameState.strikes = 0;
    gameState.isHitAndRun = false;
  }
  
  // Inning management and box score update.
  export function checkInningEnd() {
    if (gameState.outs >= 3) {
      // Record runs for this half inning.
      if (gameState.isTopInning) {
        const inningRuns = gameState.awayScore - gameState.prevAwayScore;
        gameState.boxScore.push({ inning: gameState.inning, away: inningRuns, home: 0 });
        gameState.prevAwayScore = gameState.awayScore;
      } else {
        const inningRuns = gameState.homeScore - gameState.prevHomeScore;
        if (gameState.boxScore.length > 0) {
          gameState.boxScore[gameState.boxScore.length - 1].home = inningRuns;
        } else {
          gameState.boxScore.push({ inning: gameState.inning, away: 0, home: inningRuns });
        }
        gameState.prevHomeScore = gameState.homeScore;
      }
      
      gameState.outs = 0;
      gameState.strikes = 0;
      gameState.balls = 0;
      gameState.bases = [null, null, null];
      
      if (gameState.inning >= 9 && !gameState.isTopInning && gameState.homeScore !== gameState.awayScore) {
        gameState.gameOver = true;
        return true;
      }
      if (gameState.isTopInning) {
        gameState.isTopInning = false;
      } else {
        gameState.isTopInning = true;
        gameState.inning++;
      }
      return true;
    }
    return false;
  }
  
  export function intentionalWalk() {
    // Pitcher issues an intentional walk; batter advances.
    advanceRunners(1);
    gameState.bases[0] = 'runner';
    resetCount();
    return { type: 'walk', description: 'Intentional walk; batter advances.' };
  }
  
  function hasRunnersOnBase() {
    return gameState.bases.some(base => base !== null);
  }
  
  // Batter management is handled in main.js.
  export function nextBatter() {
    // Managed externally.
  }
  