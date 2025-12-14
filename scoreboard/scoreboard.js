/* TIMER*/
let timeRemaining = 12 * 60;
let timerInterval = null;
let clockRunning = false;

function updateTimer(display) {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    display.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function startStopClock(display, button, onEnd) {
    if (clockRunning) {
        clearInterval(timerInterval);
        clockRunning = false;
        button.textContent = "START CLOCK";
        return;
    }

    clockRunning = true;
    button.textContent = "STOP CLOCK";

    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimer(display);
        } else {
            clearInterval(timerInterval);
            clockRunning = false;
            button.textContent = "START CLOCK";
            onEnd();
        }
    }, 1000);
}

/* BASKETBALL SCOREBOARD */
if (document.getElementById("basketball-scoreboard")) {

    let homeScore = 0;
    let awayScore = 0;
    let period = 1;
    let possession = "home";

    const timer = document.getElementById("timer");
    const startBtn = document.getElementById("start-clock-2");

    const homeScoreDisplay = document.querySelector("#home-score-team .score");
    const awayScoreDisplay = document.querySelector("#away-score-team .score");
    const periodDisplay = document.getElementById("period-number");

    const homePoss = document.querySelector("#home-poss-bonus .possession");
    const awayPoss = document.querySelector("#away-poss-bonus .possession");

    const homeBonus = document.querySelector("#home-poss-bonus .bonus");
    const awayBonus = document.querySelector("#away-poss-bonus .bonus");

    function updateScores() {
        homeScoreDisplay.textContent = homeScore;
        awayScoreDisplay.textContent = awayScore;
    }

    function updatePossession() {
        homePoss.classList.remove("active");
        awayPoss.classList.remove("active");

        if (possession === "home") {
            homePoss.classList.add("active");
        } else {
            awayPoss.classList.add("active");
        }
    }

    function endBasketballPeriod() {
        if (period < 4) {
            period++;
            periodDisplay.textContent = period;
            timeRemaining = 12 * 60;
            updateTimer(timer);
        }
    }

    startBtn.onclick = () =>
        startStopClock(timer, startBtn, endBasketballPeriod);

    document.getElementById("score-one-home").onclick = () => { homeScore++; updateScores(); };
    document.getElementById("score-two-home").onclick = () => { homeScore += 2; updateScores(); };
    document.getElementById("score-three-home").onclick = () => { homeScore += 3; updateScores(); };

    document.getElementById("score-one-away").onclick = () => { awayScore++; updateScores(); };
    document.getElementById("score-two-away").onclick = () => { awayScore += 2; updateScores(); };
    document.getElementById("score-three-away").onclick = () => { awayScore += 3; updateScores(); };

    document.getElementById("possession-2").onclick = () => {
        possession = possession === "home" ? "away" : "home";
        updatePossession();
    };

    document.getElementById("add-bonus-home").onclick = () =>
        homeBonus.classList.toggle("active");

    document.getElementById("add-bonus-away").onclick = () =>
        awayBonus.classList.toggle("active");

    document.getElementById("reset-2").onclick = () => {
        clearInterval(timerInterval);
        clockRunning = false;
        startBtn.textContent = "START CLOCK";

        timeRemaining = 12 * 60;
        updateTimer(timer);

        homeScore = 0;
        awayScore = 0;
        period = 1;
        possession = "home";

        updateScores();
        periodDisplay.textContent = period;
        updatePossession();

        homeBonus.classList.remove("active");
        awayBonus.classList.remove("active");
    };

    updateTimer(timer);
    updateScores();
    updatePossession();
}

/* FOOTBALL SCOREBOARD */
if (document.getElementById("football-scoreboard")) {

    let homeScore = 0;
    let awayScore = 0;
    let period = 1;
    let down = 1;
    let yards = 10;

    const timer = document.getElementById("timer");
    const startBtn = document.getElementById("start-clock-1");

    const homeScoreDisplay = document.querySelector("#home-score-team .score");
    const awayScoreDisplay = document.querySelector("#away-score-team .score");
    const periodDisplay = document.getElementById("period-number-football");
    const downDisplay = document.getElementById("down-count");
    const yardsDisplay = document.getElementById("yards-count");

    function updateScores() {
        homeScoreDisplay.textContent = homeScore;
        awayScoreDisplay.textContent = awayScore;
    }

    function endFootballPeriod() {
        if (period < 4) {
            period++;
            periodDisplay.textContent = period;
            timeRemaining = 12 * 60;
            updateTimer(timer);
        }
    }

    startBtn.onclick = () =>
        startStopClock(timer, startBtn, endFootballPeriod);

    document.getElementById("home-score-six").onclick = () => { homeScore += 6; updateScores(); };
    document.getElementById("home-score-one-1").onclick = () => { homeScore++; updateScores(); };
    document.getElementById("home-score-two-1").onclick = () => { homeScore += 2; updateScores(); };
    document.getElementById("home-score-three-1").onclick = () => { homeScore += 3; updateScores(); };

    document.getElementById("away-score-six").onclick = () => { awayScore += 6; updateScores(); };
    document.getElementById("away-score-one-1").onclick = () => { awayScore++; updateScores(); };
    document.getElementById("away-score-two-1").onclick = () => { awayScore += 2; updateScores(); };
    document.getElementById("away-score-three-1").onclick = () => { awayScore += 3; updateScores(); };

    document.getElementById("period-1").onclick = () => {
        if (period < 4) {
            period++;
            periodDisplay.textContent = period;
        }
    };

    document.getElementById("downs").onclick = () => {
        down = down < 4 ? down + 1 : 1;
        downDisplay.textContent = down;
    };

    document.getElementById("subtract-yards").onclick = () => {
        yards = Math.max(0, yards - 1);
        yardsDisplay.textContent = yards;
    };

    document.getElementById("add-yards").onclick = () => {
        yards++;
        yardsDisplay.textContent = yards;
    };

    document.getElementById("reset-1").onclick = () => {
        clearInterval(timerInterval);
        clockRunning = false;
        startBtn.textContent = "START CLOCK";

        timeRemaining = 12 * 60;
        updateTimer(timer);

        homeScore = 0;
        awayScore = 0;
        period = 1;
        down = 1;
        yards = 10;

        updateScores();
        periodDisplay.textContent = period;
        downDisplay.textContent = down;
        yardsDisplay.textContent = yards;
    };

    updateTimer(timer);
    updateScores();
}
