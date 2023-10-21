// Función para generar un número aleatorio entre 1 y 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let targetNumber = generateRandomNumber();
let attempts = 0;

document.addEventListener('DOMContentLoaded', function () {
    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('resetButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    guessButton.addEventListener('click', checkGuess);
    resetButton.addEventListener('click', resetGame);

    function checkGuess() {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Ingresa un número válido entre 1 y 100.';
        } else {
            attempts++;
            if (guess < targetNumber) {
                message.textContent = 'Demasiado bajo. Intenta de nuevo.';
            } else if (guess > targetNumber) {
                message.textContent = 'Demasiado alto. Intenta de nuevo.';
            } else {
                message.textContent = `¡Correcto! Adivinaste el número en ${attempts} intentos.`;
                guessInput.disabled = true;
                guessButton.disabled = true;
                resetButton.disabled = false;
            }
        }
    }

    function resetGame() {
        targetNumber = generateRandomNumber();
        attempts = 0;
        guessInput.value = '';
        guessInput.disabled = false;
        guessButton.disabled = false;
        resetButton.disabled = true;
        message.textContent = '';
    }
});
