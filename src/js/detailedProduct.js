function createProductHeaderSection() {
    let productHeaderContainer = document.createElement("div");
    productHeaderContainer.id ="detailed-product-header-container";
    productHeaderContainer.classList.add("detailed-product-containers");

    let imageLandscape = document.createElement("img");
    imageLandscape.id = "detailed-product-image";
    imageLandscape.alt = "witcherBackground";
    imageLandscape.src = "../../Witcher.png";

    productHeaderContainer.appendChild(imageLandscape);

    return productHeaderContainer;
}

function createProductFooterSection() {
    let productFooterContainer = document.createElement("div");
    productFooterContainer.id = "detailed-product-footer-container";
    productFooterContainer.classList.add("detailed-product-containers");

    let priceElement = document.createElement("h2");
    priceElement.textContent = "19.00$"

    let addToCartElement = document.createElement("div");
    addToCartElement.id = "detailed-product-shopping-container"

    let cartText = document.createElement("p");
    cartText.textContent = "Add to cart";

    let cartLogo = document.createElement("img");
    cartLogo.id = "detailed-product-shopping-icon";
    cartLogo.alt = "cartIcon";
    cartLogo.src = "../../Cart.svg";

    addToCartElement.appendChild(cartText);
    addToCartElement.appendChild(cartLogo);

    productFooterContainer.appendChild(priceElement);
    productFooterContainer.appendChild(addToCartElement);

    return productFooterContainer;
}

function createProductInfoSection() {
    //Create Info Container
    let productInfoContainer = document.createElement("div");
    productInfoContainer.id = "detailed-product-info-container";
    productInfoContainer.classList.add("detailed-product-containers");

    //Create Left Side
    let informationContainer = document.createElement("div");
    informationContainer.id="detailed-product-info-left";

    let gameTitleElement = document.createElement("h2");
    gameTitleElement.textContent = "The Witcher 3";
    
    let gameDeveloperElement = document.createElement("p");
    gameDeveloperElement.textContent = "CD Projeckt Red";

    let gameReleaseElement = document.createElement("p");
    gameReleaseElement.textContent = "May 18th 2015";

    //Append Created Information texts to Left Info Container
    informationContainer.appendChild(gameTitleElement);
    informationContainer.appendChild(gameDeveloperElement);
    informationContainer.appendChild(gameReleaseElement);

    //Create Right Side
    let iconsContainer = document.createElement("div");
    iconsContainer.id="detailed-product-info-right";

    let pegiLogo = document.createElement("img");
    pegiLogo.classList.add("detailed-product-icons")
    pegiLogo.alt = "PEGI18Icon";
    pegiLogo.src = "../../PEGI18.svg";

    let ratingLogo = document.createElement("img");
    ratingLogo.classList.add("detailed-product-icons")
    ratingLogo.alt = "RatingIcon";
    ratingLogo.src = "../../Rating.svg";

    //Append Created Images to Icons Container
    iconsContainer.appendChild(pegiLogo);
    iconsContainer.appendChild(ratingLogo);

    //Append Both Sections to Info Container
    productInfoContainer.appendChild(informationContainer);
    productInfoContainer.appendChild(iconsContainer);

    //Return Info Container with all children attached
    return productInfoContainer;
}

function generateDetailedProduct() {
    const bodyElement = document.body;
    const mainElement = document.createElement("main");

    const detailedProductFatherElement = document.createElement("section");
    detailedProductFatherElement.id = "detailed-product";
    
    let productBackground = document.createElement("div");
    productBackground.id= "detailed-product-background"

    const headerSection = createProductHeaderSection();
    const infoSection = createProductInfoSection();
    const footerSection = createProductFooterSection();

    let gameDescriptionElement = document.createElement("p");
    gameDescriptionElement.textContent = "The monster slayer Geralt of Rivia must find his adoptive daughter who is being pursued by the Wild Hunt, and prevent the White Frost from bringing about the end of the world.";
    gameDescriptionElement.classList.add("detailed-product-containers");

    productBackground.appendChild(headerSection);
    productBackground.appendChild(infoSection);
    productBackground.appendChild(gameDescriptionElement);
    productBackground.appendChild(footerSection);

    detailedProductFatherElement.appendChild(productBackground);
    mainElement.appendChild(detailedProductFatherElement);

    bodyElement.appendChild(mainElement)
}

generateDetailedProduct();