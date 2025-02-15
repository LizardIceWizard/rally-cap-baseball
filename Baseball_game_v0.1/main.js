// main.js
import { gameState, swing, bunt, hitAndRun, attemptSteal, checkInningEnd, intentionalWalk } from './game-mechanics.js';
import { mlbTeams } from './data.js';

let homeTeam, awayTeam;

document.addEventListener('DOMContentLoaded', () => {
  populateTeamSelects();
  document.getElementById('start-game-btn').addEventListener('click', startGame);
});

function populateTeamSelects() {
  const homeSelect = document.getElementById('home-team-select');
  const awaySelect = document.getElementById('away-team-select');
  
  mlbTeams.forEach((team, index) => {
    const optionHome = document.createElement('option');
    optionHome.value = index;
    optionHome.textContent = team.name;
    homeSelect.appendChild(optionHome);
    
    const optionAway = document.createElement('option');
    optionAway.value = index;
    optionAway.textContent = team.name;
    awaySelect.appendChild(optionAway);
  });
}

function startGame() {
  const homeSelect = document.getElementById('home-team-select');
  const awaySelect = document.getElementById('away-team-select');
  
  if (homeSelect.value === awaySelect.value) {
    alert("Please choose two different teams.");
    return;
  }
  
  homeTeam = mlbTeams[homeSelect.value];
  awayTeam = mlbTeams[awaySelect.value];
  
  // Set team names and colors on the scoreboard.
  const homeNameEl = document.getElementById('home-team-name');
  const awayNameEl = document.getElementById('away-team-name');
  
  homeNameEl.textContent = homeTeam.name;
  awayNameEl.textContent = awayTeam.name;
  homeNameEl.style.backgroundColor = homeTeam.color || '#003087';
  awayNameEl.style.backgroundColor = awayTeam.color || '#BD3039';
  
  // Initialize batter indexes.
  homeTeam.currentBatterIndex = 0;
  awayTeam.currentBatterIndex = 0;
  
  // Initialize game state.
  // In top half, away team bats; defending pitcher is homeTeam.pitcher.
  Object.assign(gameState, {
    balls: 0,
    strikes: 0,
    outs: 0,
    inning: 1,
    isTopInning: true,
    homeScore: 0,
    awayScore: 0,
    bases: [null, null, null],
    currentBatter: awayTeam.lineup[0],
    currentPitcher: homeTeam.pitcher,
    lastPlayResult: null,
    isHitAndRun: false,
    momentum: 1,
    gameOver: false,
    boxScore: [],
    prevAwayScore: 0,
    prevHomeScore: 0
  });
  
  showScreen('game-play');
  updateDisplay();
  updateGameLog(`Game started! ${homeTeam.name} (home) vs. ${awayTeam.name} (away).`);
  updateBoxScore();
}

// Helper: Show a given screen.
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
}

function updateDisplay() {
  document.getElementById('inning').textContent = gameState.inning;
  document.getElementById('half-inning').textContent = gameState.isTopInning ? 'Top' : 'Bottom';
  document.getElementById('home-score').textContent = gameState.homeScore;
  document.getElementById('away-score').textContent = gameState.awayScore;
  document.getElementById('outs').textContent = gameState.outs;
  
  // Update pitcher info based on defending team.
  const pitcherEl = document.getElementById('pitcher-name');
  if (gameState.currentPitcher) {
    pitcherEl.textContent = gameState.currentPitcher.name;
    pitcherEl.style.color = gameState.isTopInning 
      ? (homeTeam.color || '#003087') 
      : (awayTeam.color || '#BD3039');
  } else {
    pitcherEl.textContent = 'N/A';
  }
  
  document.getElementById('batter-name').textContent = gameState.currentBatter ? gameState.currentBatter.name : 'N/A';
  
  ['first-base', 'second-base', 'third-base'].forEach((id, index) => {
    document.getElementById(id).classList.toggle('occupied', gameState.bases[index] !== null);
  });
  
  updateLineupDisplay();
  setupControls();
  updateBoxScore();
}

function updateLineupDisplay() {
  const battingTeam = gameState.isTopInning ? awayTeam : homeTeam;
  const currentIndex = battingTeam.currentBatterIndex;
  const nextIndex = (currentIndex + 1) % battingTeam.lineup.length;
  
  document.getElementById('current-batter').textContent = 
    `${battingTeam.lineup[currentIndex].name} (${battingTeam.lineup[currentIndex].position})`;
  document.getElementById('on-deck').textContent = 
    `${battingTeam.lineup[nextIndex].name} (${battingTeam.lineup[nextIndex].position})`;
}

