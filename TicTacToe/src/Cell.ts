export class Cell {
    cellValue: number;
    htmlElement: HTMLElement;

    constructor(cell: HTMLElement) {
        this.htmlElement = cell;
        this.cellValue= 0;
    }

    setCellValue(value: number) {

        if (this.cellValue == 0) {
            this.cellValue = value;
            if (value == 1) {
                this.htmlElement.innerHTML = "X";
            } else if (value == -1) {
                this.htmlElement.innerHTML = "O";
            }
        }
        else window.alert("Space is taken")
    }
}