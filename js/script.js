const formButton = document.querySelector("form Button");

formButton.addEventListener("click", event =>{
    event.preventDefault();
   
    const inputEl = document.querySelector(".inputPlayerName");
    //hämtar input värdet
    const inputText = inputEl.value;
    const playerName = document.querySelector(".playerName");
    
    //visar det namn användaren skriver in
    playerName.textContent = `${inputText} chose: `;
    playerName.append(playerText);

    //Tar bort formuläret så användaren inte kan skriva in namn igen
    const removeForm = document.querySelector("#form");
    removeForm.remove();
});

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerButtonsChoice = document.querySelectorAll(".buttonChoice");
let player;
let computer;
let result;

//hämtar span taggarna med spelaren & datorn namn och sätter de till 0
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
playerScore.innerText = 0;
computerScore.innerText = 0;


playerButtonsChoice.forEach(button => button.addEventListener("click", () => {
    //få fram texten på knappen användaren trycker på (Rock, Paper, Scissors)
    player = button.textContent;
    playerText.innerText = `${player}`;
    //funktion för datorns val
    computersChoice();
    //få fram texten på knappen datorns random val (Rock, Paper, Scissors)
    computerText.innerText = `Computer chose: ${computer}`;
    resultText.innerText = `Winner: ${checkResult()}`;
}));
//datorns val
function computersChoice() {
    //random nummer 1-3
    const randomNumber = Math.floor(Math.random() *playerButtonsChoice.length) +1;
    // console.log(randomNumber);

    if(randomNumber === 1){
        computer = "Rock";
    }
    else if(randomNumber === 2) {
        computer = "Paper";
    }
    else if(randomNumber === 3) {
        computer = "Scissors";
    }
} 
//kolla vinnaren
function checkResult(){
    if(player === computer){
        result = "It's a draw";
        //uppdaterar result
        return result;
    }
    //Spelaren vinner
    if(player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper"){
        result = "You won this round!"
        playerScore.textContent++;
        
        if(parseInt(playerScore.textContent) === 3){
            //Tar bort rock, paper, scissor knappar när 3 poäng uppnås
            removeButtons();

            //Vinnartext
            const winner = document.createElement("h1");
            //lägger till klass för vinnartext
            winner.setAttribute("class", "winnerTextPlayer");
            winner.textContent = "🥳 Wohoo, you won the game! 🎉";
            document.body.append(winner);
        }
        return result;
    }
    //Datorn vinner
    if(computer === "Rock" && player === "Paper" || computer === "Paper" && player === "Rock" || computer === "Scissors" && player === "Paper");{
        result = "You lost this round";
        //+1 dator poäng
        computerScore.textContent++;

        if(parseInt(computerScore.textContent) == 3){
            //Tar bort rock, paper, scissor knappar när 3 poäng uppnås
            removeButtons();

            const winner = document.createElement("h1");
            //lägger till class för vinnartext
            winner.setAttribute("class", "winnerTextComputer");
            winner.textContent = "🤦‍♀️ The computer won the game!🤷‍♀️";
            document.body.append(winner);

        }
        return result;
    }
}
//tar bort alternativ knapparna
function removeButtons() {
    const btns = document.querySelectorAll(".buttonChoice");
    btns.forEach(button => button.remove());
}

const playAgain = document.querySelector("#playAgain");
//starta om spelet
playAgain.addEventListener("click", function(){
    window.location.reload();
});
