// Profile
let profile = {
  info: {
    'name':'M. Schales',
    'team':'Blue',
    'jerseyNumber':'85',
    'age':33,
    'height':'193 cm',
    'weight':'85 kg',  
  },
  profileTitle:  function () { return `${this.info.name} | #${this.info.jerseyNumber}` },
  profileString: function () { return `${this.info.height} | ${this.info.weight} | Age: ${this.info.age} | Team: ${this.info.team}` }
}

// Search filters
let searchFilters = { 'searchString': '', 'seasonFilter': '' }

// Setup values for season switch dropdown
let seasonOptions = [
  { name: "ALL", filtervalue: "" },
  { name: "Fall 2019 - 2020", filtervalue: "Fall 2019 - 2020" },
  { name: "Fall 2018 - 2019", filtervalue: "Fall 2018 - 2019" },
  { name: "Fall 2017 - 2018", filtervalue: "Fall 2017 - 2018" }
];

// Array to hold games... amazing stuff.
let games = [
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Dec 17 2017',
    season: 'Fall 2017 - 2018',
    result: ['5-0', '1-2', '2-4'],
    shots: ['9-0', '4-0', '4-0'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Dec 31 2017',
    season: 'Fall 2017 - 2018',
    result: ['3-0', '4-4', '2-1'],
    shots: ['10-10', '13-10', '6-10'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Jan 7 2018',
    season: 'Fall 2017 - 2018',
    result: ['4-4', '6-4', '1-1'],
    shots: ['7-0', '16-0', '3-0'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Jan 14 2018',
    season: 'Fall 2017 - 2018',
    result: ['2-2', '2-2', '3-2'],
    shots: ['10-10', '10-10', '12-12'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Jan 21 2018',
    season: 'Fall 2017 - 2018',
    result: ['3-2', '3-2', '2-2'],
    shots: ['10-10', '10-10', '5-5'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Jan 28 2018',
    season: 'Fall 2017 - 2018',
    result: ['2-2', '2-2', '3-2'],
    shots: ['8-8', '8-8', '7-7'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Feb 4 2018',
    season: 'Fall 2017 - 2018',
    result: ['7-6', '7-6', '4-6'],
    shots: ['10-10', '10-10', '12-12'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Feb 11 2018',
    season: 'Fall 2017 - 2018',
    result: ['3-3', '3-3', '4-4'],
    shots: ['15-15', '15-15', '10-10'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Feb 25 2018',
    season: 'Fall 2017 - 2018',
    result: ['2-2', '2-2', '4-4'],
    shots: ['15-15', '15-15', '6-6'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Mar 3 2018',
    season: 'Fall 2017 - 2018',
    result: ['2-2', '2-2', '1-1'],
    shots: ['10-10', '10-10', '9-9'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Apr 4 2018',
    season: 'Fall 2017 - 2018',
    result: ['4-4', '4-4', '5-5'],
    shots: ['11-10', '10-10', '11-11'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Sep 9 2018',
    season: 'Fall 2018 - 2019',
    result: ['5-5', '5-5', '4-4'],
    shots: ['15-15', '15-15', '15-15'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'October 21 2018',
    season: 'Fall 2018 - 2019',
    result: ['5-5', '5-5', '4-4'],
    shots: ['15-15', '15-15', '15-15'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Sep 16 2018',
    season: 'Fall 2018 - 2019',
    result: ['3-3', '3-3', '2-2'],
    shots: ['12-12', '12-12', '12-12'],
    minutes: 50
  },
  {
    location: {city:'Kotka', rink:'Kotkan jäähalli'},
    home: `Blue`,
    visitor: 'White',
    date: 'Sep 9 2019',
    season: 'Fall 2019 - 2020',
    result: ['1-4', '5-3', '4-5'],
    shots: ['4-4', '21-21', '4-4'],
    minutes: 50
  },
];