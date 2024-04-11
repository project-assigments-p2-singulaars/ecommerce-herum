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

const putTestData = {
  id: 1,
  game: "Baldur's Gatito 2",
  description:
    "An ancient evil has returned to Baldur's Gate, intent on devouring it from the inside out. The fate of Faerun lies in your hands. Alone, you may resist. But together, you can overcome.",
  price: "59.99€",
  pegi: 18,
  rating: 9.4,
  image: {
    imageAlt: "Baldur's 3 image",
    url: "../img/baldursgate3.webp",
  },
  developer: "Larian Studios",
  release: "August, 03, 2023",
  genres: ["Isometric", "Third-Person", "Turn-Based", "Role-Playing"],
  platforms: ["Mac", "PC", "PlayStation 5", "Xbox Series X/S"],
  tags: ["Top 10", "Popular Games", "Discount"],
};

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

export async function editGame (index){
    await fetch(`${apiUrl}/${index}`, {
        method: "PUT",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(putTestData)
    })
      .then((response) => console.log(response.ok))
      .catch((error) => console.log(`Error al editGame: ${error}`));
}
