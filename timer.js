let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

const timerDisplay = document.getElementById("timer");
const lapsList = document.getElementById("laps");

function updateDisplay() { //update the counting.
    let h = hours.toString().padStart(2, '0');
    let m = minutes.toString().padStart(2, '0');
    let s = seconds.toString().padStart(2, '0');
    let ms = Math.floor(milliseconds / 10).toString().padStart(2, '0');
    timerDisplay.textContent = `${h}:${m}:${s}:${ms}`;
}

function startTimer() { //statt the timer.
    if (running) return;
    running = true;
    timer = setInterval(() => {
        milliseconds += 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 10); 
}

function pauseTimer() { //stops the timer for the meantime.
    running = false;
    clearInterval(timer);
}

function resetTimer() { //restart the counting.
    running = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0; 
    milliseconds = 0;
    updateDisplay();
    lapsList.innerHTML = "";
}

function lapTimer() { //display lap duration range.
    const lapTime = timerDisplay.textContent;
    const li = document.createElement("li");
    li.textContent = lapTime;
    lapsList.appendChild(li);
}

updateDisplay();

