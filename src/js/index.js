const topRating = document.getElementById("top-rating");
const maxGames = 4;

function createGameImage() {
    let gameImage = document.createElement("img");
    gameImage.src = "../templates/Rectangle 7.png"

    return gameImage;
}

function createRatedGameElement() {
    let topRatingCatalog = document.createElement("div");
    topRatingCatalog.id="top-rating-catalog";

    let topRatingTitle = document.createElement("h2");
    topRatingTitle.textContent = "Top Rating";

    let seeMoreRatings = document.createElement("p");
    seeMoreRatings.textContent = "see more";

    let gamesContainer = document.createElement("div");
    gamesContainer.id="games-container";

    let topRatingSlider = document.createElement("div");
    topRatingSlider.id="top-rating-slider";
    
    for(let index = 0; index < maxGames ; index++) {
        let element = createGameImage();

        topRatingSlider.appendChild(element)
    }

    topRatingCatalog.append(topRatingTitle, seeMoreRatings);
    gamesContainer.appendChild(topRatingSlider)
    topRating.append(topRatingCatalog, gamesContainer)
}

const onSale = document.getElementById("on-sale");

function createOnSaleElement() {
    let onSaleCatalog = document.createElement("div");
    onSaleCatalog.id= "on-sale-catalog";

    let onSaleTitle = document.createElement("h2");
    onSaleTitle.textContent = "On Sale";

    let seeMoreSales = document.createElement("p");
    seeMoreSales.textContent = "see more";

    let onSaleContainer = document.createElement("div");
    onSaleContainer.id= "on-sale-container";

    let onSaleSlider = document.createElement("div");
    onSaleSlider.id= "on-sale-slider";

    for(let index = 0; index < maxGames ; index++) {
        let element = createGameImage();

        onSaleSlider.appendChild(element)
    }

    onSaleCatalog.append(onSaleTitle, seeMoreSales);
    onSaleContainer.appendChild(onSaleSlider);
    onSale.append(onSaleCatalog, onSaleContainer);
}

createRatedGameElement();
createOnSaleElement();