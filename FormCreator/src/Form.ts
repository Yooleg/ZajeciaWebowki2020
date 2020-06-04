import {Field} from "./interface_Field";

export class Form{
    fields: Field[];
    formElement: HTMLElement; 
    
    
    constructor(id: string){
        this.fields = [];
        this.formElement = document.getElementById(id);
        
    }
    
    render(): void{
        //console.log(this.fields);
       this.fields.forEach(Element =>{
            console.log(Element);
            let label = document.createElement("label");
            label.innerHTML = Element.label;
            this.formElement.appendChild(label);
            this.formElement.appendChild(Element.render());
            this.formElement.appendChild(document.createElement("br"));
            
        })

    }
    
    addNewField(field: Field){
        this.fields.push(field)
    }
    
    getValue(): void{
        
    }

}