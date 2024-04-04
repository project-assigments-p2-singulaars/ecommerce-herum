const apiUrl = "http://localhost:3000/videogames";

const topRatingValue = "Top 10";
const topSalesValue = "Popular Games";
const platformsValue = "PC";
const categoriesValue = "Role-Playing";

export async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchFilterByName(searchvalue) {
  await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const filteredVideogames = data.filter((videogames) =>
        videogames.game.toLowerCase().includes(searchvalue)
      );

      filteredVideogames.map((videogames) => {
        // const list = document.createElement("li");
        // list.textContent = videogames.game;
        // list.addEventListener("click", () => {
        //   showVideogamescard(videogames);
        // });
        console.log(filteredVideogames);
      });
    });
}


export async function filterTopSales() {
  await fetch(apiUrl)
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

export async function filterTopRating() {
  await fetch(apiUrl)
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

export async function filterByPlatforms() {
  await fetch(apiUrl)
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

export async function filterByCategories() {
  await fetch(apiUrl)
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
