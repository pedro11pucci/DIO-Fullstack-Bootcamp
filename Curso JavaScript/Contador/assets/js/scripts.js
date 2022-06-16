var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }

    if (currentNumber == 10) {
        document.getElementById('adicionar').disabled = true;
    }

    if (currentNumber != -10) {
        document.getElementById('subtrair').disabled = false;
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }

    if (currentNumber != 10) {
        document.getElementById('adicionar').disabled = false;
    }

    if (currentNumber == -10) {
        document.getElementById('subtrair').disabled = true;
    }
}

document.getElementById('subtrair').addEventListener('click', decrement);
document.getElementById('adicionar').addEventListener('click', increment);

