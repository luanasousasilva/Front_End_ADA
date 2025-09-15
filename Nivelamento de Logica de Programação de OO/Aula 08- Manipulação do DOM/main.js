
function getRandomFruit(array) {
    const randNum = Math.random();
    const index = Math.floor(randNum * array.length);
    return array[index];
}


const fruits = [
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "peach",
    "cherry",
    "strawberry",
    "blueberry",
    "watermelon"
];


let word = getRandomFruit(fruits);
let arrayFruitLetters = Array(word.length).fill('_');
let errors = 0;
const maxErrors = 6;
const guessedLetters = new Set();

const hangmanDrawings = [
    `
  ______
  |    |
       |
       |
       |
       |
=======`,
    `
  ______
  |    |
  O    |
       |
       |
       |
=======`,
    `
  ______
  |    |
  O    |
  |    |
       |
       |
=======`,
    `
  ______
  |    |
  O    |
 /|    |
       |
       |
=======`,
    `
  ______
  |    |
  O    |
 /|\\   |
       |
       |
=======`,
    `
  ______
  |    |
  O    |
 /|\\   |
 /     |
       |
=======`,
    `
  ______
  |    |
  O    |
 /|\\   |
 / \\   |
       |
=======`
];

const wordDisplay = document.getElementById('word-display');
const errorCount = document.getElementById('error-count');
const usedLetters = document.getElementById('used-letters');
const letterInput = document.getElementById('letter-input');
const guessButton = document.getElementById('guess-button');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');
const hangmanDrawing = document.getElementById('hangman-drawing');


function updateGameState() {
    wordDisplay.textContent = arrayFruitLetters.join(' ');
    errorCount.textContent = `Erros: ${errors}/${maxErrors}`;
    usedLetters.textContent = `Letras usadas: ${[...guessedLetters].join(', ') || 'Nenhuma'}`;
    hangmanDrawing.innerHTML = `<pre>${hangmanDrawings[errors]}</pre>`;
}


function showMessage(text, type) {
    message.textContent = text;
    message.className = `text-center mb-3 text-${type}`;
}


function resetGame() {
    word = getRandomFruit(fruits);
    arrayFruitLetters = Array(word.length).fill('_');
    errors = 0;
    guessedLetters.clear();
    letterInput.value = '';
    letterInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
    message.textContent = '';
    updateGameState();
}

function playHangman() {
    updateGameState();

    guessButton.addEventListener('click', () => {
        const guessLetter = letterInput.value.toLowerCase().trim();
        letterInput.value = '';


        if (guessLetter.length !== 1 || !/[a-z]/.test(guessLetter)) {
            showMessage('Digite apenas uma letra válida (a-z)!', 'danger');
            return;
        }


        if (guessedLetters.has(guessLetter)) {
            showMessage('Você já tentou essa letra! Tente outra.', 'warning');
            return;
        }


        guessedLetters.add(guessLetter);


        let found = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guessLetter) {
                arrayFruitLetters[i] = guessLetter;
                found = true;
            }
        }

        if (found) {
            showMessage('Boa! A letra está na palavra!', 'success');
        } else {
            errors++;
            showMessage(`Ops! A letra "${guessLetter}" não está na palavra. Você tem ${maxErrors - errors} tentativas restantes.`, 'danger');
        }

        updateGameState();


        if (!arrayFruitLetters.includes('_')) {
            showMessage(`Parabéns! Você adivinhou a palavra: ${word}`, 'success');
            letterInput.disabled = true;
            guessButton.disabled = true;
            restartButton.style.display = 'block';
        } else if (errors >= maxErrors) {
            showMessage(`Você perdeu! A palavra era: ${word}`, 'danger');
            letterInput.disabled = true;
            guessButton.disabled = true;
            restartButton.style.display = 'block';
        }
    });

    letterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            guessButton.click();
        }
    });

    restartButton.addEventListener('click', resetGame);
}

playHangman();