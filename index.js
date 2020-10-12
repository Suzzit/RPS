let buttons = document.querySelectorAll(".signs button");

let selections = ["rock", "paper", "scissor"];
const SELECTIONS = {
    rock:{
        name: "rock",
        winsAgainst: "scissor",
        emoji: "✊"
    },
    paper:{
        name: "paper",
        winsAgainst: "rock",
        emoji: "🤲"
    },
    scissor:{
        name: "scissor",
        winsAgainst: "paper",
        emoji: "✌️"
    }
}

buttons.forEach((buttons)=>{
buttons.addEventListener("click", function(e){
    yourSelection(e);
})
})

function yourSelection(e){
    let iSelected = SELECTIONS[e.target.value];
    let playerSelectedEmoji = document.querySelector("#playerSelectedEmoji");
    playerSelectedEmoji.innerText = iSelected.emoji;
    setTimeout(() => {
        playerSelectedEmoji.innerText = "";
    }, 1000);
    computerSelection(iSelected);
}

function computerSelection(playerSelection){
    let playerSelected = playerSelection;
    let randomNumber = Math.floor(Math.random()*3);
    let computerSelected = SELECTIONS[selections[randomNumber]];
    let computerSelectedEmoji = document.querySelector("#computerSelectedEmoji");
    computerSelectedEmoji.innerText = computerSelected.emoji;
    setTimeout(() => {
        computerSelectedEmoji.innerText = "";
    }, 1000);
    winnerAnnouncement(playerSelected, computerSelected);
}

function winnerAnnouncement(playerSelected, computerSelected){
if(playerSelected.winsAgainst === computerSelected.name){
    document.querySelector(".winner .container h1").innerText = "You won";
}else if (playerSelected.name === computerSelected.name){
    document.querySelector(".winner .container h1").innerText = "Draw";
}else{
    document.querySelector(".winner .container h1").innerText = "Computer won";
}
setTimeout(() => {
    document.querySelector(".winner .container h1").innerText = "";
}, 1000);
}

