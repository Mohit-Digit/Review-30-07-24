let timer;
let startTime;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('divDisplay');
const startStopButton = document.getElementById('start');
const resetButton = document.getElementById('stop');

function formatTime(ms) {
    const date = new Date(ms);
    return date.toISOString().substr(11, 8);
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStop() {
    if (running) {
        clearInterval(timer);
        running = false;
        startStopButton.textContent = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        running = true;
        startStopButton.textContent = 'Stop';
    }
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
    running = false;
    startStopButton.textContent = 'Start';
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
