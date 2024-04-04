const jsonUrl = "http://localhost:3000/videogames";
const searchBarFilter = document.getElementById("search");
const searchButton = document.getElementById("searchIcon");
const rating = document.getElementById("filterTopRating");
const categories = document.getElementById("filterCategories");
const sales = document.getElementById("filterSales");
const platforms = document.getElementById("filterPlatforms");

const topRatingValue = "Top 10";
const topSalesValue = "Popular Games";
const platformsValue = "PC";
const categoriesValue = "Role-Playing";

async function filterTopSales() {
  await fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      let filteredVideogames = [];

      data.map((videogame) => {
        if (videogame.tags.includes(topSalesValue)) {
          filteredVideogames.push(videogame);
        }
      });
      console.log(filteredVideogames);
      return filteredVideogames;
    });
}

async function filterTopRating() {
  await fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      let filteredVideogames = [];

      data.map((videogame) => {
        if (videogame.tags.includes(topRatingValue)) {
          filteredVideogames.push(videogame);
        }
      });
      console.log(filteredVideogames);
      return filteredVideogames;
    });
}

async function filterByPlatforms() {
  await fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      let filteredVideogames = [];

      data.map((videogame) => {
        if (videogame.platforms.includes(platformsValue)) {
          filteredVideogames.push(videogame);
        }
      });
      console.log(filteredVideogames);
      return filteredVideogames;
    });
}

async function filterByCategories() {
  await fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      let filteredVideogames = [];

      data.map((videogame) => {
        if (videogame.genres.includes(categoriesValue)) {
          filteredVideogames.push(videogame);
        }
      });
      console.log(filteredVideogames);
      return filteredVideogames;
    });
}

sales.addEventListener("click", () => {
  filterTopSales();
});

rating.addEventListener("click", () => {
  filterTopRating();
});

platforms.addEventListener("click", () => {
  filterByPlatforms();
});

categories.addEventListener("click", () => {
  filterByCategories();
});