import { addNewGame, adminForm, editGame } from "./crud.js";
import { generateFooter } from "./footer.js";
import { createHeader } from "./header.js";

const apiUrl = "http://localhost:3000/videogames";
function getPegiValue(pegiValue) {
  const result = pegiValue.split(" ")[1];

  return result;
}

function getReleaseValue(release) {
  const splitDate = release.split(",");

  let month;
  switch (splitDate[0]) {
    case "January":
      month = "01";
      break;
    case "February":
      month = "02";
      break;
    case "March":
      month = "03";
      break;
    case "April":
      month = "04";
      break;
    case "May":
      month = "05";
      break;
    case "June":
      month = "06";
      break;
    case "July":
      month = "07";
      break;
    case "August":
      month = "08";
      break;
    case "September":
      month = "09";
      break;
    case "October":
      month = "10";
      break;
    case "November":
      month = "11";
      break;
    case "December":
      month = "12";
      break;
  }

  let result = `${splitDate[2].trim()}-${month}-${splitDate[1].trim()}`;
  console.log(result);
  return result;
}

async function generateForm() {
  const mainElement = document.createElement("main");
  const adminMode = sessionStorage.getItem("adminMode");
  const gameId = sessionStorage.getItem("detailedVideogame");

  createHeader();

  mainElement.innerHTML = `<h2>${
    adminMode === "add" ? "ADD NEW GAME" : "EDIT GAME"
  }</h2>
    <form id="gameForm">
        <div class="inputContainer" >
            <label for="gameName">Game name:</label>
            <input type="text" id="gameName" name="gameName" required>
        </div>

        <div class="inputContainer">
            <label for="description">Description:</label>
            <textarea name="description" id="description" cols="15" rows="5"></textarea>
        </div>
        <div class="inputContainer">
            <label for="price">Price:</label>
            <input type="text" id="price" name="price" value="€" required>
        </div>
        <div class="inputContainer">
            <label for="PEGI">Select PEGI:</label>
            <select name="PEGI" id="PEGI" required>
                <option value="selectPEGI">Select PEGI</option>
                <option value="3">PEGI 3</option>
                <option value="7">PEGI 7</option>
                <option value="12">PEGI 12</option>
                <option value="16">PEGI 16</option>
                <option value="18">PEGI 18</option>
            </select>
        </div>
        <div class="inputContainer">
            <label class="label" for="rating">Rating:</label>
            <input required class="input" type="number" id="rating" name="rating" min="0" max="10">
        </div>
        <div class="inputContainer">
            <label for="imageUpload">Upload Image:</label>
            <input required type="texts  " id="imageUpload" name="imageUpload">
        </div>
        <div class="inputContainer">
            <label for="developer">Developer:</label>
            <input required class="input" type="text" id="developer" name="developer">
        </div>
        <div class="inputContainer">
            <label for="release">Release:</label>
            <input required type="date" id="release" name="release">
        </div>
        <div class="inputContainer">
            <label for="genres">Genres:</label>
            <select required id="genres" name="genres" multiple>
                <br>
                <option value="First-Person">First-person</option>
                <option value="Third-Person">Third-person</option>
                <option value="Isometric">Isometric</option>
                <option value="Turn-Based">Turn-based</option>
                <option value="Role-Playing">Role-playing</option>
                <option value="Open World">Open world</option>
                <option value="Action">Action</option>
                <option value="Shooter">Shooter</option>
                <option value="Platform">Platform</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Adventure">Adventure</option>
                <option value="Top-Down">Top-down</option>
                <option value="Simulation">Simulation</option>
                <option value="Hack and Slash">Hack and slash</option>
                <option value="Sports">Sports</option>
            </select>
        </div>
        <div class="inputContainer">
            <label for="platforms">Platforms:</label>
            <select required id="platforms" name="platforms" multiple>
                <option value="Pc">PC</option>
                <option value="PlayStation 4">PlayStation 4</option>
                <option value="PlayStation 5">PlayStation 5</option>
                <option value="Xbox Series X/S">Xbox Series X/S</option>
                <option value="Xbox One">Xbox One</option>
                <option value="Google Stadia">Google Stadia</option>
                <option value="Linux">Linux</option>
                <option value="PlayStation 3">PlayStation 3</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="Xbox 360">Xbox 360</option>
                <option value="Mobile">Mobile</option>
                <option value="PlayStation Vita">PlayStation Vita</option>
            </select>
        </div>
        <div class="inputContainer">
            <label for="tags">Tags:</label>
            <select required id="tags" name="tags" multiple>
                <option value="Top 10">Top 10</option>
                <option value="Discount">Discount</option>
                <option value="Popular Games">Popular Games</option>
            </select>
        </div>
        <div>
            <input type="submit" name="submit" id="submit">Enviar</input>
        </div>
    </form>`;
   
  document.body.appendChild(mainElement);
  generateFooter();

  if (adminMode === "edit") {
    await fetch(`${apiUrl}/${gameId}`)
      .then((response) => response.json())
      .then((data) => {
        const gameTitle = document.getElementById("gameName");
        const gameDescription = document.getElementById("description");
        const gamePrice = document.getElementById("price");
        const gamePegi = document.getElementById("PEGI");
        const gameRating = document.getElementById("rating");
        const gameImage = document.getElementById("imageUpload");
        const gameDeveloper = document.getElementById("developer");
        const gameRelease = document.getElementById("release");
        const gameGenres = document.getElementById("genres");
        const gamePlatforms = document.getElementById("platforms");
        const gameTags = document.getElementById("tags");

        gameTitle.value = data.game;
        gameDescription.value = data.description;
        gamePrice.value = data.price;
        gamePegi.value = getPegiValue(data.pegi.imageAlt);
        gameRating.value = data.rating;
        gameImage.value = data.image.url;
        gameDeveloper.value = data.developer;
        gameRelease.value = getReleaseValue(data.release);

        for (let index = 0; index < gameGenres.options.length; index++) {
          gameGenres.options[index].selected =
            data.genres.indexOf(gameGenres.options[index].value) >= 0;
        }

        for (let index = 0; index < gamePlatforms.options.length; index++) {
          gamePlatforms.options[index].selected =
            data.platforms.indexOf(gamePlatforms.options[index].value) >= 0;
        }

        for (let index = 0; index < gameTags.options.length; index++) {
          gameTags.options[index].selected =
            data.tags.indexOf(gameTags.options[index].value) >= 0;
        }
      })
      .catch((error) => console.log("Error at edit game: ", error));
  }

    const gameFormElement = document.getElementById("gameForm");
    console.log(gameFormElement)

    gameFormElement.addEventListener("submit", async (event) => {
      event.preventDefault();
      let inputElements;

      if (adminMode === "edit") {
        inputElements = await adminForm(event, gameId);
        console.log("EDITTO");
        await editGame(
          inputElements,
          gameId
        );
      } else if (adminMode === "add") {
        console.log("ASDASDAS");
        inputElements = await adminForm(event, 0);

        await addNewGame(inputElements, 0);
      }
    });
}

generateForm();
