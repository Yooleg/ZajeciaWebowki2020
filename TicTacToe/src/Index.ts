


import {Board} from "./Board";

let reset_bt = <HTMLDivElement>document.getElementById("reset");
reset_bt.addEventListener("click", function(){

    document.getElementById("tictactoe").innerHTML="";
    Game = new Board(3)
})

let Game = new Board(3);
