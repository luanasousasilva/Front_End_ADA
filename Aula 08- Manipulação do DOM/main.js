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
const hangmanFruit = getRandomFruit(fruits);

const arrayFruitLetters = [];
for (let letter of hangmanFruit) {
    arrayFruitLetters.push('_');
}

const guessLetter = prompt(`
${arrayFruitLetters.join(' ')}
Digite uma letra da palavra:`);

if (hangmanFruit.includes(guessLetter)) {
    for (let i=0; i < hangmanFruit.length; i++) {
        const letter = hangmanFruit[i];
        if (letter == guessLetter) {
            arrayFruitLetters[i] = guessLetter;
        }
    }
}