const cartList = [];

function addToCart(videogame) {
  const cartObject = {
    id: videogame.id,
    name: videogame.game,
    price: videogame.price,
    quantity: 1,
  };

  const index = cartList.findIndex((game) => game.id === videogame.id);

  if (index === -1) {
    cartList.push(cartObject);
  } else {
    increaseQuantity(videogame.id);
  }
}

function removeFromCart(id) {
  const index = cartList.findIndex((videoGame) => videoGame.id === id);
  if (index !== -1) {
    cartList.splice(index, 1);
  }
}

function increaseQuantity(id) {
  const index = cartList.findIndex((videoGame) => videoGame.id === id);
  if (index !== -1) {
    cartList[index].quantity++;
  }
}

function decreaseQuantity(id) {
  const index = cartList.findIndex((videoGame) => videoGame.id === id);
  if (index !== -1 && cartList[index].quantity > 1) {
    cartList[index].quantity--;
  } else if (index !== -1 && cartList[index].quantity === 1) {
    removeFromCart(id);
  }
}

// removeFromCart();
console.log(cartList);

// increaseQuantity(2);
console.log(cartList);

// decreaseQuantity(20);
console.log(cartList);
