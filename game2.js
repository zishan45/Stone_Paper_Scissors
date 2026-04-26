let userScore = 0;
let computerScore = 0;

const msg = document.querySelector(".msg-container");
let uScore = document.querySelector("#user-win-score");
let cScore = document.querySelector("#computer-win-score");

const choices = document.querySelectorAll(".choice");

choices.forEach ((choice) => {
       choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            console.log("User Choice is:", userChoice);
            playGame(userChoice);
       });
});

const playGame = ((userChoice) => {
    // now generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice is:", compChoice);

    if (userChoice === compChoice){
        //Game was Draw!
        drawGame();
    }

    else {
         let userWin = true;
            if (userChoice === "stone"){
                // computer options paper or scissor
                userWin = compChoice === "paper" ? false : true;
            }
            else if (userChoice === "paper") {
                // computer options stone or scissor
                 userWin = compChoice === "scissors" ? false : true;
            }
            else {
                // computer options stone or paper
                userWin = compChoice === "stone" ? false : true;
            };
            showWinner(userWin, userChoice, compChoice);
    };
});

const showWinner = (userWin, userChoice, compChoice) => {
      if (userWin === true){
        console.log("YOU WON!");
        msg.innerText = `YOU WON! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++ ;
        uScore.innerText = userScore ;
      }
      else {
        console.log("YOU LOST!");
        msg.innerText = `YOU L0ST! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerScore++ ;
        cScore.innerText = computerScore ;
      };
};

const genCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    let randomIdx= Math.floor(Math.random () * 3);
    return options[randomIdx];
};
 
const drawGame = () => {
    console.log("Game Was Draw!");
    msg.innerText = "GAME WAS DRAW!";
    msg.style.backgroundColor = "gray";
};


