let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=> {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was draw! Play Again!";
    msg.style.backgroundColor = "yellow"
}    

const showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `you win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `you lost! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "Red"
    }
}

const playGame = (userchoice)=>{
    const compChoice = genCompChoice();

    if(userchoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }else if (userchoice === "paper"){
           userWin = compChoice === "scissors" ? false : true;
        }else {
          userWin =  compChoice === "rock" ? flase : true;
        }
        showWinner(userWin, userchoice, compChoice); 
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("Id");
        playGame(userchoice);
    });
});