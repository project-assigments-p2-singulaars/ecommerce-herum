const gameSection = document.getElementById("game-section-container");
const filters = ["Top Rating", "Categories", "Sales", "Platforms"];
const allGames = 14

let gameElements = [];

import {
  fetchData,
  searchFilterByName,
  filterByCategories,
  filterByPlatforms,
  filterTopRating,
  filterTopSales,
} from "./fetch.js";
import { createHeader } from "./header.js";
import { generateFooter } from "./footer.js";

function updateList(newVideogames) {
  const videogamesSection = document.getElementById("game-section-container")
  videogamesSection.innerHTML = "";

  let limiter = allGames;

  if (newVideogames.length < allGames) {
    limiter = newVideogames.length;
  }

  for (let index = 0; index < limiter; index++) {
    let gameElement = createGameElement(newVideogames[index]);
    videogamesSection.appendChild(gameElement);
  }
}

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
  searchIcon.id = "searchIcon";

  searchIconContainer.appendChild(searchIcon);

  let searchInput = document.createElement("input");
  searchInput.id = "search";
  searchInput.name = "name";
  searchInput.type = "text";
  searchInput.placeholder = "Search";

  searchIcon.addEventListener("click", async () => {
    const searchValue = searchInput.value.toLowerCase();

    gameElements =  await searchFilterByName(searchValue);

    updateList(gameElements);
  });

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

  filterContainer.addEventListener("click", async () => {
    let games;

    switch (filterValue) {
      case "Top Rating":
        games = await filterTopRating();
        break;
      case "Categories":
        games = await filterByCategories();
        break;
      case "Sales":
        games = await filterTopSales();
        break;
      case "Platforms":
        games = await filterByPlatforms();
        break;
    }

    updateList(games)
  });
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

function createAddGameSection(){
  let addGamesContainer = document.createElement('div');
  addGamesContainer.id = 'addGame-container';

  addGamesContainer.addEventListener("click",() => {
    window.open("../templates/form.html","_self");
    sessionStorage.setItem("adminMode", 'add')
  })

  let plusAddGamesContainer = document.createElement('div');
  plusAddGamesContainer.id = 'plus-container';

  let plusAddGamesImage = document.createElement('img');
  plusAddGamesImage.id = 'plusicon';
  plusAddGamesImage.src= '../resources/plusicon.svg';
  plusAddGamesImage.alt= 'plus icon';

  let addGameTag = document.createElement('p');
  addGameTag.textContent = 'Add Game';

  plusAddGamesContainer.appendChild(plusAddGamesImage);
  addGamesContainer.append(plusAddGamesContainer,addGameTag);

  return addGamesContainer;
}

function createGameElement(videogame) {
  let gameContainer = document.createElement("div");

  gameContainer.classList.add("game-items-container");
  let gameImage = document.createElement("img");
  gameImage.src = videogame.image.url;
  gameImage.alt = videogame.image.imageAlt;

  // AÑADIDO BUTTON and image EDIT
  let editGamesContainer = document.createElement('div');
  editGamesContainer.id ='editGame-container';

  let editGamesImage = document.createElement('img');
  editGamesImage.id = 'editicon';
  editGamesImage.src = '../resources/editpenicon.svg';
  editGamesImage.alt = 'edit icon';
 
  //NO FUNCIONA--> EVENT BUBLING
  editGamesContainer.addEventListener("click",(event) => {
    event.preventDefault()
    window.open("../templates/form.html","_self");
    
    sessionStorage.setItem("adminMode", 'edit')
    sessionStorage.setItem("detailedVideogame", videogame.id)
    event.stopPropagation()
  })

  let priceContainer = document.createElement("a");
  priceContainer.classList.add("price-icon-container");
  priceContainer.href = "";

  let priceTag = document.createElement("p");
  priceTag.textContent = videogame.price;

  let cartLogo = document.createElement("img");
  cartLogo.src = "../../assets/icons/car.svg";
  cartLogo.alt = "";

  editGamesContainer.appendChild(editGamesImage);

  priceContainer.append(priceTag, cartLogo);

  gameContainer.append(gameImage, editGamesContainer,priceContainer);

  gameContainer.addEventListener("click",() => {
    window.open("../templates/detailedProduct.html","_self");
    sessionStorage.setItem("detailedVideogame", videogame.id)
  })

  return gameContainer;
}

async function createGamesList() {
  let gameSection = document.createElement("section");
  gameSection.id = "game-section-container";

  gameElements = await fetchData();

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
  let addGamesElement = createAddGameSection();
  let catalogElement = await createGamesList();
  let seeMoreElement = createSeeMoreSection();

  mainElement.append(
    searchElement,
    filtersElement,
    addGamesElement,
    catalogElement,
    seeMoreElement
  );

  bodyElement.appendChild(mainElement);
  generateFooter();
}

generateProductSection();