function setupControls() {
  const buttonsDiv = document.getElementById('action-buttons');
  buttonsDiv.innerHTML = '';
  
  const battingDiv = document.createElement('div');
  battingDiv.className = 'batting-options';
  
  ['contact', 'normal', 'power'].forEach(swingType => {
    const button = document.createElement('button');
    button.textContent = swingType + ' swing';
    button.onclick = () => handleSwing(swingType);
    battingDiv.appendChild(button);
  });
  
  const buntButton = document.createElement('button');
  buntButton.textContent = 'Bunt for Hit';
  buntButton.onclick = () => handleBunt();
  battingDiv.appendChild(buntButton);
  
  if (gameState.bases.some(base => base !== null)) {
    const hitAndRunButton = document.createElement('button');
    hitAndRunButton.textContent = 'Hit and Run';
    hitAndRunButton.onclick = () => handleHitAndRun();
    battingDiv.appendChild(hitAndRunButton);
  }
  
  if (gameState.bases.some(base => base !== null)) {
    const stealButton = document.createElement('button');
    stealButton.textContent = 'Attempt Steal';
    stealButton.onclick = () => handleSteal();
    battingDiv.appendChild(stealButton);
  }
  
  const walkButton = document.createElement('button');
  walkButton.textContent = 'Intentional Walk';
  walkButton.onclick = () => handleIntentionalWalk();
  battingDiv.appendChild(walkButton);
  
  buttonsDiv.appendChild(battingDiv);
}

function handleSwing(swingType) {
  const result = swing(swingType);
  updateGameLog(`${gameState.currentBatter.name} ${result.description}`);
  // If the outcome is not a non-final strike, the plate appearance is complete.
  if (result.type !== "strike") {
    cycleBatter();
  }
  checkAndUpdateInning();
  updateDisplay();
}

function handleBunt() {
  const result = bunt();
  updateGameLog(`${gameState.currentBatter.name} ${result.description}`);
  if (result.type !== "strike") {
    cycleBatter();
  }
  checkAndUpdateInning();
  updateDisplay();
}

function handleHitAndRun() {
  const result = hitAndRun();
  updateGameLog(`${gameState.currentBatter.name} ${result.description}`);
  // Assuming hit-and-run resolves the plate appearance:
  if (result.type !== "strike") {
    cycleBatter();
  }
  updateDisplay();
}

function handleSteal() {
  const result = attemptSteal();
  updateGameLog(result.description);
  checkAndUpdateInning();
  updateDisplay();
}

function handleIntentionalWalk() {
  const result = intentionalWalk();
  updateGameLog(result.description);
  cycleBatter();
  checkAndUpdateInning();
  updateDisplay();
}

// Helper to cycle the batter for the current batting team.
function cycleBatter() {
  const battingTeam = gameState.isTopInning ? awayTeam : homeTeam;
  battingTeam.currentBatterIndex = (battingTeam.currentBatterIndex + 1) % battingTeam.lineup.length;
  gameState.currentBatter = battingTeam.lineup[battingTeam.currentBatterIndex];
}

// Check inning end; if inning ends, update box score and update batter/pitcher.
function checkAndUpdateInning() {
  if (checkInningEnd()) {
    if (gameState.gameOver) {
      updateGameLog(`Game Over! Final Score - Away: ${gameState.awayScore} Home: ${gameState.homeScore}`);
      alert(`Game Over! Final Score - Away: ${gameState.awayScore} Home: ${gameState.homeScore}`);
    } else {
      updateGameLog(`End of ${gameState.isTopInning ? 'top' : 'bottom'} of inning ${gameState.inning}`);
      // Cycle batter for the batting team since the plate appearance ended with the inning.
      const battingTeam = gameState.isTopInning ? awayTeam : homeTeam;
      battingTeam.currentBatterIndex = (battingTeam.currentBatterIndex + 1) % battingTeam.lineup.length;
      gameState.currentBatter = battingTeam.lineup[battingTeam.currentBatterIndex];
      // Update pitcher info based on defending team.
      gameState.currentPitcher = gameState.isTopInning ? homeTeam.pitcher : awayTeam.pitcher;
    }
  }
}

// Append a message to the game log.
function updateGameLog(message) {
  const gameLog = document.getElementById('game-log');
  const entry = document.createElement('p');
  entry.textContent = message;
  gameLog.appendChild(entry);
  gameLog.scrollTop = gameLog.scrollHeight;
}

// Update the box score. Always display 9 innings.
function updateBoxScore() {
  const boxScoreDiv = document.getElementById('box-score');
  let html = `<table>
    <thead>
      <tr>
        <th></th>`;
  for (let i = 1; i <= 9; i++) {
    html += `<th>${i}</th>`;
  }
  html += `</tr>
    </thead>
    <tbody>
      <tr>
        <th>Away</th>`;
  for (let i = 1; i <= 9; i++) {
    let inningObj = gameState.boxScore.find(obj => obj.inning === i);
    let awayScore = inningObj ? inningObj.away : "-";
    html += `<td>${awayScore}</td>`;
  }
  html += `</tr>
      <tr>
        <th>Home</th>`;
  for (let i = 1; i <= 9; i++) {
    let inningObj = gameState.boxScore.find(obj => obj.inning === i);
    let homeScore = inningObj ? inningObj.home : "-";
    html += `<td>${homeScore}</td>`;
  }
  html += `</tr>
    </tbody>
  </table>`;
  boxScoreDiv.innerHTML = html;
}
