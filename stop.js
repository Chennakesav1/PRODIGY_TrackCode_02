let timerInterval;
let elapsedTime = 0; // in milliseconds
let isRunning = false;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

document.getElementById('startBtn').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            elapsedTime += 100; // increment by 100ms
            updateDisplay();
        }, 100);
    }
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear lap times
});

document.getElementById('lapBtn').addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = formatTime(elapsedTime);
        lapList.appendChild(lapTime);
    }
});