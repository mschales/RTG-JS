let gameFilters = {
  'searchString': '',
  'seasonFilter': ''
}

// Profile
let profile = {
  'name':'Example Goalie',
  'team':'Hockey City',
  'jerseyNumber':'85',
  'youtube':'',
  'twitter':'',
  'instagram':'',
  'facebook':''
}

// Array to hold games... amazing stuff.
let games = [
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `RJC Rats`,
    visitor: 'Hockey City',
    date: 'April 18 2017',
    season: 'Summer 2017',
    result: ['1-2', '0-5', '1-0'],
    shots: ['10-11', '10-11', '10-9'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'Hammers',
    date: 'April 25 2017',
    season: 'Summer 2017',
    result: ['2-0', '3-1', '0-0'],
    shots: ['7-7', '7-8', '7-8'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'A.M. Lumber',
    date: 'May 2 2017',
    season: 'Summer 2017',
    result: ['0-0', '2-1', '1-0'],
    shots: ['6-5', '6-5', '6-6'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'KNIGHTS (Gouvia)',
    date: 'May 2 2017',
    season: 'Summer 2017',
    result: ['0-4', '2-2', '0-1'],
    shots: ['9-12', '9-9', '7-9'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Toronto Stringers`,
    visitor: 'Hockey City',
    date: 'June 6 2017',
    season: 'Summer 2017',
    result: ['0-0', '1-0', '2-0'],
    shots: ['9-8', '8-7', '10-8'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'Steelers',
    date: 'June 13 2017',
    season: 'Summer 2017',
    result: ['0-1', '0-0', '1-2'],
    shots: ['5-5', '6-6', '8-7'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Trappers2`,
    visitor: 'Hockey City',
    date: 'June 20 2017',
    season: 'Summer 2017',
    result: ['0-1', '1-0', '0-1'],
    shots: ['7-9', '9-9', '8-8'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'The Etobicoke Rednecks',
    date: 'June 27 2017',
    season: 'Summer 2017',
    result: ['3-1', '1-0', '2-1'],
    shots: ['8-5', '5-6', '8-6'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'The Dark Horses',
    date: 'July 11 2017',
    season: 'Summer 2017',
    result: ['1-0', '0-0', '2-0'],
    shots: ['5-4', '7-6', '7-5'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'UNC Fo Life',
    date: 'July 25 2017',
    season: 'Summer 2017',
    result: ['0-1', '2-0', '1-0'],
    shots: ['8-10', '9-9', '10-7'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Dirty Birds (Tue)`,
    visitor: 'Hockey City',
    date: 'August 1 2017',
    season: 'Summer 2017',
    result: ['1-5', '1-2', '2-1'],
    shots: ['4-14', '9-10', '10-8'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'Trappers2',
    date: 'August 8 2017',
    season: 'Summer 2017',
    result: ['1-0', '1-0', '4-1'],
    shots: ['10-10', '8-9', '12-10'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Wilson Lift Truck Training`,
    visitor: 'Hockey City',
    date: 'September 10 2017',
    season: 'Winter 2017-18',
    result: ['1-0', '0-1', '4-0'],
    shots: ['10-8', '6-8', '12-8'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Mustang`,
    visitor: 'Hockey City',
    date: 'September 17 2017',
    season: 'Winter 2017-18',
    result: ['2-1', '3-1', '0-3'],
    shots: ['10-11', '11-12', '11-12'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'The Lumberjacks',
    date: 'September 24 2017',
    season: 'Winter 2017-18',
    result: ['0-0', '0-1', '0-3'],
    shots: ['10-8', '9-10', '11-12'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Knights (Naka)`,
    visitor: 'Hockey City',
    date: 'October 1 2017',
    season: 'Winter 2017-18',
    result: ['0-4', '2-4', '1-0'],
    shots: ['9-12', '10-13', '10-10'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'Firebirds',
    date: 'October 8 2017',
    season: 'Winter 2017-18',
    result: ['1-4', '1-4', '2-3'],
    shots: ['13-14', '14-15', '14-15'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Caledon Tropics`,
    visitor: 'Hockey City',
    date: 'October 22 2017',
    season: 'Winter 2017-18',
    result: ['1-1', '1-1', '1-2'],
    shots: ['9-8', '7-5', '6-8'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'Mustangs',
    date: 'October 29 2017',
    season: 'Winter 2017-18',
    result: ['1-0', '3-0', '2-1'],
    shots: ['7-8', '12-4', '8-5'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'The Lumberjacks',
    date: 'November 5 2017',
    season: 'Winter 2017-18',
    result: ['0-2', '0-4', '2-2'],
    shots: ['9-14', '11-15', '9-11'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Knights (Naka)`,
    visitor: 'Hockey City',
    date: 'November 12 2017',
    season: 'Winter 2017-18',
    result: ['0-4', '1-4', '0-2'],
    shots: ['10-12', '10-12', '10-11'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Firebirds`,
    visitor: 'Hockey City',
    date: 'November 19 2017',
    season: 'Winter 2017-18',
    result: ['0-0', '1-4', '0-1'],
    shots: ['5-8', '8-8', '4-7'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Spartans`,
    visitor: 'Hockey City',
    date: 'November 26 2017',
    season: 'Winter 2017-18',
    result: ['2-1', '1-0', '3-0'],
    shots: ['8-9', '8-9', '9-9'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Caledon Tropics`,
    visitor: 'Hockey City',
    date: 'December 10 2017',
    season: 'Winter 2017-18',
    result: ['0-3', '1-5', '1-1'],
    shots: ['9-11', '7-12', '9-8'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Hockey City`,
    visitor: 'Mustangs',
    date: 'December 17 2017',
    season: 'Winter 2017-18',
    result: ['2-1', '2-3', '1-3'],
    shots: ['12-12', '11-13', '18-16'],
    minutes: 60
  },
  {
    location: {city:'Toronto', rink:'etobicoke'},
    home: `Dark Knights`,
    visitor: 'Hockey City',
    date: 'January 7 2018',
    season: 'Winter 2017-18',
    result: ['1-1', '2-1', '3-1'],
    shots: ['7-8', '9-9', '8-9'],
    minutes: 60
  },
];

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

// Dropdown for season switch
let seasonOptions = [
  { name: "ALL", filtervalue: "" },
  { name: "Summer 2017", filtervalue: "Summer 2017" },
  { name: "Winter 2017-18", filtervalue: "Winter 2017-18" }
];

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
      versus: '?',
      date: '20 January 2017',
      season: '',
      goals: getNumber(0, 9),
      shots: getNumber(20, 40),
      minutes: 55
    });
  }
};

// Create necessary elements
generateProfile();
generateSearchPanel();
generateSeasonStatPanel();
gameBox();