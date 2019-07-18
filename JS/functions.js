// Generate season stats
let seasonStats = function(getGames) {
  let getSeason = '';

  if (gameFilters.searchString.length > 0) getSeason = 'CUSTOM VIEW';
  else  getSeason = `${gameFilters.seasonFilter}`;

  let getSeasonGames = getGames.filter(function(game) {
    return game.season.includes(gameFilters.seasonFilter);
  });

  let getGoals = () => {
    let goals = 0;
    getSeasonGames.forEach(function(game) {
      if (game.home === profile.team) {
        game.result.forEach(function(period) {
          score = period.split("-");
          goals += parseInt(score[0]);
        });
      }
      else if (game.visitor == profile.team) {
        game.result.forEach(function(period) {
          score = period.split("-");
          goals += parseInt(score[1]);
        });
      }
    });
    return goals;
  };

  let getShots = () => {
    let shots = 0;
      getSeasonGames.forEach(function(game) {
      if (game.home === profile.team) {
        game.shots.forEach(function(period) {
          shot = period.split("-");
          shots += parseInt(shot[0]);
        });
      }
      else if (game.visitor == profile.team) {
        game.shots.forEach(function(period) {
          shot = period.split("-");
          shots += parseInt(shot[1]);
        });
      }
    });
    return shots;
  };

  let seasonGAA = ((getGoals() * 60) / (games.length*60)).toFixed(2);
  let seasonSP = ((getShots() - getGoals()) / getShots()).toFixed(3);

  let seasonDataHolder = document.createElement('div');
  let seasonName = document.createElement('span');
  let seasonGoals = document.createElement('span');
  let seasonShots = document.createElement('span');
  let seasonSPHolder = document.createElement('span');
  let seasonGaaHolder = document.createElement('span');

  seasonName.className = 'season_name';
  seasonName.textContent = `${getSeason} Statistics`;

  seasonGoals.textContent = `${getGoals()} goals allowed`;
  seasonShots.textContent = `${getShots()} shot against`;

  seasonSPHolder.textContent = `${seasonSP} save %`;
  seasonGaaHolder.textContent = `${seasonGAA} GAA`;

  seasonDataHolder.appendChild(seasonName);
  seasonDataHolder.appendChild(seasonGoals);
  seasonDataHolder.appendChild(seasonShots);
  seasonDataHolder.appendChild(seasonSPHolder);
  seasonDataHolder.appendChild(seasonGaaHolder);
  return seasonDataHolder;
};

