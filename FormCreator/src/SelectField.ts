import {Field} from "./interface_Field";
import {FieldType} from "./FieldType";

export class SelectField implements Field{
    name: string;
    label: string;
    id: string;
    type: FieldType;
    element: HTMLSelectElement;
    constructor(name: string, label: string ,id: string) {
        this.element= document.createElement("select");
        //document.createElement("option");
        /*options.forEach(option =>{
            let element = document.createElement("option");
            element.value = option;
            element.innerHTML = option;
            this.element.appendChild(element);
        });*/


        this.fetchOptions<{name: string}>("https://restcountries.eu/rest/v2/all").then((data) =>
        {
            data.map(x=>x.name).forEach(element => {
                let option = <HTMLOptionElement>document.createElement("option");
                option.text = element;
                option.value = element;
                this.element.options.add(option);
            })
        })
        
        /*let option = document.createElement("option");
        option.value = "A";
        option.innerHTML = "A";*/
        this.name = name;
        this.label = label;
        this.id= id;
        this.element.id = id;
        
        //this.element.appendChild(option);
        
        this.element.name = this.name;
        //this.element.type = 'select';
    }
    fetchOptions<T>(url: string): Promise<T[]> {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch((e) => {
                console.log("API errore fetching ");
            });
    }
    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }
}