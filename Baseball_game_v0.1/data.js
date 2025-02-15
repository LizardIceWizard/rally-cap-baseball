export const mlbTeams = [
    {
      name: "New York Yankees",
      color: "#003087", // Yankees blue
      logo: "logos/yankees.png",
      pitcher: {
        name: "Gerrit Cole",
        stats: { control: 85, power: 75, stamina: 85 }
      },
      lineup: [
        { name: "Aaron Judge", position: "RF", stats: { contact: 80, power: 95, speed: 80, bunting: 40 } },
        { name: "DJ LeMahieu", position: "2B", stats: { contact: 85, power: 70, speed: 75, bunting: 60 } },
        { name: "Giancarlo Stanton", position: "LF", stats: { contact: 78, power: 98, speed: 70, bunting: 30 } },
        { name: "Gleyber Torres", position: "SS", stats: { contact: 82, power: 75, speed: 80, bunting: 55 } },
        { name: "Brett Gardner", position: "CF", stats: { contact: 80, power: 65, speed: 90, bunting: 60 } },
        { name: "Luke Voit", position: "1B", stats: { contact: 75, power: 80, speed: 60, bunting: 45 } },
        { name: "Gary Sánchez", position: "C", stats: { contact: 70, power: 78, speed: 55, bunting: 50 } },
        { name: "Clint Frazier", position: "RF", stats: { contact: 80, power: 75, speed: 85, bunting: 40 } },
        { name: "Gleyber Torres II", position: "3B", stats: { contact: 82, power: 68, speed: 75, bunting: 65 } }
      ]
    },
    {
      name: "Boston Red Sox",
      color: "#BD3039", // Red Sox red
      logo: "logos/redsox.png",
      pitcher: {
        name: "Chris Sale",
        stats: { control: 80, power: 85, stamina: 88 }
      },
      lineup: [
        { name: "Xander Bogaerts", position: "SS", stats: { contact: 85, power: 75, speed: 80, bunting: 60 } },
        { name: "J.D. Martinez", position: "RF", stats: { contact: 82, power: 90, speed: 70, bunting: 40 } },
        { name: "Rafael Devers", position: "3B", stats: { contact: 80, power: 85, speed: 75, bunting: 50 } },
        { name: "Mookie Betts", position: "CF", stats: { contact: 88, power: 80, speed: 85, bunting: 55 } },
        { name: "Christian Vázquez", position: "C", stats: { contact: 78, power: 70, speed: 60, bunting: 50 } },
        { name: "Jackie Bradley Jr.", position: "LF", stats: { contact: 80, power: 65, speed: 88, bunting: 45 } },
        { name: "Bobby Dalbec", position: "1B", stats: { contact: 75, power: 80, speed: 65, bunting: 40 } },
        { name: "Alex Verdugo", position: "RF", stats: { contact: 82, power: 77, speed: 80, bunting: 55 } },
        { name: "Nathan Eovaldi", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Tampa Bay Rays",
      color: "#092C5C", // Rays navy
      logo: "logos/rays.png",
      pitcher: {
        name: "Chris Archer",
        stats: { control: 82, power: 80, stamina: 87 }
      },
      lineup: [
        { name: "Wander Franco", position: "SS", stats: { contact: 85, power: 80, speed: 88, bunting: 55 } },
        { name: "Manuel Margot", position: "CF", stats: { contact: 80, power: 75, speed: 90, bunting: 50 } },
        { name: "Yandy Díaz", position: "2B", stats: { contact: 83, power: 70, speed: 78, bunting: 60 } },
        { name: "Kevin Kiermaier", position: "LF", stats: { contact: 78, power: 68, speed: 85, bunting: 45 } },
        { name: "Randy Arozarena", position: "RF", stats: { contact: 80, power: 82, speed: 87, bunting: 50 } },
        { name: "Joey Wendle", position: "3B", stats: { contact: 82, power: 75, speed: 80, bunting: 55 } },
        { name: "Diego Castillo", position: "C", stats: { contact: 75, power: 68, speed: 60, bunting: 50 } },
        { name: "Tyler Glasnow", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Josh Fleming", position: "DH", stats: { contact: 80, power: 75, speed: 70, bunting: 45 } }
      ]
    },
    {
      name: "Toronto Blue Jays",
      color: "#134A8E", // Blue Jays blue
      logo: "logos/bluejays.png",
      pitcher: {
        name: "Hyun Jin Ryu",
        stats: { control: 83, power: 78, stamina: 85 }
      },
      lineup: [
        { name: "Bo Bichette", position: "SS", stats: { contact: 84, power: 80, speed: 90, bunting: 50 } },
        { name: "George Springer", position: "CF", stats: { contact: 82, power: 85, speed: 88, bunting: 55 } },
        { name: "Vladimir Guerrero Jr.", position: "1B", stats: { contact: 80, power: 90, speed: 75, bunting: 40 } },
        { name: "Cavan Biggio", position: "2B", stats: { contact: 83, power: 70, speed: 80, bunting: 60 } },
        { name: "Teoscar Hernández", position: "LF", stats: { contact: 78, power: 85, speed: 80, bunting: 45 } },
        { name: "Marcus Semien", position: "3B", stats: { contact: 82, power: 80, speed: 78, bunting: 55 } },
        { name: "Alejandro Kirk", position: "C", stats: { contact: 75, power: 68, speed: 60, bunting: 50 } },
        { name: "Brett Phillips", position: "RF", stats: { contact: 80, power: 75, speed: 82, bunting: 50 } },
        { name: "Steven Matz", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Baltimore Orioles",
      color: "#000000", // Orioles black (with orange accents in logo)
      logo: "logos/orioles.png",
      pitcher: {
        name: "John Means",
        stats: { control: 80, power: 78, stamina: 85 }
      },
      lineup: [
        { name: "Cedric Mullins", position: "CF", stats: { contact: 82, power: 75, speed: 90, bunting: 55 } },
        { name: "Anthony Santander", position: "RF", stats: { contact: 80, power: 80, speed: 85, bunting: 50 } },
        { name: "Ryan Mountcastle", position: "1B", stats: { contact: 80, power: 85, speed: 70, bunting: 45 } },
        { name: "Adley Rutschman", position: "C", stats: { contact: 83, power: 78, speed: 65, bunting: 55 } },
        { name: "Ryan Flaherty", position: "2B", stats: { contact: 80, power: 70, speed: 75, bunting: 60 } },
        { name: "Mark Mathias", position: "3B", stats: { contact: 78, power: 75, speed: 70, bunting: 50 } },
        { name: "Austin Hays", position: "LF", stats: { contact: 78, power: 72, speed: 85, bunting: 50 } },
        { name: "Grayson Rodriguez", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Tyler Wells", position: "DH", stats: { contact: 80, power: 70, speed: 60, bunting: 55 } }
      ]
    },
    {
      name: "Minnesota Twins",
      color: "#0C2340", // Twins navy blue
      logo: "logos/twins.png",
      pitcher: {
        name: "Kenta Maeda",
        stats: { control: 83, power: 80, stamina: 85 }
      },
      lineup: [
        { name: "Johan Camargo", position: "2B", stats: { contact: 82, power: 75, speed: 80, bunting: 60 } },
        { name: "Max Kepler", position: "RF", stats: { contact: 80, power: 80, speed: 85, bunting: 55 } },
        { name: "J.P. Crawford", position: "SS", stats: { contact: 84, power: 70, speed: 80, bunting: 60 } },
        { name: "Carlos Correa", position: "3B", stats: { contact: 82, power: 78, speed: 75, bunting: 55 } },
        { name: "Nelson Cruz", position: "LF", stats: { contact: 78, power: 85, speed: 70, bunting: 45 } },
        { name: "Brian Dozier", position: "1B", stats: { contact: 80, power: 75, speed: 65, bunting: 50 } },
        { name: "Luis Arráez", position: "C", stats: { contact: 85, power: 70, speed: 60, bunting: 55 } },
        { name: "Josh Donaldson", position: "DH", stats: { contact: 80, power: 80, speed: 70, bunting: 45 } },
        { name: "Kenta Maeda II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Chicago White Sox",
      color: "#000000", // White Sox black (with silver accents)
      logo: "logos/whitesox.png",
      pitcher: {
        name: "Lucas Giolito",
        stats: { control: 84, power: 82, stamina: 87 }
      },
      lineup: [
        { name: "Tim Anderson", position: "SS", stats: { contact: 83, power: 75, speed: 85, bunting: 60 } },
        { name: "Jose Abreu", position: "1B", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Yoán Moncada", position: "2B", stats: { contact: 82, power: 78, speed: 80, bunting: 55 } },
        { name: "Carlos Rodón", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Luis Robert", position: "CF", stats: { contact: 82, power: 80, speed: 90, bunting: 55 } },
        { name: "Leury García", position: "LF", stats: { contact: 80, power: 78, speed: 82, bunting: 50 } },
        { name: "Michael Kopech", position: "3B", stats: { contact: 80, power: 75, speed: 75, bunting: 55 } },
        { name: "Yoán Moncada II", position: "DH", stats: { contact: 82, power: 78, speed: 80, bunting: 55 } },
        { name: "Lucas Giolito II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Cleveland Guardians",
      color: "#E4002B", // Guardians red (sample)
      logo: "logos/guardians.png",
      pitcher: {
        name: "Shane Bieber",
        stats: { control: 85, power: 80, stamina: 88 }
      },
      lineup: [
        { name: "José Ramírez", position: "3B", stats: { contact: 85, power: 80, speed: 80, bunting: 60 } },
        { name: "Francisco Lindor", position: "SS", stats: { contact: 83, power: 75, speed: 85, bunting: 55 } },
        { name: "Josh Naylor", position: "RF", stats: { contact: 80, power: 85, speed: 80, bunting: 50 } },
        { name: "Mookie Betts", position: "CF", stats: { contact: 84, power: 78, speed: 85, bunting: 60 } },
        { name: "Andrés Giménez", position: "2B", stats: { contact: 82, power: 70, speed: 80, bunting: 55 } },
        { name: "Oscar González", position: "LF", stats: { contact: 80, power: 75, speed: 78, bunting: 50 } },
        { name: "Cavan Biggio", position: "1B", stats: { contact: 83, power: 75, speed: 70, bunting: 55 } },
        { name: "Cal Quantrill", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Shane Bieber II", position: "DH", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Detroit Tigers",
      color: "#0C2340", // Tigers navy
      logo: "logos/tigers.png",
      pitcher: {
        name: "Matthew Boyd",
        stats: { control: 80, power: 78, stamina: 85 }
      },
      lineup: [
        { name: "Jeimer Candelario", position: "SS", stats: { contact: 82, power: 75, speed: 80, bunting: 55 } },
        { name: "Miguel Cabrera", position: "1B", stats: { contact: 83, power: 80, speed: 70, bunting: 50 } },
        { name: "Austin Meadows", position: "RF", stats: { contact: 80, power: 85, speed: 78, bunting: 45 } },
        { name: "Jonathan Schoop", position: "3B", stats: { contact: 80, power: 75, speed: 80, bunting: 55 } },
        { name: "Victor Martinez", position: "C", stats: { contact: 78, power: 70, speed: 60, bunting: 50 } },
        { name: "Ian Cole", position: "LF", stats: { contact: 80, power: 75, speed: 82, bunting: 50 } },
        { name: "Nick Castellanos", position: "DH", stats: { contact: 82, power: 85, speed: 70, bunting: 45 } },
        { name: "Albi Kurti", position: "2B", stats: { contact: 80, power: 75, speed: 78, bunting: 55 } },
        { name: "Matthew Boyd II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Kansas City Royals",
      color: "#004687", // Royals blue
      logo: "logos/royals.png",
      pitcher: {
        name: "Brad Keller",
        stats: { control: 82, power: 78, stamina: 85 }
      },
      lineup: [
        { name: "Bobby Witt Jr.", position: "SS", stats: { contact: 83, power: 80, speed: 85, bunting: 55 } },
        { name: "Whit Merrifield", position: "2B", stats: { contact: 82, power: 75, speed: 80, bunting: 60 } },
        { name: "Brett Pill", position: "1B", stats: { contact: 80, power: 80, speed: 70, bunting: 50 } },
        { name: "Jordy Mercer", position: "LF", stats: { contact: 80, power: 75, speed: 82, bunting: 55 } },
        { name: "Alex Gordon", position: "RF", stats: { contact: 80, power: 78, speed: 75, bunting: 50 } },
        { name: "Andrew Benintendi", position: "CF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Tony Kemp", position: "3B", stats: { contact: 80, power: 75, speed: 70, bunting: 55 } },
        { name: "Brad Keller II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Whit Merrifield II", position: "DH", stats: { contact: 82, power: 75, speed: 80, bunting: 60 } }
      ]
    },
    {
      name: "Houston Astros",
      color: "#002D62", // Astros navy
      logo: "logos/astros.png",
      pitcher: {
        name: "Justin Verlander",
        stats: { control: 85, power: 82, stamina: 90 }
      },
      lineup: [
        { name: "Jose Altuve", position: "2B", stats: { contact: 84, power: 80, speed: 85, bunting: 60 } },
        { name: "Yordan Alvarez", position: "LF", stats: { contact: 82, power: 95, speed: 80, bunting: 45 } },
        { name: "Alex Bregman", position: "3B", stats: { contact: 83, power: 85, speed: 80, bunting: 55 } },
        { name: "Carlos Correa", position: "SS", stats: { contact: 82, power: 78, speed: 80, bunting: 55 } },
        { name: "Michael Brantley", position: "CF", stats: { contact: 82, power: 75, speed: 85, bunting: 55 } },
        { name: "Yuli Gurriel", position: "1B", stats: { contact: 80, power: 80, speed: 70, bunting: 50 } },
        { name: "Alex Verdugo", position: "RF", stats: { contact: 82, power: 77, speed: 80, bunting: 55 } },
        { name: "Kyle Tucker", position: "DH", stats: { contact: 80, power: 85, speed: 80, bunting: 50 } },
        { name: "Justin Verlander II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Los Angeles Angels",
      color: "#BA0021", // Angels red
      logo: "logos/angels.png",
      pitcher: {
        name: "Shohei Ohtani",
        stats: { control: 88, power: 90, stamina: 92 }
      },
      lineup: [
        { name: "Mike Trout", position: "CF", stats: { contact: 85, power: 90, speed: 88, bunting: 60 } },
        { name: "Anthony Rendon", position: "3B", stats: { contact: 84, power: 82, speed: 80, bunting: 55 } },
        { name: "Jo Adell", position: "RF", stats: { contact: 82, power: 85, speed: 85, bunting: 50 } },
        { name: "David Fletcher", position: "2B", stats: { contact: 83, power: 75, speed: 80, bunting: 60 } },
        { name: "Jorge Mateo", position: "SS", stats: { contact: 82, power: 78, speed: 80, bunting: 55 } },
        { name: "Zach Neto", position: "LF", stats: { contact: 80, power: 75, speed: 82, bunting: 50 } },
        { name: "Joey Loperfido", position: "C", stats: { contact: 78, power: 70, speed: 60, bunting: 55 } },
        { name: "Shohei Ohtani II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Mike Trout II", position: "DH", stats: { contact: 85, power: 90, speed: 88, bunting: 60 } }
      ]
    },
    {
      name: "Oakland Athletics",
      color: "#003831", // Athletics green
      logo: "logos/athletics.png",
      pitcher: {
        name: "Mike Fiers",
        stats: { control: 80, power: 78, stamina: 85 }
      },
      lineup: [
        { name: "Matt Olson", position: "1B", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Matt Chapman", position: "3B", stats: { contact: 82, power: 80, speed: 75, bunting: 55 } },
        { name: "Sean Murphy", position: "C", stats: { contact: 80, power: 75, speed: 60, bunting: 50 } },
        { name: "Marcus Semien", position: "SS", stats: { contact: 82, power: 80, speed: 78, bunting: 55 } },
        { name: "Stephen Piscotty", position: "LF", stats: { contact: 80, power: 78, speed: 82, bunting: 50 } },
        { name: "Matt Olson II", position: "DH", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Tony Kemp", position: "RF", stats: { contact: 80, power: 75, speed: 80, bunting: 55 } },
        { name: "Matt Olson III", position: "2B", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Mike Fiers II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Seattle Mariners",
      color: "#0C2C56", // Mariners navy
      logo: "logos/mariners.png",
      pitcher: {
        name: "Robbie Ray",
        stats: { control: 82, power: 80, stamina: 87 }
      },
      lineup: [
        { name: "Ty France", position: "1B", stats: { contact: 82, power: 75, speed: 70, bunting: 55 } },
        { name: "Kyle Lewis", position: "CF", stats: { contact: 80, power: 80, speed: 88, bunting: 50 } },
        { name: "Jarred Kelenic", position: "RF", stats: { contact: 78, power: 85, speed: 85, bunting: 45 } },
        { name: "Nelson Cruz", position: "DH", stats: { contact: 80, power: 82, speed: 70, bunting: 40 } },
        { name: "Yoshihisa Hirano", position: "2B", stats: { contact: 80, power: 70, speed: 78, bunting: 55 } },
        { name: "Dominic Fletcher", position: "SS", stats: { contact: 82, power: 75, speed: 80, bunting: 60 } },
        { name: "Evan White", position: "3B", stats: { contact: 80, power: 75, speed: 70, bunting: 50 } },
        { name: "Robbie Ray II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Ty France II", position: "DH", stats: { contact: 82, power: 75, speed: 70, bunting: 55 } }
      ]
    },
    {
      name: "Texas Rangers",
      color: "#003278", // Rangers blue
      logo: "logos/rangers.png",
      pitcher: {
        name: "Jon Gray",
        stats: { control: 83, power: 80, stamina: 87 }
      },
      lineup: [
        { name: "Adolis García", position: "CF", stats: { contact: 82, power: 85, speed: 85, bunting: 50 } },
        { name: "Kyle Gibson", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Jose Trevino", position: "C", stats: { contact: 80, power: 70, speed: 60, bunting: 55 } },
        { name: "Nick Solak", position: "3B", stats: { contact: 82, power: 78, speed: 75, bunting: 55 } },
        { name: "Isiah Kiner-Falefa", position: "SS", stats: { contact: 83, power: 75, speed: 80, bunting: 60 } },
        { name: "Leody Taveras", position: "RF", stats: { contact: 80, power: 75, speed: 85, bunting: 50 } },
        { name: "Jon Gray II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Nick Solak II", position: "LF", stats: { contact: 82, power: 78, speed: 75, bunting: 55 } },
        { name: "Jose Trevino II", position: "DH", stats: { contact: 80, power: 70, speed: 60, bunting: 55 } }
      ]
    },
    {
      name: "New York Mets",
      color: "#002D72", // Mets blue
      logo: "logos/mets.png",
      pitcher: {
        name: "Jacob deGrom",
        stats: { control: 86, power: 82, stamina: 90 }
      },
      lineup: [
        { name: "Pete Alonso", position: "1B", stats: { contact: 80, power: 90, speed: 70, bunting: 50 } },
        { name: "Francisco Lindor", position: "SS", stats: { contact: 84, power: 78, speed: 85, bunting: 55 } },
        { name: "Jeff McNeil", position: "2B", stats: { contact: 82, power: 75, speed: 80, bunting: 60 } },
        { name: "Michael Conforto", position: "LF", stats: { contact: 80, power: 85, speed: 80, bunting: 50 } },
        { name: "Brandon Nimmo", position: "CF", stats: { contact: 82, power: 75, speed: 85, bunting: 55 } },
        { name: "Starling Marte", position: "RF", stats: { contact: 80, power: 80, speed: 88, bunting: 50 } },
        { name: "Jacob deGrom II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Pete Alonso II", position: "DH", stats: { contact: 80, power: 90, speed: 70, bunting: 50 } },
        { name: "Francisco Lindor II", position: "3B", stats: { contact: 84, power: 78, speed: 85, bunting: 55 } }
      ]
    },
    {
      name: "Atlanta Braves",
      color: "#13294B", // Braves navy
      logo: "logos/braves.png",
      pitcher: {
        name: "Max Fried",
        stats: { control: 84, power: 80, stamina: 88 }
      },
      lineup: [
        { name: "Ronald Acuña Jr.", position: "CF", stats: { contact: 85, power: 90, speed: 92, bunting: 60 } },
        { name: "Ozzie Albies", position: "2B", stats: { contact: 83, power: 80, speed: 88, bunting: 55 } },
        { name: "Marcell Ozuna", position: "LF", stats: { contact: 80, power: 85, speed: 80, bunting: 50 } },
        { name: "Dansby Swanson", position: "SS", stats: { contact: 82, power: 78, speed: 85, bunting: 55 } },
        { name: "Freddie Freeman", position: "1B", stats: { contact: 84, power: 85, speed: 75, bunting: 55 } },
        { name: "Austin Riley", position: "3B", stats: { contact: 82, power: 90, speed: 80, bunting: 50 } },
        { name: "Eddie Rosario", position: "RF", stats: { contact: 80, power: 82, speed: 85, bunting: 55 } },
        { name: "Max Fried II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Ozzie Albies II", position: "DH", stats: { contact: 83, power: 80, speed: 88, bunting: 55 } }
      ]
    },
    {
      name: "Philadelphia Phillies",
      color: "#E81828", // Phillies red
      logo: "logos/phillies.png",
      pitcher: {
        name: "Aaron Nola",
        stats: { control: 84, power: 80, stamina: 88 }
      },
      lineup: [
        { name: "Bryce Harper", position: "RF", stats: { contact: 82, power: 88, speed: 80, bunting: 50 } },
        { name: "Kyle Schwarber", position: "LF", stats: { contact: 80, power: 85, speed: 70, bunting: 45 } },
        { name: "J.T. Realmuto", position: "C", stats: { contact: 82, power: 78, speed: 70, bunting: 55 } },
        { name: "Nick Castellanos", position: "1B", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Bryce Harper II", position: "DH", stats: { contact: 82, power: 88, speed: 80, bunting: 50 } },
        { name: "Didi Gregorius", position: "2B", stats: { contact: 80, power: 75, speed: 80, bunting: 55 } },
        { name: "Aaron Nola II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Kyle Schwarber II", position: "3B", stats: { contact: 80, power: 85, speed: 70, bunting: 45 } },
        { name: "J.T. Realmuto II", position: "SS", stats: { contact: 82, power: 78, speed: 70, bunting: 55 } }
      ]
    },
    {
      name: "Washington Nationals",
      color: "#AB0003", // Nationals red
      logo: "logos/nationals.png",
      pitcher: {
        name: "Stephen Strasburg",
        stats: { control: 84, power: 80, stamina: 88 }
      },
      lineup: [
        { name: "Juan Soto", position: "RF", stats: { contact: 82, power: 90, speed: 80, bunting: 50 } },
        { name: "Vladimir Guerrero Jr.", position: "1B", stats: { contact: 80, power: 90, speed: 70, bunting: 40 } },
        { name: "Trea Turner", position: "SS", stats: { contact: 84, power: 78, speed: 88, bunting: 55 } },
        { name: "Patrick Corbin", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Nelson Cruz", position: "DH", stats: { contact: 80, power: 82, speed: 70, bunting: 40 } },
        { name: "Gerald Williams", position: "3B", stats: { contact: 80, power: 75, speed: 70, bunting: 55 } },
        { name: "Bryce Harper", position: "LF", stats: { contact: 82, power: 88, speed: 80, bunting: 50 } },
        { name: "Juan Soto II", position: "CF", stats: { contact: 82, power: 90, speed: 80, bunting: 50 } },
        { name: "Stephen Strasburg II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } }
      ]
    },
    {
      name: "Miami Marlins",
      color: "#000000", // Marlins black
      logo: "logos/marlins.png",
      pitcher: {
        name: "Blake Snell",
        stats: { control: 83, power: 80, stamina: 87 }
      },
      lineup: [
        { name: "J.T. Realmuto", position: "C", stats: { contact: 82, power: 78, speed: 70, bunting: 55 } },
        { name: "Jazz Chisholm", position: "2B", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Garrett Cooper", position: "1B", stats: { contact: 80, power: 82, speed: 70, bunting: 50 } },
        { name: "Starlin Castro", position: "SS", stats: { contact: 82, power: 75, speed: 80, bunting: 55 } },
        { name: "José Ureña", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "James McCann", position: "C", stats: { contact: 80, power: 70, speed: 60, bunting: 55 } },
        { name: "Sixto Sanchez", position: "CF", stats: { contact: 82, power: 75, speed: 85, bunting: 55 } },
        { name: "Jazz Chisholm II", position: "LF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Garrett Cooper II", position: "DH", stats: { contact: 80, power: 82, speed: 70, bunting: 50 } }
      ]
    },
    {
      name: "St. Louis Cardinals",
      color: "#C41E3A", // Cardinals red
      logo: "logos/cardinals.png",
      pitcher: {
        name: "Adam Wainwright",
        stats: { control: 83, power: 80, stamina: 87 }
      },
      lineup: [
        { name: "Paul Goldschmidt", position: "1B", stats: { contact: 82, power: 85, speed: 70, bunting: 50 } },
        { name: "Paul DeJong", position: "SS", stats: { contact: 82, power: 78, speed: 85, bunting: 55 } },
        { name: "Tommy Edman", position: "2B", stats: { contact: 82, power: 75, speed: 80, bunting: 55 } },
        { name: "Yadier Molina", position: "C", stats: { contact: 80, power: 70, speed: 60, bunting: 50 } },
        { name: "Nolan Arenado", position: "3B", stats: { contact: 82, power: 88, speed: 75, bunting: 55 } },
        { name: "Paul Goldschmidt II", position: "DH", stats: { contact: 82, power: 85, speed: 70, bunting: 50 } },
        { name: "Adam Wainwright II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Paul DeJong II", position: "LF", stats: { contact: 82, power: 78, speed: 85, bunting: 55 } },
        { name: "Tommy Edman II", position: "CF", stats: { contact: 82, power: 75, speed: 80, bunting: 55 } }
      ]
    },
    {
      name: "Milwaukee Brewers",
      color: "#0A2351", // Brewers navy
      logo: "logos/brewers.png",
      pitcher: {
        name: "Corbin Burnes",
        stats: { control: 84, power: 80, stamina: 88 }
      },
      lineup: [
        { name: "Christian Yelich", position: "LF", stats: { contact: 82, power: 85, speed: 88, bunting: 55 } },
        { name: "Travis Shaw", position: "1B", stats: { contact: 80, power: 82, speed: 70, bunting: 50 } },
        { name: "Chase Anderson", position: "3B", stats: { contact: 82, power: 78, speed: 75, bunting: 55 } },
        { name: "Keston Hiura", position: "SS", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Wade Miley", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Christian Yelich II", position: "CF", stats: { contact: 82, power: 85, speed: 88, bunting: 55 } },
        { name: "Travis Shaw II", position: "DH", stats: { contact: 80, power: 82, speed: 70, bunting: 50 } },
        { name: "Chase Anderson II", position: "2B", stats: { contact: 82, power: 78, speed: 75, bunting: 55 } },
        { name: "Keston Hiura II", position: "RF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } }
      ]
    },
    {
      name: "Chicago Cubs",
      color: "#0E3386", // Cubs blue
      logo: "logos/cubs.png",
      pitcher: {
        name: "Zach Davies",
        stats: { control: 82, power: 80, stamina: 87 }
      },
      lineup: [
        { name: "Kris Bryant", position: "3B", stats: { contact: 82, power: 85, speed: 78, bunting: 55 } },
        { name: "Anthony Rizzo", position: "1B", stats: { contact: 80, power: 82, speed: 70, bunting: 50 } },
        { name: "Javier Báez", position: "SS", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Willson Contreras", position: "C", stats: { contact: 80, power: 75, speed: 60, bunting: 50 } },
        { name: "Ian Happ", position: "LF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Kyle Schwarber", position: "RF", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Zach Davies II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Javier Báez II", position: "2B", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Kris Bryant II", position: "DH", stats: { contact: 82, power: 85, speed: 78, bunting: 55 } }
      ]
    },
    {
      name: "Pittsburgh Pirates",
      color: "#FDB827", // Pirates gold
      logo: "logos/pirates.png",
      pitcher: {
        name: "Chris Falter",
        stats: { control: 80, power: 78, stamina: 85 }
      },
      lineup: [
        { name: "Ke'Bryan Hayes", position: "SS", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Bryce Harper", position: "RF", stats: { contact: 82, power: 88, speed: 80, bunting: 50 } },
        { name: "Chase DeLauter", position: "CF", stats: { contact: 80, power: 80, speed: 85, bunting: 55 } },
        { name: "Lourdes Gurriel Jr.", position: "LF", stats: { contact: 80, power: 85, speed: 80, bunting: 50 } },
        { name: "Jameson Taillon", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Ke'Bryan Hayes II", position: "1B", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Bryce Harper II", position: "DH", stats: { contact: 82, power: 88, speed: 80, bunting: 50 } },
        { name: "Chase DeLauter II", position: "3B", stats: { contact: 80, power: 80, speed: 85, bunting: 55 } },
        { name: "Lourdes Gurriel Jr. II", position: "2B", stats: { contact: 80, power: 85, speed: 80, bunting: 50 } }
      ]
    },
    {
      name: "Cincinnati Reds",
      color: "#C6011F", // Reds red
      logo: "logos/reds.png",
      pitcher: {
        name: "Luis Castillo",
        stats: { control: 83, power: 80, stamina: 87 }
      },
      lineup: [
        { name: "Nick Castellanos", position: "1B", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Joc Pederson", position: "LF", stats: { contact: 80, power: 82, speed: 75, bunting: 50 } },
        { name: "Tyler Naquin", position: "CF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Joey Votto", position: "DH", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Luis Castillo II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Nick Castellanos II", position: "2B", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Joc Pederson II", position: "3B", stats: { contact: 80, power: 82, speed: 75, bunting: 50 } },
        { name: "Tyler Naquin II", position: "RF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Joey Votto II", position: "C", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } }
      ]
    },
    {
      name: "Los Angeles Dodgers",
      color: "#005A9C", // Dodgers blue
      logo: "logos/dodgers.png",
      pitcher: {
        name: "Walker Buehler",
        stats: { control: 85, power: 82, stamina: 90 }
      },
      lineup: [
        { name: "Mookie Betts", position: "RF", stats: { contact: 85, power: 90, speed: 88, bunting: 60 } },
        { name: "Cody Bellinger", position: "CF", stats: { contact: 80, power: 88, speed: 80, bunting: 55 } },
        { name: "Corey Seager", position: "SS", stats: { contact: 82, power: 85, speed: 80, bunting: 55 } },
        { name: "Justin Turner", position: "3B", stats: { contact: 82, power: 80, speed: 75, bunting: 55 } },
        { name: "Max Muncy", position: "1B", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Will Smith", position: "C", stats: { contact: 80, power: 75, speed: 60, bunting: 55 } },
        { name: "Walker Buehler II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Mookie Betts II", position: "DH", stats: { contact: 85, power: 90, speed: 88, bunting: 60 } },
        { name: "Cody Bellinger II", position: "LF", stats: { contact: 80, power: 88, speed: 80, bunting: 55 } }
      ]
    },
    {
      name: "San Diego Padres",
      color: "#2F241D", // Padres brown
      logo: "logos/padres.png",
      pitcher: {
        name: "Yu Darvish",
        stats: { control: 84, power: 82, stamina: 88 }
      },
      lineup: [
        { name: "Fernando Tatis Jr.", position: "SS", stats: { contact: 84, power: 90, speed: 92, bunting: 60 } },
        { name: "Manny Machado", position: "3B", stats: { contact: 82, power: 85, speed: 80, bunting: 55 } },
        { name: "Joey Lucchesi", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Wil Myers", position: "LF", stats: { contact: 80, power: 85, speed: 80, bunting: 50 } },
        { name: "Tristan Gray", position: "RF", stats: { contact: 80, power: 80, speed: 85, bunting: 55 } },
        { name: "Xander Bogaerts", position: "2B", stats: { contact: 84, power: 80, speed: 85, bunting: 55 } },
        { name: "Chris Paddack", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Fernando Tatis Jr. II", position: "DH", stats: { contact: 84, power: 90, speed: 92, bunting: 60 } },
        { name: "Manny Machado II", position: "C", stats: { contact: 82, power: 85, speed: 80, bunting: 55 } }
      ]
    },
    {
      name: "San Francisco Giants",
      color: "#FD5A1E", // Giants orange
      logo: "logos/giants.png",
      pitcher: {
        name: "Kevin Gausman",
        stats: { control: 83, power: 80, stamina: 87 }
      },
      lineup: [
        { name: "Buster Posey", position: "C", stats: { contact: 82, power: 78, speed: 70, bunting: 55 } },
        { name: "Brandon Belt", position: "1B", stats: { contact: 80, power: 82, speed: 70, bunting: 50 } },
        { name: "Brandon Crawford", position: "SS", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Evan Longoria", position: "3B", stats: { contact: 80, power: 85, speed: 75, bunting: 55 } },
        { name: "Mike Yastrzemski", position: "LF", stats: { contact: 80, power: 82, speed: 80, bunting: 50 } },
        { name: "Brandon Belt II", position: "DH", stats: { contact: 80, power: 82, speed: 70, bunting: 50 } },
        { name: "Kevin Gausman II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Buster Posey II", position: "RF", stats: { contact: 82, power: 78, speed: 70, bunting: 55 } },
        { name: "Brandon Crawford II", position: "2B", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } }
      ]
    },
    {
      name: "Colorado Rockies",
      color: "#33006F", // Rockies purple
      logo: "logos/rockies.png",
      pitcher: {
        name: "Jon Gray",
        stats: { control: 80, power: 78, stamina: 85 }
      },
      lineup: [
        { name: "Trevor Story", position: "SS", stats: { contact: 82, power: 85, speed: 88, bunting: 55 } },
        { name: "Ian Desmond", position: "2B", stats: { contact: 80, power: 78, speed: 80, bunting: 55 } },
        { name: "Charlie Blackmon", position: "CF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Trevor Story II", position: "DH", stats: { contact: 82, power: 85, speed: 88, bunting: 55 } },
        { name: "Ian Desmond II", position: "1B", stats: { contact: 80, power: 78, speed: 80, bunting: 55 } },
        { name: "Charlie Blackmon II", position: "LF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Jon Gray II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Trevor Story III", position: "3B", stats: { contact: 82, power: 85, speed: 88, bunting: 55 } },
        { name: "Ian Desmond III", position: "RF", stats: { contact: 80, power: 78, speed: 80, bunting: 55 } }
      ]
    },
    {
      name: "Arizona Diamondbacks",
      color: "#A71930", // Diamondbacks red
      logo: "logos/diamondbacks.png",
      pitcher: {
        name: "Zac Gallen",
        stats: { control: 83, power: 80, stamina: 88 }
      },
      lineup: [
        { name: "Ketel Marte", position: "SS", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Josh Reddick", position: "CF", stats: { contact: 80, power: 82, speed: 85, bunting: 55 } },
        { name: "Paul Goldschmidt", position: "1B", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Ketel Marte II", position: "3B", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Josh Reddick II", position: "RF", stats: { contact: 80, power: 82, speed: 85, bunting: 55 } },
        { name: "Paul Goldschmidt II", position: "DH", stats: { contact: 80, power: 85, speed: 70, bunting: 50 } },
        { name: "Zac Gallen II", position: "P", stats: { contact: 30, power: 25, speed: 45, bunting: 80 } },
        { name: "Ketel Marte III", position: "LF", stats: { contact: 82, power: 80, speed: 85, bunting: 55 } },
        { name: "Josh Reddick III", position: "2B", stats: { contact: 80, power: 82, speed: 85, bunting: 55 } }
      ]
    }
  ];
