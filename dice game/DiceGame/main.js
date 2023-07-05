// Generating random number and using floor() because random method will produce decimal value 
const randNumber1 = Math.floor(Math.random() * 6) + 1;

// assign random numbers to the image
const diceNumber = `dice${randNumber1}.png`;

// assign diceNumber to folder
const diceImage = `images/${diceNumber}`;

// select the image and set diceImage as the src
const image = document.querySelector('.img1');
image.setAttribute('src' , diceImage)

const randNumber2 = Math.floor(Math.random() * 6) + 1;

// assign random numbers to the image
const diceNumber2 = `dice${randNumber2}.png`;

// assign diceNumber to folder
const diceImage2 = `images/${diceNumber2}`;

// select the image and set diceImage as the src
const image2 = document.querySelector('.img2');
image2.setAttribute('src' , diceImage2)

if(randNumber1 > randNumber2){
  document.querySelector('h1').innerHTML = 'player 1 won'
}
else if(randNumber1 < randNumber2){
  document.querySelector('h1').innerHTML = 'player 2 won'
}

function refreshPage(e){
  location.reload();
  e.preventdefault();
}