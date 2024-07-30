let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('divDisplay');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        running = true;
    }
}

function stopTimer() {
    clearInterval(tInterval);
    running = false;
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = Math.floor((updatedTime - startTime) / 1000);

    display.innerHTML = difference < 10 ? "0" + difference : difference;
}