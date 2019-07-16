// Profile
let profile = {
  'name':'Goalienator',
  'team':'Puckinator',
  'jerseyNumber':'85',
  'youtube':'',
  'twitter':'',
  'instagram':'',
  'facebook':''
}

// Location array for... locations? Duh.
let locations = [
  { city: "Langley City", rink: "Canlan Ice Sports - Twin Rinks" },
  { city: "Abbotsford", rink: "The Rinks at Summit Centre" },
  { city: "Halifax", rink: "Spryfield Lions Rink" },
  { city: "Richmond Hill", rink: "National Training Rinks" },
  { city: "Chilliwack", rink: "Example Rink Name Longer" }
];

// Sample team array for dummy data
let teams = [
  'The Eh Team',
  'Nifties',
  'The Death Stars',
  'The Reds',
  'Vipers - Montgomery',
  'Beauties',
  'The Bulldawgs'
];

// Array to hold games... amazing stuff.
let games = [];

// Simple function to get random int
let getNumber = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// Populate game array with some data
let generateGames = function(gameAmount) {
  for (let i = 0; i < gameAmount; i++) {
    games.push({
      location: locations[getNumber(0, locations.length)],
      teams: `${teams[getNumber(0, teams.length)]} vs ${teams[getNumber(0, teams.length)]}`,
      date: '20 January 2017',
      goals: getNumber(0, 9),
      shots: getNumber(20, 40),
      minutes: 55
    });
  }
};

// Create dummy data
generateProfile();
generateSearchPanel();
gameBox();
generateGames(15);