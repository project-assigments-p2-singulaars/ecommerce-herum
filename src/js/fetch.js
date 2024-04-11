const apiUrl = "http://localhost:3000/videogames";

const topRatingValue = "Top 10";
const topSalesValue = "Popular Games";
const platformsValue = "PC";
const categoriesValue = "Role-Playing";

export async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchFilterByName(searchvalue) {
  return await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const filteredVideogames = data.filter((videogames) =>
        videogames.game.toLowerCase().includes(searchvalue)
      );

      return filteredVideogames;
    });
}


export async function filterTopSales() {
  const filterGames = await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let filteredVideogames = [];

      data.map((videogame) => {
        if (videogame.tags.includes(topSalesValue)) {
          filteredVideogames.push(videogame);
        }
      });
      return filteredVideogames;
    });
    return filterGames;
}

export async function filterTopRating() {
  return await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let filteredVideogames = [];

      data.map((videogame) => {
        if (videogame.tags.includes(topRatingValue)) {
          filteredVideogames.push(videogame);
        }
      });
      return filteredVideogames;
    });
}

export async function filterByPlatforms() {
  return await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let filteredVideogames = [];

      data.map((videogame) => {
        if (videogame.platforms.includes(platformsValue)) {
          filteredVideogames.push(videogame);
        }
      });
      return filteredVideogames;
    });
}

export async function filterByCategories() {
  return await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let filteredVideogames = [];

      data.map((videogame) => {
        if (videogame.genres.includes(categoriesValue)) {
          filteredVideogames.push(videogame);
        }
      });
      return filteredVideogames;
    });
}
