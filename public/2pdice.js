// Create variables to fix slowdown bug.
let score = 0;
let score2 = 0;
// Connecting all of the HTML elements needed and storing them in variables
const resetGameBtn = document.getElementById('resetGameBtn');
const rollDiceBtn = document.getElementById('rollDiceBtn');
const rollDice2Btn = document.getElementById('rollDiceBtn2');
const holdBtn = document.getElementById('holdBtn');
const holdBtn2 = document.getElementById('holdBtn2');
//
let diceImageBox = document.getElementById('diceImageBox');
const scoreBox = document.getElementById('scoreBox');
const winBox = document.getElementById('winBox');
// Add click event on the "Roll Dice" button that runs the rollDice function
rollDiceBtn.addEventListener('click', rollDice)
rollDiceBtn2.addEventListener('click', rollDice2)
resetGameBtn.addEventListener('click', resetGame)
holdBtn.addEventListener('click', switchPlayer)
holdBtn2.addEventListener('click', switchPlayer2)

let rollsound = new Audio("roll2.wav"); 

// ------------------------------- Player 1 Dice roll
// Roll Dice [Player 1] [function]
function rollDice() {
    // play sound
    rollsound.pause();
    rollsound.currentTime = 0;
    rollsound.play();
    // rollDiceBtn.style.visibility = "visible"; 
    createDiceImage(); 
    // createDiceImage(); further down in the function to make sure the above code runs faster.
// no, further down doesn't make a difference.
    // let dice1 = document.getElementById("dice1");
    let status = document.getElementById("status2");
    let d1 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = d1;
    (d1 === 1) ? score = 0 : score += d1; 

    if(d1 === 1){
        document.getElementById("diceImageBox").src="01.png";
    } else if(d1 === 2){
        document.getElementById("diceImageBox").src="02.png";
    } else if(d1 === 3){
        document.getElementById("diceImageBox").src="03.png";
    } else if(d1 === 4){
        document.getElementById("diceImageBox").src="04.png";
    } else if(d1 === 5){
        document.getElementById("diceImageBox").src="05.png";
    } else if(d1 === 6){
        document.getElementById("diceImageBox").src="06.png";
    }

    // dice1.innerHTML = d1;
    status.innerHTML = "You rolled "+diceTotal+".";
        if(d1 == 1) {
            status.innerHTML += "<br />You rolled a 1, it is now Player 2's turn in 1 second";
            rollDiceBtn.style.visibility = "hidden";
            holdBtn.style.visibility = "hidden";
            score = 0; // reset score to 0
            d1 = 0; // reset dice to 0  
            dice1.textContent = "";
            setTimeout(switchPlayer, 1000);
        }
    // Set score to zero if 1 is rolled otherwise increment the score

    // Fill HTML element with the value of the score variable.
    scoreBox.textContent = "Current: "+score+""
                
    // Condition for winning game
    if(score >= 20) {
        winBox.textContent = "You win!! with a score of "+score+". Press the 'New Game' button";
        winGame();
    }

    }


    // ------------------------------- Player 2 Dice roll
// Roll Dice [Player 2] [function]
function rollDice2() {
    // play sound
    rollsound.pause();
    rollsound.currentTime = 0;
    rollsound.play();
    // rollDiceBtn.style.visibility = "visible"; 
    createDiceImage(); 
    // createDiceImage(); further down in the function to make sure the above code runs faster.
// no, further down doesn't make a difference.
    // let dice1 = document.getElementById("dice1");
    let status = document.getElementById("statusp2"); //
    let d2 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = d2;
    (d2 === 1) ? score2 = 0 : score2 += d2; 

    if(d2 === 1){
        document.getElementById("diceImageBox").src="01.png";
    } else if(d2 === 2){
        document.getElementById("diceImageBox").src="02.png";
    } else if(d2 === 3){
        document.getElementById("diceImageBox").src="03.png";
    } else if(d2 === 4){
        document.getElementById("diceImageBox").src="04.png";
    } else if(d2 === 5){
        document.getElementById("diceImageBox").src="05.png";
    } else if(d2 === 6){
        document.getElementById("diceImageBox").src="06.png";
    }

    // dice1.innerHTML = d1;
    status.innerHTML = "You rolled "+diceTotal+".";
        if(d2 == 1) {
            status.innerHTML += "<br />You rolled a 1, it is now Player 1's turn in 1 second.";
            rollDiceBtn2.style.visibility = "hidden";
            holdBtn.style.visibility = "hidden";
            score2 = 0; // reset score to 0
            d2 = 0; // reset dice to 0  
            scoreBox2.textContent = "Current: ";
            winBox2.textContent = "";
            // dice1.textContent = "";
            // statusp2.textContent = "";
                setTimeout(switchPlayer2, 1000);
                    }
    // Set score to zero if 1 is rolled otherwise increment the score

    // Fill HTML element with the value of the score variable.
    scoreBox2.textContent = "Current: "+score2+""
                
    // Condition for winning game
    if(score2 >= 20) {
        winBox2.textContent = "You win!! with a score of "+score2+". Press the 'New Game' button";
        winGame();
    }

    }

