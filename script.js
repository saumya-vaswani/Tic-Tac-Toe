let btn = document.querySelectorAll(".cell");
let winner = document.createElement("h2");
winner.style.color = "#a2d2ff";
let turn0 = true;


const winningAreas = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];
let count = 0;
btn.forEach((box) => {
    
    box.addEventListener("click", () => {
        count++;
        if (turn0 == true) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        console.log(count);
        box.disabled = true; //to not change the input enter
        if (count >= 9) {
            winner.innerText = "Match Tie."
        }
        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of btn) {
        box.disabled = true;
        winner.classList.remove("hide");
    }
}


const checkWinner = () => {
    for (let pattern of winningAreas) {
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                disableBoxes();
                if (pos1 == "0") {
                    winner.innerText = "Player 0 is winner.";
                }
                else {
                    winner.innerText = "Player X is winner.";
                }
            }
        }
    }
}
winner.classList.remove("hide");
let game = document.querySelector(".game");
game.after(winner);

//for reset
const enableBoxes = () => {
    for (let box of btn) {
        box.disabled = false;
        box.innerText = " ";
        winner.classList.add("hide");
        count = 0;
    }
}
const resetgame = () => {
    turn0 = true;
    enableBoxes();
    
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetgame);

