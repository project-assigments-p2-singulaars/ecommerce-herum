import { generateFooter } from "./footer.js";
import { createHeader } from "./header.js";

const apiUrl = "http://localhost:3000/videogames"

const index = sessionStorage.getItem("detailedVideogame");
// const index = 2;
async function fetchJsonData (index){
    const videogame = await fetch (`${apiUrl}/${index}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(error => console.error("No se han podido recuperar los datos", error) )

    return videogame;
}

function assignRating(rating) {
    let ratingClass = "";

    if (rating >= 7.5){
        ratingClass = "good-rating"
    } else if (rating >= 4){
        ratingClass = "average-rating"
    } else {
        ratingClass = "bad-rating"
    }

    return ratingClass;
}

function createProductHeaderSection(game) {
    console.log(game)

    let productHeaderContainer = document.createElement("div");
    productHeaderContainer.id ="detailed-product-header-container";
    productHeaderContainer.classList.add("detailed-product-containers");

    let imageLandscape = document.createElement("img");

    imageLandscape.id = "detailed-product-image";
    imageLandscape.alt = game.image.imageAlt;
    imageLandscape.src = game.image.url;

    productHeaderContainer.appendChild(imageLandscape);

    return productHeaderContainer;
}

function createProductFooterSection(game) {
    let productFooterContainer = document.createElement("div");
    productFooterContainer.id = "detailed-product-footer-container";
    productFooterContainer.classList.add("detailed-product-containers");

    let priceElement = document.createElement("h2");
    priceElement.textContent = game.price;

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

function createProductInfoSection(game) {
    //Create Info Container
    let productInfoContainer = document.createElement("div");
    productInfoContainer.id = "detailed-product-info-container";
    productInfoContainer.classList.add("detailed-product-containers");

    //Create Left Side
    let informationContainer = document.createElement("div");
    informationContainer.id="detailed-product-info-left";

    let gameTitleElement = document.createElement("h2");
    gameTitleElement.textContent = game.game;
    
    let gameDeveloperElement = document.createElement("p");
    gameDeveloperElement.textContent = game.developer;

    let gameReleaseElement = document.createElement("p");
    gameReleaseElement.textContent = game.release;

    //Append Created Information texts to Left Info Container
    informationContainer.appendChild(gameTitleElement);
    informationContainer.appendChild(gameDeveloperElement);
    informationContainer.appendChild(gameReleaseElement);

    //Create Right Side
    let iconsContainer = document.createElement("div");
    iconsContainer.id="detailed-product-info-right";

    let pegiLogo = document.createElement("img");
    pegiLogo.classList.add("detailed-product-icons")
    pegiLogo.alt = game.pegi.imageAlt;
    pegiLogo.src = game.pegi.url;

    let ratingContainer = document.createElement("div");
    ratingContainer.classList.add("rating-container");
    ratingContainer.classList.add(assignRating(game.rating));

    let ratingText = document.createElement("p");
    ratingText.textContent = game.rating;

    ratingContainer.appendChild(ratingText);

    let ratingLogo = document.createElement("img");
    ratingLogo.classList.add("detailed-product-icons")
    ratingLogo.alt = "RatingIcon";
    ratingLogo.src = "../../Rating.svg";

    //Append Created Images to Icons Container
    iconsContainer.append(pegiLogo, ratingContainer);

    //Append Both Sections to Info Container
    productInfoContainer.appendChild(informationContainer);
    productInfoContainer.appendChild(iconsContainer);

    //Return Info Container with all children attached
    return productInfoContainer;
}

async function generateDetailedProduct(index) {
    const bodyElement = document.body;
    const mainElement = document.createElement("main");
    createHeader();

    const detailedVideogame = await fetchJsonData(index)

    const detailedProductFatherElement = document.createElement("section");
    detailedProductFatherElement.id = "detailed-product";
    
    let productBackground = document.createElement("div");
    productBackground.id= "detailed-product-background"

    const headerSection = createProductHeaderSection(detailedVideogame);
    const infoSection = createProductInfoSection(detailedVideogame);
    const footerSection = createProductFooterSection(detailedVideogame);

    let gameDescriptionElement = document.createElement("p");
    gameDescriptionElement.textContent = detailedVideogame.description;
    gameDescriptionElement.classList.add("detailed-product-containers");

    productBackground.appendChild(headerSection);
    productBackground.appendChild(infoSection);
    productBackground.appendChild(gameDescriptionElement);
    productBackground.appendChild(footerSection);

    detailedProductFatherElement.appendChild(productBackground);
    mainElement.appendChild(detailedProductFatherElement);

    bodyElement.appendChild(mainElement)
    generateFooter();
}

generateDetailedProduct(index);