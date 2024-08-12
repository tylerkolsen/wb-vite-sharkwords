import getRandomWord from "./randomWord";
let word;

function setupWord(element, initWord) {
    word = initWord
    
    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', '<div class="letter-box"></div>')
    })
}

function isLetterInWord(letter) {
    return word.includes(letter)
}

function revealLetterInWord(letter) {
    let check = document.querySelectorAll('.letter-box')
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            check[i].innerHTML = letter
        }
    }
}

export {setupWord, isLetterInWord, revealLetterInWord}