import getRandomWord from './src/randomWord';
import setSharkImage from './src/sharkImage';
import {setupWord, isLetterInWord, revealLetterInWord} from './src/word'
import setupGuesses from './src/guess';
import './style.css';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setSharkImage(document.querySelector('#shark-img'), numWrong)
  setupWord(document.querySelector('#word-container'), word)
  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target
    button.setAttribute('disabled', true)
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter)
    } else {
      numWrong ++
      setSharkImage(document.querySelector('#shark-img'), numWrong)
    }
    // This was my first pass at the code to check for the win condition. I've introduced the newer one below
    // let winDetect = true
    // document.querySelectorAll('.letter-box').forEach((letterPlace) => {
    //   if (letterPlace.innerText === '') {
    //     winDetect = false
    //   }
    // })
    const winDetect = Array.from(document.querySelectorAll('.letter-box')).every((el) => el.innerText !== '',)
    if (winDetect) {
      document.querySelectorAll('button').forEach((indBtn) =>
        indBtn.setAttribute('disabled', true)
      )
      document.querySelector('#game-status').innerText = 'You win!'
    }
    if (numWrong === 5) {
      document.querySelectorAll('button').forEach((indBtn) =>
        indBtn.setAttribute('disabled', true)
      )
      document.querySelector('#game-status').innerText = 'You lose!'
    }
    
    
  }
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess)
  

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();

