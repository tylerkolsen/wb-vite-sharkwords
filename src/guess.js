const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // This is setting up for the words to be displayed on the page. Each letter is represented

function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => {  // This splits all of the alphabet into an array, and then starts a for loop
    const btn = document.createElement('button');  // This creates a new button element in the HTML
    btn.innerText = letter;  // This sets the internal text for the button to be equal to the letter it is on
    btn.addEventListener('click', (e) => handleGuess(e, letter));  // This adds an event at click, that runs the 'handleGuess' function
    element.append(btn);  // this appends the new button to where the element is located
  });
}

export default setupGuesses;
