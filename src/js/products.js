const gameSection = document.getElementById("game-section-container");
const filters = ["Top Rating", "Categories", "Sales", "Platforms"];
const allGames = 10;

import { fetchData } from "./fetch.js";
import { createHeader } from "./header.js";
import { generateFooter } from "./footer.js";

function createSearchBar() {
  let searchContainer = document.createElement("section");
  searchContainer.id = "search-container";

  let labelElement = document.createElement("label");
  labelElement.htmlFor = "search";

  let searchIconContainer = document.createElement("div");
  searchIconContainer.id = "box-icon-form";

  let searchIcon = document.createElement("img");
  searchIcon.src = "../../assets/icons/lupa.svg";
  searchIcon.alt = "searchIcon";

  searchIconContainer.appendChild(searchIcon);

  let searchInput = document.createElement("input");
  searchInput.id = "search";
  searchInput.name = "name";
  searchInput.type = "text";
  searchInput.placeholder = "Search";

  labelElement.append(searchIconContainer, searchInput);

  searchContainer.appendChild(labelElement);

  return searchContainer;
}

function createFilterElement(filterValue) {
  let filterContainer = document.createElement("div");
  filterContainer.classList.add("filter-items");
  filterContainer.id = "filter" + filterValue;

  let contentFilter = document.createElement("p");
  contentFilter.textContent = filterValue;

  filterContainer.appendChild(contentFilter);

  return filterContainer;
}

function createFilterSection() {
  let filterSection = document.createElement("section");
  filterSection.id = "filter-container";

  filters.map((filter) => {
    let filterElement = createFilterElement(filter);

    filterSection.appendChild(filterElement);
  });

  return filterSection;
}

function createGameElement(videogame) {
  let gameContainer = document.createElement("div");

  gameContainer.classList.add("game-items-container");
  console.log(videogame);
  let gameImage = document.createElement("img");
  gameImage.src = videogame.image.url;
  gameImage.alt = videogame.image.imageAlt;

  let priceContainer = document.createElement("a");
  priceContainer.classList.add("price-icon-container");
  priceContainer.href = "";

  let priceTag = document.createElement("p");
  priceTag.textContent = videogame.price;

  let cartLogo = document.createElement("img");
  cartLogo.src = "../../assets/icons/car.svg";
  cartLogo.alt = "";

  priceContainer.append(priceTag, cartLogo);

  gameContainer.append(gameImage, priceContainer);

  return gameContainer;
}

async function createGamesList() {
  let gameSection = document.createElement("section");
  gameSection.id = "game-section-container";

  const gameElements = await fetchData();
  console.log(gameElements);

  let limiter = allGames;

  if (gameElements.length < allGames) {
    limiter = gameElements.length;
  }

  for (let index = 0; index < limiter; index++) {
    let gameElement = createGameElement(gameElements[index]);
    gameSection.appendChild(gameElement);
  }

  return gameSection;
}

function createSeeMoreSection() {
  let seeMoreSection = document.createElement("section");
  seeMoreSection.id = "see-more-btn";

  let seeMoreText = document.createElement("a");
  seeMoreText.textContent = "See more";

  seeMoreSection.appendChild(seeMoreText);

  return seeMoreSection;
}

async function generateProductSection() {
  createHeader();
  const bodyElement = document.body;
  let mainElement = document.createElement("main");
  mainElement.classList.add("filter-bars-container");
  let searchElement = createSearchBar();
  let filtersElement = createFilterSection();
  let catalogElement = await createGamesList();
  let seeMoreElement = createSeeMoreSection();
  

  mainElement.append(
    searchElement,
    filtersElement,
    catalogElement,
    seeMoreElement
  );

  bodyElement.appendChild(mainElement);
  generateFooter();

}

generateProductSection();
