import {Field} from "./interface_Field";
import {FieldType} from "./FieldType";

export class TextAreaField implements Field{
    name: string;
    label: string;
    id: string;
    type: FieldType;
    element: HTMLTextAreaElement;
    constructor(name: string, label: string,id: string) {
        this.element = <HTMLTextAreaElement>document.createElement('textarea');
        this.name = name;
        this.id= id;
        this.element.id = id;
        this.label = label;
        this.element.name = this.name;
        //this.element.type = 'textarea';
    }
    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }
}
