let savedGames = games;
let getSeason = "";

// Get total wins, loses and ties to be used for season stats
let getGameResults = (getGames) => {
  let gameResults = [];
  let getResults = [0, 0, 0];

  let getSeasonGames = getGames.filter(game => game.season.includes(searchFilters.seasonFilter)
  );

  getSeasonGames.forEach((game) => {
    let home = 0;
    let visitor = 0;
    game.result.forEach(period => {
      score = period.split("-");
      home += parseInt(score[1]);
      visitor += parseInt(score[0]);
    });
    gameResults.push([game.home, home, visitor]);
  });

  gameResults.forEach((game) => {
    if (game[0] === profile.team) {
      if (game[1] > game[2]) getResults[0] = getResults[0] + 1;
      else if (game[1] == game[2]) getResults[2] = getResults[2] + 1;
      else getResults[1] = getResults[1] + 1;
    } else {
      if (game[1] < game[2]) getResults[0] = getResults[0] + 1;
      else if (game[1] == game[2]) getResults[2] = getResults[2] + 1;
      else getResults[1] = getResults[1] + 1;
    }
  });

  return getResults;
};

// Generate season stats for the season information panel
let generateSeasonStats = (getGames) => {
  searchFilters.searchString.length > 0 ? getSeason = "CUSTOM VIEW" : getSeason = `${searchFilters.seasonFilter}`;
  let getSeasonGames = getGames.filter((game) => game.season.includes(searchFilters.seasonFilter));
  let getGoals = () => {
    let goals = 0;
    getSeasonGames.forEach((game) => {
      if (game.home === profile.info.team) {
        game.result.forEach((period) => {
          score = period.split("-");
          goals += parseInt(score[0]);
        });
      } else if (game.visitor === profile.info.team) {
        game.result.forEach((period) => {
          score = period.split("-");
          goals += parseInt(score[1]);
        });
      }
    });
    return goals;
  };

  let getShots = () => {
    let shots = 0;
    getSeasonGames.forEach((game) => {
      if (game.home === profile.info.team) {
        game.shots.forEach((period) => {
          shot = period.split("-");
          shots += parseInt(shot[0]);
        });
      } else if (game.visitor === profile.info.team) {
        game.shots.forEach((period) => {
          shot = period.split("-");
          shots += parseInt(shot[1]);
        });
      }
    });
    return shots;
  };

  let seasonGAA = ((getGoals() * 50) / (getGames.length * 50)).toFixed(2);
  let seasonSP = ((getShots() - getGoals()) / getShots()).toFixed(3);
  let getResults = getGameResults(getGames);

  let seasonDataHolder = document.createElement("div");
  let seasonName = document.createElement("span");
  seasonName.className = "season_name";
  seasonName.textContent = `${getSeason} Statistics`;
  seasonName.addEventListener("click", () => { renderGames(); });
  let seasonGoals = document.createElement("span");
  seasonGoals.textContent = `${getGoals()} goals allowed`;
  let seasonShots = document.createElement("span");
  seasonShots.textContent = `${getShots()} shot against`;
  let seasonSPHolder = document.createElement("span");
  seasonSPHolder.textContent = `${seasonSP} save %`;
  let seasonGaaHolder = document.createElement("span");
  seasonGaaHolder.textContent = `${seasonGAA} GAA`;
  let seasonGameResults = document.createElement("span");
  seasonGameResults.textContent = `W: ${getResults[0]} | L: ${getResults[1]} | T: ${getResults[2]}`;
  let seasonStaticsHolder = document.createElement("span");
  seasonStaticsHolder.className = "season_chart";
  seasonStaticsHolder.id = "season_chart";
  seasonStaticsHolder.textContent = "View charts";
  seasonStaticsHolder.addEventListener("click", () =>  createChart(getGoalsPeriod()));

  seasonDataHolder.appendChild(seasonName);
  seasonDataHolder.appendChild(seasonGameResults);
  seasonDataHolder.appendChild(seasonGoals);
  seasonDataHolder.appendChild(seasonShots);
  seasonDataHolder.appendChild(seasonSPHolder);
  seasonDataHolder.appendChild(seasonGaaHolder);
  seasonDataHolder.appendChild(seasonStaticsHolder);
  return seasonDataHolder;
};

