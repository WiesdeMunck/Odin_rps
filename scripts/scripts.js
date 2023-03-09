// Players choice buttons

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// computer options
let rpsArray = ['rock', 'paper', 'scissors'];
let numberGen = Math.floor(Math.random() * rpsArray.length );
let pcChoice = rpsArray[Math.floor(Math.random() * rpsArray.length )];


// Log players choice
let playersChoice = "";


// Rps functions per button
rock.addEventListener("click", function() {
    playersChoice = "rock"
    console.log(playersChoice)
    pcChoice = rpsArray[Math.floor(Math.random() * rpsArray.length )];
    console.log(pcChoice)
    referee()
});

paper.addEventListener("click", function() {
    playersChoice = "paper"
    console.log(playersChoice)
    pcChoice = rpsArray[Math.floor(Math.random() * rpsArray.length )];
    console.log(pcChoice)
    referee()
});

scissors.addEventListener("click", function() {
    playersChoice = "scissors"
    console.log(playersChoice)
    pcChoice = rpsArray[Math.floor(Math.random() * rpsArray.length )];
    console.log(pcChoice)
    referee()
});


let playerWinsCounter = 0;
let pcWinsCounter = 0;
let tieCounter = 0;

// checks wins and losses
function referee() {
    if ( playersChoice == pcChoice ) {
        tieCounter ++;
        document.getElementById("tie").innerHTML = tieCounter;
    } else if ( playersChoice == "rock" & pcChoice == "scissors") {
        playerWinsCounter ++;
        document.getElementById("playerWins").innerHTML = playerWinsCounter;
    } else if ( playersChoice == "paper" & pcChoice == "rock") {
        playerWinsCounter ++;
        document.getElementById("playerWins").innerHTML = playerWinsCounter;
    } else if ( playersChoice == "scissors" & pcChoice == "paper") {
        playerWinsCounter ++;
        document.getElementById("playerWins").innerHTML = playerWinsCounter;
    } else {
        pcWinsCounter ++;
        document.getElementById("pcWins").innerHTML = pcWinsCounter;
    }
}