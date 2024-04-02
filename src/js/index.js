const maxGames = 4;

function createGameImage() {
    let gameImage = document.createElement("img");
    gameImage.src = "../templates/Rectangle 7.png"

    gameImage.addEventListener("click", () => {
        window.open("../templates/detailedProduct.html","_self")
    })
    return gameImage;
}

function createLandingSection() {
    let landingSection = document.createElement("section");
    landingSection.id = "landing";

    let welcomeContainer = document.createElement("div");
    welcomeContainer.id="welcome";

    let welcomeTitle = document.createElement("h2");
    welcomeTitle.textContent = "BIENVENIDOS A ";

    let pageTitleSpan = document.createElement("span");
    pageTitleSpan.textContent = "HERUM";

    welcomeTitle.appendChild(pageTitleSpan);

    let hrElement = document.createElement("hr");

    let landingDescription = document.createElement("p");
    landingDescription.textContent = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ea itaque dolore assumenda esse eveniet debitis corrupti voluptatibus commodi?"

    welcomeContainer.append(welcomeTitle, hrElement, landingDescription)

    let seeCatalogContainer = document.createElement("div");
    seeCatalogContainer.id = "card";

    let backgroundImage = document.createElement("img");
    backgroundImage.src="Rectangle 5 (1).png";

    let catalogButton = document.createElement("button");
    catalogButton.textContent = "SEE CATALOG";

    catalogButton.addEventListener("click", () => {
        window.open("../templates/product-page.html","_self")
    })

    seeCatalogContainer.append(backgroundImage, catalogButton);

    landingSection.append(welcomeContainer, seeCatalogContainer);

    return landingSection;
}

function createRatedGameElement() {
    let topRating = document.createElement("section");
    topRating.id="top-rating";

    let topRatingCatalog = document.createElement("div");
    topRatingCatalog.id="top-rating-catalog";

    let topRatingTitle = document.createElement("h2");
    topRatingTitle.textContent = "Top Rating";

    let seeMoreRatings = document.createElement("p");
    seeMoreRatings.textContent = "see more";
    seeMoreRatings.addEventListener("click", () => {
        window.open("../templates/product-page.html","_self")
    })

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

    return topRating;
}

function createOnSaleElement() {
    let onSale = document.createElement("section");
    onSale.id= "on-sale";


    let onSaleCatalog = document.createElement("div");
    onSaleCatalog.id= "on-sale-catalog";

    let onSaleTitle = document.createElement("h2");
    onSaleTitle.textContent = "On Sale";

    let seeMoreSales = document.createElement("p");
    seeMoreSales.textContent = "see more";
    seeMoreSales.addEventListener("click", () => {
        window.open("../templates/product-page.html","_self")
    })

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

    return onSale;
}

function generateHomeContent() {
    const bodyElement = document.body;

    let mainSection = document.createElement("main");

    let landingElement = createLandingSection();
    let ratingElement = createRatedGameElement();
    let salesElement = createOnSaleElement();

    mainSection.append(landingElement, ratingElement, salesElement);

    bodyElement.appendChild(mainSection);
}

generateHomeContent();