// Prepare game object for rendering
let createGameItem = (game) => {
  let itemHolder = document.createElement("div");
  itemHolder.className = "content-item";

  let goals_desc = document.createElement("p");
  let shot_desc = document.createElement("p");
  let sa_desc = document.createElement("p");
  let gameStats = [];

  let setupResult = () => {
    let goals_home = 0;
    let goals_visitor = 0;

  game.result.forEach(item => {
    let score = item.split("-");
    goals_visitor += parseInt(score[1]);
    goals_home += parseInt(score[0]);
  });

  return [goals_home, goals_visitor];
  };

  let setupShots = () => {
    let shots_home = 0;
    let shots_visitors = 0;

    game.shots.forEach((item) => {
      let shots = item.split("-");
      shots_visitors += parseInt(shots[1]);
      shots_home += parseInt(shots[0]);
    });
    return [shots_home, shots_visitors];
  };

  // Set score display for invidual games (example: 7 - 2)
  game.home === profile.info.team ? gameStats = [setupResult()[0], setupShots()[0]] : gameStats = [setupResult()[1], setupShots()[1]];

  let gameLocation = document.createElement("div");
  gameLocation.innerHTML = `<div> ${game.home} - ${game.visitor} </div> <div>${setupResult()[1]} - ${setupResult()[0]} </div>`;
  gameLocation.className = "item content-game-item";

  let gameDate = document.createElement("div");
  gameDate.textContent = moment(new Date(game.date)).format("MMM / DD / YYYY");
  gameDate.className = "item";

  let gameShots = document.createElement("div");
  gameShots.textContent = `${gameStats[1]}`;
  gameShots.className = "item";
  shot_desc.textContent = "";
  gameShots.appendChild(shot_desc);

  let gameGoals = document.createElement("div");
  gameGoals.textContent = `${gameStats[0]}`;
  gameGoals.className = "item";
  goals_desc.textContent = "";
  gameGoals.appendChild(goals_desc);

  let gameMiinutes = document.createElement("div");
  gameMiinutes.textContent = `${game.minutes}`;
  gameMiinutes.className = "item";

  let gameSA = document.createElement("div");

  let gaa = (gameStats[1] - gameStats[0]) / gameStats[1];
  gaa = gaa.toFixed(3);

  gameSA.textContent = `${gaa} %`;
  gameSA.className = "item";
  sa_desc.textContent = "";
  gameSA.appendChild(sa_desc);
  itemHolder.appendChild(gameDate);
  itemHolder.appendChild(gameLocation);
  itemHolder.appendChild(gameShots);
  itemHolder.appendChild(gameGoals);
  itemHolder.appendChild(gameSA);
  return itemHolder;
};

// Generate profile header
let generateProfile = () => {
  let profileContainer = document.getElementById("profile-field");
  let profileTitle = document.createElement("div");
  let profileInfo = document.createElement("div");
  profileContainer.appendChild(profileTitle);
  profileContainer.appendChild(profileInfo);
  profileTitle.classList.add('profile-title');
  profileTitle.textContent = profile.profileTitle();
  profileInfo.textContent = profile.profileString();
};

// Generate search panel
let generateSearchPanel =  () => {
  let navigation_holder = document.getElementById("search_container");
  let search_holder = document.createElement("div");
  let search = document.createElement("input");
  let dropDownSearch = document.createElement("select");

  search.setAttribute("type", "text");
  search.className = "search-field";
  search.id = "search-field";
  search.setAttribute("placeholder", "Search by rink, team or city..");
  search.addEventListener("input", (e) => {
    searchFilters.searchString = e.target.value;
    renderGames();
  });

  for (let i = 0; i < seasonOptions.length; i++) {
    let addOption = document.createElement("option");
    addOption.value = seasonOptions[i].filtervalue;
    addOption.text = seasonOptions[i].name.toUpperCase();
    dropDownSearch.appendChild(addOption);
  }

  dropDownSearch.addEventListener("change", (e) => {
    searchFilters.seasonFilter = e.target.value;
    renderGames();
  });

  search_holder.appendChild(search);
  search_holder.appendChild(dropDownSearch);
  navigation_holder.appendChild(search_holder);
};

// Generate season stats panel
let generateSeasonStatPanel = () =>  {
  let gamePanel = document.getElementById("games-data");
  let parentElement = document.getElementById("content-data");
  let seasonStatPanel = document.createElement("div");
  seasonStatPanel.className = "season_stat_panel";
  seasonStatPanel.id = "season_stat_panel";
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
  let seasonGames = games.filter((game) => game.season.includes(searchFilters.seasonFilter));

  return (filteredGames = seasonGames.filter((game) => {
    let city = game.location.city.toLowerCase();
    let rink = game.location.rink.toLowerCase();
    let home_team = game.home.toLowerCase();
    let visitor_team = game.visitor.toLowerCase();
    let search = searchFilters.searchString.toLowerCase();
  return (rink.includes(search) || city.includes(search) || home_team.includes(search) || visitor_team.includes(search));
  }));
};

