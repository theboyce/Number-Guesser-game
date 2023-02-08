//Game values

let min = 1;
let max = 10;
(winningNum = getRandomNum(min, max)), (guessesLeft = 3);

//UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
const playAgain = document.querySelector('.playAgain');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  //Validate guess
  if (guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    guessInput.value = '';
    return;
  } 

  //check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    //change bordercolor
    guessInput.style.borderColor = 'green';
    //set message
    setMessage(`${winningNum} is correct. You win!`, 'green');
    guessBtn.value = 'play again';

    guessBtn.addEventListener('click', function () {
      window.location.reload();
    });
  } else {
    //wrong number
    guessesLeft -= 1;
    setMessage(
      `Wrong number. you have ${guessesLeft} guesses left. Try again`,
      'red'
    );
    guessInput.value = '';
  }

  if (guessesLeft === 0) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'red';
    setMessage(
      `Game Over, you lost. The correct number was ${winningNum}`,
      'red'
    );
    guessBtn.value = 'play again';

    guessBtn.addEventListener('click', function () {
      window.location.reload();
    });
  }
});

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1 + min));
}

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