// Create Dice Image when the Roll Dice Button is clicked [function]

function createDiceImage() {
    let diceImage = document.createElement('img');
    diceImage.setAttribute('src', 'dice.png');
    diceImage.setAttribute('height', 100); 
    diceImage.setAttribute('width', 100); 
    diceImage.setAttribute('id', 'diceImageBox'); 
    diceImageBox.replaceWith(diceImage);
    diceImageBox = document.getElementById('diceImageBox'); 
    // this line is REQUIRED
// paragraph tag is gone, replaced with an IMG tag.
    }

// Reset Game [function]
function resetGame() {
    document.getElementById("diceImageBox").style.visibility = "hidden"; 
    rollDiceBtn.style.visibility = "visible";
    holdBtn.style.visibility = "visible";
    rollDiceBtn2.style.visibility = "hidden";
    holdBtn2.style.visibility = "hidden";

    // above line is REQUIRED to set/read the ID of the dynamically created IMG element.
    scoreBox.textContent = "Current:";
    scoreBox2.textContent = "Current:";
    winBox.textContent = "";
    winBox2.textContent = "";
    dice1.textContent = "";
    status2.textContent = "";
    statusp2.textContent = "";
    score = 0; // reset score to 0
    d1 = 0; // reset dice to 0
}

function switchPlayer() { // Switch to player 2
console.log("Switch to player 2");
holdBtn.style.visibility = "hidden";
rollDiceBtn.style.visibility = "hidden";
holdBtn2.style.visibility = "visible";
rollDiceBtn2.style.visibility = "visible";
// scoreBox.textContent = "Current:";
winBox.textContent = "";
status2.textContent = "It is now Player 2's turn.";
statusp2.textContent = "";
}

function switchPlayer2() { // Switches back to Player 1
    console.log("Switch to player 1");
    statusp2.innerHTML += "It is now Player 1's turn.";
    holdBtn.style.visibility = "visible";
    rollDiceBtn.style.visibility = "visible";
    holdBtn2.style.visibility = "hidden";
    rollDiceBtn2.style.visibility = "hidden";
    // scoreBox2.textContent = "Current:"; 
    // these 3 lines empty the the score
    // winBox2.textContent = "";
    statusp2.textContent = "It is now Player 1's turn.";
    status2.textContent = "";

    }

    function switchPlayerIfRollOne () {
        // need a seperate function if rolling one I think.
        // No. Just need to reset score and fill the boxes with text, not blank.
        console.log("hello")
        }
        

function winGame () {
    rollDiceBtn.style.visibility = "hidden"; 
    holdBtn.style.visibility = "hidden";
    rollDiceBtn2.style.visibility = "hidden"; 
    holdBtn2.style.visibility = "hidden";
    score = 0;
    d1 = 0;
    score2 = 0;
    d2 = 0;
}

// When the JS file loads in run these lines automatically before the user starts to interact with the game.
resetGame();
rollDiceBtn.style.visibility = "hidden";
rollDiceBtn2.style.visibility = "hidden";
holdBtn.style.visibility = "hidden";
holdBtn2.style.visibility = "hidden";
// rollDiceBtn.style.visibility = "visible";
// rollDiceBtn2.style.visibility = "visible";
// holdBtn.style.visibility = "visible";
// holdBtn2.style.visibility = "visible";





// Programmatically change the src of an img tag
// document.getElementById("imageid").src="../template/save.png";

// enhancements changelog: 
// Win & loss game functions [hide] the Roll & Hold buttons so that the score etc. can't increment anymore when the game has ended.
// Roll & Hold buttons don't appear until the user presses new game.


// hold button will execute function to hide player 1 buttons and show player 2 buttons (roll)
// player 2 buttons will execute an extra rolldice function that will send data to player 2 html elements.

// Enhance my 1 player game with this feature as well. will only take 5 mins.