import {Cell} from "./Cell";


export class Board {
    winState: boolean = false;
    cells: Cell[];
    currentSymbol = 1;

    constructor(size: number) {
        this.cells = new Array(size);
        let table = <HTMLTableElement>document.getElementById("tictactoe");
        let i = 0;
        console.log(table);
        for (let r = 0; r < size; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = 'cell';
                const newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener("click", () => this.makeMove(newCell), false);
                i++;

            }
        }
    }

    makeMove(cell: Cell): void {
        cell.setCellValue(this.currentSymbol);
        this.checkWin();
        //console.log(cell.cellValue);
        this.currentSymbol *= -1;
        if(this.currentSymbol == 1 && this.winState == false){
            window.alert("Player X turn")
        }
        else if(this.currentSymbol == -1 && this.winState == false){
            window.alert("Player O turn")
        }
    }

    checkWin(){
        console.log(this.cells[0].cellValue,this.cells[1].cellValue,this.cells[2].cellValue);/*1st hor*/
        console.log(this.cells[3].cellValue,this.cells[4].cellValue,this.cells[5].cellValue);/*2nd hor*/
        console.log(this.cells[6].cellValue,this.cells[7].cellValue,this.cells[8].cellValue);/*3rd hor*/

        console.log("---------");

        if
        (this.cells[0].cellValue != 0 && this.cells[1].cellValue != 0 && this.cells[2].cellValue != 0
            ||this.cells[3].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[5].cellValue != 0
            ||this.cells[6].cellValue != 0 && this.cells[7].cellValue != 0 && this.cells[8].cellValue != 0
            ||this.cells[0].cellValue != 0 && this.cells[3].cellValue != 0 && this.cells[6].cellValue != 0
            ||this.cells[1].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[7].cellValue != 0
            ||this.cells[2].cellValue != 0 && this.cells[5].cellValue != 0 && this.cells[8].cellValue != 0
            ||this.cells[0].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[8].cellValue != 0
            ||this.cells[2].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[6].cellValue != 0)
        {
            this.Win();
        }

    }
    Win(){
        if
        (this.cells[0].cellValue == -1 && this.cells[1].cellValue == -1 && this.cells[2].cellValue == -1
            ||this.cells[3].cellValue == -1 && this.cells[4].cellValue == -1 && this.cells[5].cellValue == -1
            ||this.cells[6].cellValue == -1 && this.cells[7].cellValue == -1 && this.cells[8].cellValue == -1
            ||this.cells[0].cellValue == -1 && this.cells[3].cellValue == -1 && this.cells[6].cellValue == -1
            ||this.cells[1].cellValue == -1 && this.cells[4].cellValue == -1 && this.cells[7].cellValue == -1
            ||this.cells[2].cellValue == -1 && this.cells[5].cellValue == -1 && this.cells[8].cellValue == -1
            ||this.cells[0].cellValue == -1 && this.cells[4].cellValue == -1 && this.cells[8].cellValue == -1
            ||this.cells[2].cellValue == -1 && this.cells[4].cellValue == -1 && this.cells[6].cellValue == -1)
        {
            window.alert("The O Wins");
            this.winState = true;
        }
        else if
        (this.cells[0].cellValue == 1 && this.cells[1].cellValue == 1 && this.cells[2].cellValue == 1
            ||this.cells[3].cellValue == 1 && this.cells[4].cellValue == 1 && this.cells[5].cellValue == 1
            ||this.cells[6].cellValue == 1 && this.cells[7].cellValue == 1 && this.cells[8].cellValue == 1
            ||this.cells[0].cellValue == 1 && this.cells[3].cellValue == 1 && this.cells[6].cellValue == 1
            ||this.cells[1].cellValue == 1 && this.cells[4].cellValue == 1 && this.cells[7].cellValue == 1
            ||this.cells[2].cellValue == 1 && this.cells[5].cellValue == 1 && this.cells[8].cellValue == 1
            ||this.cells[0].cellValue == 1 && this.cells[4].cellValue == 1 && this.cells[8].cellValue == 1
            ||this.cells[2].cellValue == 1 && this.cells[4].cellValue == 1 && this.cells[6].cellValue == 1)
        {
            window.alert("The X Wins");
            this.winState = true;
        }
        else if(this.cells[0].cellValue != 0 && this.cells[1].cellValue != 0 && this.cells[2].cellValue != 0
            && this.cells[3].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[5].cellValue != 0
            && this.cells[6].cellValue != 0 && this.cells[7].cellValue != 0 && this.cells[8].cellValue != 0)
        {
            window.alert("Draw");
            this.winState = true;
        }
    }
}