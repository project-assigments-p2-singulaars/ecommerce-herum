const apiUrl = "http://localhost:3000/videogames";

function adminForm(event) {
  const gameData = {
    id: 1,
    game: event.target.gameName.value,
    description: event.target.description.value,
    price: event.target.price.value,
    pegi: event.target.PEGI.value,
    rating: event.target.rating.value,
    image: {
      imageAlt: event.target.gameName.value,
      url: event.target.imageUpload.value,
    },
    developer: event.target.developer.value,
    release: event.target.release.value,
    genres: event.target.genres.value,
    platforms: event.target.platforms.value,
    tags: event.target.tags.value,
  };

  return gameData;
}

const gameFormElement = document.getElementById("gameForm");

gameFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log( event, 'event object' );

  const inputElements = adminForm(event);
  console.log(inputElements);
  const selectedGenres = Array.from(event.target.genres.selectedOptions).map(option => option.value);
    console.log(selectedGenres);
  // console.log(event.target.genres.value);
  // console.log(inputElements);

  const newGameData = {};
  // addNewGame(gameData);
});

export async function addNewGame(gameData) {
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gameData),
  })
    .then((response) => console.log(response.ok))
    .catch((error) => console.log(`Error at addNewGame: ${error}`));
}

export async function deleteGame(index) {
  await fetch(`${apiUrl}/${index}`, {
    method: "DELETE",
  });
}

// POR HACER
export async function changePartGame(index) {
  await fetch(`${apiUrl}/${index}`, {
    method: "PUT",
    body: JSON.stringify({ description: "foo" }),
  });
}
