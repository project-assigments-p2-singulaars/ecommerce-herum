const jsonUrl = "http://localhost:3000/videogames";

export function searchFilterByName() {

const searcher = document.getElementById("search");
const searchButton = document.getElementById("searchIcon");

searchButton.addEventListener("click", () => {
  const searchValue = searcher.value.toLowerCase();

  console.log(jsonUrl);
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const filteredVideogames = data.filter((videogames) =>
        videogames.name.toLowerCase().includes(searchValue)
      );

      filteredVideogames.map((videogames) => {
        const list = document.createElement("li");
        list.textContent = videogames.name;
        list.addEventListener("click", () => {
          showVideogamescard(videogames);
        });
        console.log(filteredVideogames);
      });
    });
});
}
