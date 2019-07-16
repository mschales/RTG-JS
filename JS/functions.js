// Create game item for rendering
let createGameItem = function(game) {
  let itemHolder = document.createElement("div");
  itemHolder.className = "content-item";

  let goals_desc = document.createElement("p");
  let shot_desc = document.createElement("p");
  let sa_desc = document.createElement("p");

  let gameLocation = document.createElement("div");
  gameLocation.textContent = `${game.teams}`;
  gameLocation.className = "item location";

  let gameDate = document.createElement("p");
  gameDate.textContent = `${moment(game.date).format("MMM/DDD/Y")}, ${game.location.name} | ${game.location.city}`;
  gameLocation.appendChild(gameDate);

  let gameShots = document.createElement("div");
  gameShots.textContent = `${game.shots}`;
  gameShots.className = "item";
  shot_desc.textContent = "shot against";
  gameShots.appendChild(shot_desc);

  let gameGoals = document.createElement("div");
  gameGoals.textContent = `${game.goals}`;
  gameGoals.className = "item";
  goals_desc.textContent = "goals allowed";
  gameGoals.appendChild(goals_desc);

  let gameMiinutes = document.createElement("div");
  gameMiinutes.textContent = `${game.minutes}`;
  gameMiinutes.className = "item";

  let gameSA = document.createElement("div");
  let gaa = (game.shots - game.goals) / game.shots;
  gaa = gaa.toFixed(3);
  gameSA.textContent = `${gaa}`;
  gameSA.className = "item";
  sa_desc.textContent = "save percentage";
  gameSA.appendChild(sa_desc);

  itemHolder.appendChild(gameLocation);
  itemHolder.appendChild(gameShots);
  itemHolder.appendChild(gameGoals);
  itemHolder.appendChild(gameSA);
  return itemHolder;
};

let generateNavigation = () => {
  let navigation_holder = document.getElementById("search_container");
  let search_holder = document.createElement("div");
  let search = document.createElement("input");
  let dropDownSearch = document.createElement("select");
  let searchOptions = [
    { name: "city", filtervalue: "city" },
    { name: "rink", filtervalue: "rink" },
    { name: "team", filtervalue: "teams" }
  ];

  search.setAttribute("type", "text");
  search.className = "search-field";
  search.id = "search-field";
  search.addEventListener("input", function(e) {
    filters.searchString = e.target.value;
    renderItems();
  });

  for (let i = 0; i < searchOptions.length; i++) {
    let addOption = document.createElement("option");
    addOption.value = searchOptions[i].filtervalue;
    addOption.text = searchOptions[i].name.toUpperCase();
    dropDownSearch.appendChild(addOption);
  }

  dropDownSearch.addEventListener("change", function(e) {
    filters.filterType = e.target.value;
    renderItems();
  });

  search_holder.appendChild(search);
  search_holder.appendChild(dropDownSearch);
  navigation_holder.appendChild(search_holder);
};

let gameBox = () => {
  let container = document.getElementById("search_container");
  let gameDisplay = document.createElement("div");
  gameDisplay.className = "gameTotalStats";
  gameDisplay.id = "gameTotalStats";
  container.appendChild(gameDisplay);
};

let filterGames = () => {
  if (filters.filterType === "city") {
    let filteredGames = games.filter(function(game) {
      let name = game.location.city.toLowerCase();
      let search = filters.searchString.toLowerCase();
      return name.includes(search);
    });
    return filteredGames;
  } 
  
  else if (filters.filterType === "rink") {
    let filteredGames = games.filter(function(game) {
      let name = game.location.name.toLowerCase();
      let search = filters.searchString.toLowerCase();
      return name.includes(search);
    });
    return filteredGames;
  } 
  
  else {
    let filteredGames = games.filter(function(game) {
      let name = game.teams.toLowerCase();
      let search = filters.searchString.toLowerCase();
      return name.includes(search);
    });
    return filteredGames;
  }
};

generateNavigation();
gameBox();
