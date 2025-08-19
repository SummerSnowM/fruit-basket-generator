let fruits = [];

function addFruit() {
  const newFruit = prompt('Please enter a fruit! ');
  fruits.push(newFruit);
  document.getElementById('message').innerText = `${newFruit} added to basket!`;
}

function viewBasket() {
  if (fruits.length === 0) {
    document.getElementById('message').innerText = 'Your basket is empty';
  } else {
    let message = 'Current Basket:\n';
    for (let i = 0; i < fruits.length; i++) {
      message = message + `${i + 1}. ${fruits[i]}\n`;
    }
    document.getElementById('message').innerText = message;
  }
}
