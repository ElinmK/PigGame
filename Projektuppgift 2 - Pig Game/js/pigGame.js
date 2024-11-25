let playerName = "";
let playerScore = 0;
let currentRoundScore = 0;
let roundsPlayed = 0;
let winningScore = 100;


function startGame(){
    playerName = document.getElementById('playerName').value;

    if (playerName === ""){
        playerName = "Spelare";
    }

    document.getElementById('displayName').innerText = playerName;
    document.getElementById('playerNameSection').classList.add ('hidden');
    document.getElementById('scoreBoard').classList.remove ('hidden');
    document.getElementById('gameActions').classList.remove ('hidden');
    document.getElementById('resetButton').classList.remove('hidden');
    document.querySelector("button[onclick='startGame()']").classList.add('hidden');

    resetGame();
}


function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceResult').innerText = `Tärningens resultat: ${dice}`;

    if (dice === 1) {
        currentRoundScore = 0;
        alert("Oj! Du slog en 1:a och förlorade alla poäng för denna runda.");
    } else {
        currentRoundScore += dice;
    }

    updateScores();
}

function hold() {
    playerScore += currentRoundScore;
    currentRoundScore = 0;
    roundsPlayed++;


    if (playerScore >= winningScore) {
        declareWinner();
    } else {
        updateScores();
    }
}

function updateScores() {
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('roundScore').innerText = currentRoundScore;
    document.getElementById('rounds').innerText = roundsPlayed;
}

function declareWinner() {
    document.getElementById('winnerMessage').innerText = `Grattis ${playerName}! Du har vunnit med ${playerScore} poäng efter ${roundsPlayed} omgångar!`;
    document.getElementById('gameActions').classList.add('hidden');
    document.getElementById('winner').classList.remove('hidden');
    document.getElementById('resetButton').classList.remove('hidden');
}


function restartGame() {
    playerScore = 0;
    currentRoundScore = 0;
    roundsPlayed = 0;

    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('roundScore').innerText = currentRoundScore;
    document.getElementById('rounds').innerText = roundsPlayed;
    document.getElementById('diceResult').textContent = '';
    document.getElementById('gameActions').classList.add('hidden');
    document.getElementById('winner').classList.add('hidden');
    document.getElementById('scoreBoard').classList.add('hidden');
    document.getElementById('resetButton').classList.add('hidden');
    document.getElementById('playerNameSection').classList.remove('hidden');
    document.querySelector("button[onclick='startGame()']").classList.remove('hidden');
    

}

