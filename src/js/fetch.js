const apiUrl = "http://localhost:3000/videogames";

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
// fetchData();

// module.exports = { fetchData };


// async function addAllGamesToCart() {
//   const videoGames = await fetchData();
//   videoGames.map((videogame) => {
//     addToCart(videogame);
//   });
// }

// addAllGamesToCart();