// Get goals for each period
let getGoalsPeriod = () => {
  let goals = [0, 0, 0];
  let getSeasonGames = filterGames();

  getSeasonGames.forEach(game => {
    let result = game.result;
    if (game.home === profile.info.team) {
      goals[0] = parseInt(goals[0]) + parseInt(result[0][0]);
      goals[1] = parseInt(goals[1]) + parseInt(result[1][0]);
      goals[2] = parseInt(goals[2]) + parseInt(result[2][0]);
    } else if (game.visitor == profile.info.team) {
      goals[0] = parseInt(goals[0]) + parseInt(result[0][2]);
      goals[1] = parseInt(goals[1]) + parseInt(result[1][2]);
      goals[2] = parseInt(goals[2]) + parseInt(result[2][2]);
    }
  });
  return goals;
};

// Render games to website
let renderGames = () => {
  let contentPage = document.getElementById("games-data");
  let seasonStatPanel = document.getElementById("season_stat_panel");
  let gamesFoundBox =   document.getElementById("gameTotalStats");
  contentPage.innerHTML = "";
  let filteredGames = filterGames();

  let header = document.createElement("div");
  let dateHeader = document.createElement("div");
  let gameheader = document.createElement("div");
  let scoreHeader = document.createElement("div");
  let teamheader = document.createElement("div");
  let shotHeader = document.createElement("div");
  let gaaHeader = document.createElement("div");
  let saaHeader = document.createElement("div");

  header.classList.add('navi');
  gameheader.classList.add('game');
  dateHeader.textContent = 'DATE';
  teamheader.textContent = 'TEAMS';
  scoreHeader.textContent = 'SCORE';
  shotHeader.textContent = 'SHOTS AGAINST';
  gaaHeader.textContent = "GOALS ALLOWED";
  saaHeader.textContent = 'SAVE PERCENTAGE';

  header.appendChild(dateHeader);
  header.appendChild(gameheader);
  gameheader.appendChild(teamheader);
  gameheader.appendChild(scoreHeader);
  header.appendChild(shotHeader);
  header.appendChild(gaaHeader);
  header.appendChild(saaHeader);

  contentPage.appendChild(header);

  if (filteredGames.length > 0) {
    contentPage.classList.remove('search-notfound');
    seasonStatPanel.style.display = 'flex';
    seasonStatPanel.appendChild(generateSeasonStats(filteredGames));
    filteredGames.forEach(item => {contentPage.appendChild(createGameItem(item))})
    gamesFoundBox.textContent = `${filteredGames.length} games found`;
    seasonStatPanel.innerHTML = "";
    seasonStatPanel.appendChild(generateSeasonStats(filteredGames));  
  }

  else {
    contentPage.innerHTML = `No games found for <span class='search-keyword'>${searchFilters.searchString}</span> keyword`;
    contentPage.classList.add('search-notfound');
    gamesFoundBox.textContent = `no games found`;
    seasonStatPanel.style.display = 'none';  
  }
};

// Generate chart for goals per period
let createChart = getData => {
  let gameData = document.getElementById("games-data");
  let chartCanvas = document.createElement("canvas");
  let canvasHolder = document.createElement("div");
  chartCanvas.id = "season_chart_canvas";
  chartCanvas.classList = "season_chart_canvas";

  gameData.innerHTML = "";
  gameData.appendChild(canvasHolder);
  canvasHolder.appendChild(chartCanvas);

  var ctx = document.getElementById("season_chart_canvas").getContext("2d");
  if (getSeason.length <= 1) getSeason = "ALL";
  let myChart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: ["1 period", "2 period", "3 period"],
      datasets: [
        {
          label: `# goals per period (${getSeason})`,
          data: [
            parseInt(getData[0]),
            parseInt(getData[1]),
            parseInt(getData[2])
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }],
        xAxes: [{ ticks: { beginAtZero: true } }]
      }
    }
  });
};

// Create necessary elements
generateProfile();
generateSearchPanel();
generateSeasonStatPanel();
gameBox();
renderGames();
