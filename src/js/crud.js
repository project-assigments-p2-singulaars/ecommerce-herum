const apiUrl = "http://localhost:3000/videogames";

function assignPegiImg(pegiValue) {
  let pegiImageAlt;
  let pegiUrl;

  switch (parseInt(pegiValue)) {
    case 3:
      pegiImageAlt = "PEGI 3 Image";
      pegiUrl = "../img/pegi-img/PEGI_3.svg";
      break;
    case 7:
      pegiImageAlt = "PEGI 7 Image"
      pegiUrl = "../img/pegi-img/PEGI_7.svg";
      break;
    case 12:
      pegiImageAlt = "PEGI 12 Image"
      pegiUrl = "../img/pegi-img/PEGI_12.svg";
      break;
    case 16:
      pegiImageAlt = "PEGI 16 Image"
      pegiUrl = "../img/pegi-img/PEGI_16.svg";
      break; 
    case 18:
      pegiImageAlt = "PEGI 18 Image"
      pegiUrl = "../img/pegi-img/PEGI_18.svg";
      break;
    default:
      pegiImageAlt = "";
      pegiUrl = ""
      break;
  }

  let pegiData = {
    imageAlt: pegiImageAlt,
    url: pegiUrl
  };

  return pegiData;
}

function parseDate(releaseDate) {
  const dates = releaseDate.split("-");

  const year = dates[0];
  const month = dates[1];
  const days = dates[2];

  let monthText;

  switch (parseInt(month)) {
    case 1:
      monthText = "January";
      break;
    case 2:
      monthText = "February";
      break;
    case 3:
      monthText = "March";
      break;
    case 4:
      monthText = "April";
      break;
    case 5:
      monthText = "May";
      break;
    case 6:
      monthText = "June";
      break;
    case 7:
      monthText = "July";
      break;
    case 8:
      monthText = "August";
      break;
    case 9:
      monthText = "September";
      break;
    case 10:
      monthText = "October";
      break;
    case 11:
      monthText = "November";
      break;
    case 12:
      monthText = "December";
      break;
    default:
      monthText= '';
      break;
  }

  let resultDate= `${monthText}, ${days}, ${year}`;
  return resultDate;
}
export async function getLastId(){
  const gameId = await fetch(apiUrl).then((response) => response.json()).then((data) => {
    return (data[data.length -1].id)+1;
  }).catch((error) => console.error(error))

  console.log(gameId)
  return gameId;
}

export async function adminForm(event, index) {
  const selectedGenres = Array.from(event.target.genres.selectedOptions).map(
    (option) => option.value
  );

  const selectedPlatforms = Array.from(
    event.target.platforms.selectedOptions
  ).map((option) => option.value);

  const selectedTags = Array.from(event.target.tags.selectedOptions).map(
    (option) => option.value
  );

  const pegiData = assignPegiImg(event.target.PEGI.value);
  const release = parseDate(event.target.release.value);

  let id = index === 0 ? await getLastId() : index;

  const gameData = {
    id: id,
    game: event.target.gameName.value,
    description: event.target.description.value,
    price: event.target.price.value,
    pegi: pegiData,
    rating: event.target.rating.value,
    image: {
      imageAlt: event.target.gameName.value,
      url: event.target.imageUpload.value,
    },
    developer: event.target.developer.value,
    release: release,
    genres: selectedGenres,
    platforms: selectedPlatforms,
    tags: selectedTags,
  };

  return gameData;
}

// const gameFormElement = document.getElementById("gameForm");

// gameFormElement.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const inputElements = adminForm(event);
//   addNewGame(inputElements);
// });

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

export async function editGame(data, index) {
  await fetch(`${apiUrl}/${index}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => console.log(response.ok))
    .catch((error) => console.log(`Error al editGame: ${error}`));
}
