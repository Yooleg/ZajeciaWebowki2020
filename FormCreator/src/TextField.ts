import {Field} from "./interface_Field";
import {FieldType} from "./FieldType";

export class TextField implements Field {
    name: string;
    label: string;
    id: string;
    type: FieldType;
    element: HTMLInputElement;
    constructor(name: string, label: string, id: string) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.id= id;
        this.element.id = id;
        this.element.name = this.name;
        this.element.type = 'text';
    }
    render(): HTMLElement {
    return this.element;
    }
    getValue(): any {
        return this.element.value
    }
}