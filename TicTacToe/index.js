var Cell = /** @class */ (function () {
    function Cell(cell) {
        this.htmlElement = cell;
        this.cellValue = 0;
    }
    Cell.prototype.setCellValue = function (value) {
        if (this.cellValue == 0) {
            this.cellValue = value;
            if (value == 1) {
                this.htmlElement.innerHTML = "X";
            }
            else if (value == -1) {
                this.htmlElement.innerHTML = "O";
            }
        }
        else
            window.alert("Space is taken");
    };
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board(size) {
        var _this = this;
        this.winState = false;
        this.currentSymbol = 1;
        this.cells = new Array(size);
        var table = document.getElementById("tictactoe");
        var i = 0;
        console.log(table);
        for (var r = 0; r < size; r++) {
            var row = table.insertRow(r);
            var _loop_1 = function (c) {
                var cell = row.insertCell(c);
                cell.className = 'cell';
                var newCell = new Cell(cell);
                this_1.cells[i] = newCell;
                cell.addEventListener("click", function () { return _this.makeMove(newCell); }, false);
                i++;
            };
            var this_1 = this;
            for (var c = 0; c < size; c++) {
                _loop_1(c);
            }
        }
    }
    Board.prototype.makeMove = function (cell) {
        cell.setCellValue(this.currentSymbol);
        this.checkWin();
        //console.log(cell.cellValue);
        this.currentSymbol *= -1;
        if (this.currentSymbol == 1 && this.winState == false) {
            window.alert("Player X turn");
        }
        else if (this.currentSymbol == -1 && this.winState == false) {
            window.alert("Player O turn");
        }
    };
    Board.prototype.checkWin = function () {
        console.log(this.cells[0].cellValue, this.cells[1].cellValue, this.cells[2].cellValue); /*1st hor*/
        console.log(this.cells[3].cellValue, this.cells[4].cellValue, this.cells[5].cellValue); /*2nd hor*/
        console.log(this.cells[6].cellValue, this.cells[7].cellValue, this.cells[8].cellValue); /*3rd hor*/
        console.log("---------");
        if (this.cells[0].cellValue != 0 && this.cells[1].cellValue != 0 && this.cells[2].cellValue != 0
            || this.cells[3].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[5].cellValue != 0
            || this.cells[6].cellValue != 0 && this.cells[7].cellValue != 0 && this.cells[8].cellValue != 0
            || this.cells[0].cellValue != 0 && this.cells[3].cellValue != 0 && this.cells[6].cellValue != 0
            || this.cells[1].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[7].cellValue != 0
            || this.cells[2].cellValue != 0 && this.cells[5].cellValue != 0 && this.cells[8].cellValue != 0
            || this.cells[0].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[8].cellValue != 0
            || this.cells[2].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[6].cellValue != 0) {
            this.Win();
        }
    };
    Board.prototype.Win = function () {
        if (this.cells[0].cellValue == -1 && this.cells[1].cellValue == -1 && this.cells[2].cellValue == -1
            || this.cells[3].cellValue == -1 && this.cells[4].cellValue == -1 && this.cells[5].cellValue == -1
            || this.cells[6].cellValue == -1 && this.cells[7].cellValue == -1 && this.cells[8].cellValue == -1
            || this.cells[0].cellValue == -1 && this.cells[3].cellValue == -1 && this.cells[6].cellValue == -1
            || this.cells[1].cellValue == -1 && this.cells[4].cellValue == -1 && this.cells[7].cellValue == -1
            || this.cells[2].cellValue == -1 && this.cells[5].cellValue == -1 && this.cells[8].cellValue == -1
            || this.cells[0].cellValue == -1 && this.cells[4].cellValue == -1 && this.cells[8].cellValue == -1
            || this.cells[2].cellValue == -1 && this.cells[4].cellValue == -1 && this.cells[6].cellValue == -1) {
            window.alert("The O Wins");
            this.winState = true;
        }
        else if (this.cells[0].cellValue == 1 && this.cells[1].cellValue == 1 && this.cells[2].cellValue == 1
            || this.cells[3].cellValue == 1 && this.cells[4].cellValue == 1 && this.cells[5].cellValue == 1
            || this.cells[6].cellValue == 1 && this.cells[7].cellValue == 1 && this.cells[8].cellValue == 1
            || this.cells[0].cellValue == 1 && this.cells[3].cellValue == 1 && this.cells[6].cellValue == 1
            || this.cells[1].cellValue == 1 && this.cells[4].cellValue == 1 && this.cells[7].cellValue == 1
            || this.cells[2].cellValue == 1 && this.cells[5].cellValue == 1 && this.cells[8].cellValue == 1
            || this.cells[0].cellValue == 1 && this.cells[4].cellValue == 1 && this.cells[8].cellValue == 1
            || this.cells[2].cellValue == 1 && this.cells[4].cellValue == 1 && this.cells[6].cellValue == 1) {
            window.alert("The X Wins");
            this.winState = true;
        }
        else if (this.cells[0].cellValue != 0 && this.cells[1].cellValue != 0 && this.cells[2].cellValue != 0
            && this.cells[3].cellValue != 0 && this.cells[4].cellValue != 0 && this.cells[5].cellValue != 0
            && this.cells[6].cellValue != 0 && this.cells[7].cellValue != 0 && this.cells[8].cellValue != 0) {
            window.alert("Draw");
            this.winState = true;
        }
    };
    return Board;
}());
var reset_bt = document.getElementById("reset");
reset_bt.addEventListener("click", function () {
    document.getElementById("tictactoe").innerHTML = "";
    Game = new Board(3);
});
var Game = new Board(3);
