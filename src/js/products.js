const gameSection = document.getElementById("game-section-container");
const maxGames = 10;

function createGameElement() {
  console.log(gameSection);

  let gameContainer = document.createElement("div");

  gameContainer.classList.add("game-items-container");

  let gameImage = document.createElement("img");
  gameImage.src = "../../assets/img/Rectangle 10.png";
  gameImage.alt = "";

  let priceContainer = document.createElement("a");
  priceContainer.classList.add("price-icon-container");
  priceContainer.href = ""

  let priceTag = document.createElement("p");
  priceTag.textContent = "19,95€";

  let cartLogo = document.createElement("img");
  cartLogo.src = "../../assets/icons/car.svg";
  cartLogo.alt = "";

  priceContainer.append(priceTag, cartLogo);

  gameContainer.append(gameImage, priceContainer);
  gameSection.appendChild(gameContainer);
}

function createGamesList() {
  for (let index = 0; index < maxGames; index++) {
    createGameElement();
  }
}

createGamesList();