// Create game item for rendering
let createGameItem = function(game) {
  let itemHolder = document.createElement("div");
  itemHolder.className = "content-item";

  let goals_desc = document.createElement("p");
  let shot_desc = document.createElement("p");
  let sa_desc = document.createElement("p");
  let gameStats = [];

  let setupResult = () => {
    let goals_home = 0;
    let goals_visitor = 0;
  
    game.result.forEach(function(item) {
      let score = item.split("-");
      goals_visitor += parseInt(score[1]);
      goals_home += parseInt(score[0]);
    }
    );
    return [goals_home, goals_visitor]
  };

  let setupShots = () => {
    let shots_home = 0;
    let shots_visitors = 0;
  
    game.shots.forEach(function(item) {
      let shots = item.split("-");
      shots_visitors += parseInt(shots[1]);
      shots_home += parseInt(shots[0]);
    }
    );
    return [shots_home,  shots_visitors]
  };

  if (game.home === profile.team) gameStats = [setupResult()[0], setupShots()[0]];
  else if (game.visitor === profile.team) gameStats = [setupResult()[1], setupShots()[1]];

  let gameLocation = document.createElement("div");
  gameLocation.textContent = `${game.home} (${setupResult()[1]}) - ${game.visitor} (${setupResult()[0]})`;
  gameLocation.className = "item location";

  let gameDate = document.createElement("p");
  gameDate.textContent = `${moment(game.date).format("MMM/DD/Y")}, ${game.location.rink}`;
  gameLocation.appendChild(gameDate);

  let gameShots = document.createElement("div");
  gameShots.textContent = `${gameStats[1]}`;
  gameShots.className = "item";
  shot_desc.textContent = "shot against";
  gameShots.appendChild(shot_desc);

  let gameGoals = document.createElement("div");
  gameGoals.textContent = `${gameStats[0]}`;
  gameGoals.className = "item";
  goals_desc.textContent = "goals allowed";
  gameGoals.appendChild(goals_desc);

  let gameMiinutes = document.createElement("div");
  gameMiinutes.textContent = `${game.minutes}`;
  gameMiinutes.className = "item";

  let gameSA = document.createElement("div");

  let gaa = (gameStats[1] - gameStats[0]) / gameStats[1];
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

// Generate profile for the side box.
let generateProfile = () => {
  let profileContainer = document.getElementById("profile-field");
  let profileUL = document.createElement("ul");
  profileContainer.appendChild(profileUL);

  let profileName = document.createElement("li");
  profileName.textContent = `${profile.name} (#${profile.jerseyNumber})`;
  profileUL.appendChild(profileName);

  let profileTeam = document.createElement("li");
  profileTeam.textContent = `Team: ${profile.team}`;
  profileUL.appendChild(profileTeam);
};

// Generate search panel
let generateSearchPanel = () => {
  let navigation_holder = document.getElementById("search_container");
  let search_holder = document.createElement("div");
  let search = document.createElement("input");
  let dropDownSearch = document.createElement("select");

  search.setAttribute("type", "text");
  search.className = "search-field";
  search.id = "search-field";
  search.setAttribute('placeholder', 'Search by rink, team or city..');
  search.addEventListener("input", function(e) {
    gameFilters.searchString = e.target.value;
    renderItems();
  });

  for (let i = 0; i < seasonOptions.length; i++) {
    let addOption = document.createElement("option");
    addOption.value = seasonOptions[i].filtervalue;
    addOption.text = seasonOptions[i].name.toUpperCase();
    dropDownSearch.appendChild(addOption);
  }

  dropDownSearch.addEventListener("change", function(e) {
    gameFilters.seasonFilter = e.target.value;
    renderItems();
  });

  search_holder.appendChild(search);
  search_holder.appendChild(dropDownSearch);
  navigation_holder.appendChild(search_holder);
};

// Generate season stats panel and put it after search panel
let generateSeasonStatPanel = () => {
  let gamePanel = document.getElementById("games-data");
  let parentElement = document.getElementById("content-data");
  let seasonStatPanel = document.createElement('div');
  seasonStatPanel.className = 'season_stat_panel';
  seasonStatPanel.id = 'season_stat_panel';
  parentElement.insertBefore(seasonStatPanel, gamePanel);
};

// Create and display "X games found" element.
let gameBox = () => {
  let container = document.getElementById("search_container");
  let gameDisplay = document.createElement("div");
  gameDisplay.className = "gameTotalStats";
  gameDisplay.id = "gameTotalStats";
  container.appendChild(gameDisplay);
};

// Filter games by search filters.
let filterGames = () => {
  let seasonGames = games.filter(function(game) {
    return game.season.includes(gameFilters.seasonFilter);
  });

  return filteredGames = seasonGames.filter(function(game) {
      let city = game.location.city.toLowerCase();
      let rink = game.location.rink.toLowerCase();
      let home_team = game.home.toLowerCase();
      let visitor_team = game.visitor.toLowerCase();
      let search = gameFilters.searchString.toLowerCase();
      return rink.includes(search) || city.includes(search) || home_team.includes(search) || visitor_team.includes(search);
    });
};

// Render games to website
let renderItems = () => {
    let contentPage = document.getElementById('games-data');
    contentPage.innerHTML = '';
    let filteredGames = filterGames();

    filteredGames.forEach(function(item) {
        let gameItem = createGameItem(item);
        contentPage.appendChild(gameItem);
    });

    document.getElementById('gameTotalStats').textContent = `${filteredGames.length} games found`;
    document.getElementById('season_stat_panel').innerHTML = '';
    document.getElementById('season_stat_panel').appendChild(seasonStats(filteredGames));
};