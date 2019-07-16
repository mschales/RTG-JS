let filters = {
    'searchString':'',
    'filterType':'city'
}

let contentPage = document.getElementById('content');

let renderItems = () => {

    contentPage.innerHTML = null;
    let filteredGames = filterGames();

    filteredGames.forEach(function(item) {
        let gameItem = createGameItem(item);
        contentPage.appendChild(gameItem);
    });

    document.getElementById('gameTotalStats').textContent = `${filteredGames.length} games found`;

};

renderItems();