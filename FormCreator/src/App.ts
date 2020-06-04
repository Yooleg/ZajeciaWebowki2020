import {Form} from "./Form";
import {TextField} from "./TextField";
import {DateField} from "./DateField";
import {SelectField} from "./SelectField";
import {EmailField} from "./EmailField";
import {CheckBoxField} from "./CheckBoxField";
import {TextAreaField} from "./TextAreaField";

export class App{
    form:Form;
    constructor() {
        let x = document.getElementById('Form');
        this.form = new Form("Form");
        let text1 = new TextField("name","Name ", "name");
        let text2 = new TextField("surname","Surname ","surname");
        let date = new DateField("date","Date ","date");
        let email = new EmailField("email", "Email ","email");
        let select = new SelectField("select", "Select ","select");
        let checkbox = new CheckBoxField("checkbox", "Checkbox ","checkbox");
        let textarea = new TextAreaField("textarea", "Textarea ","textarea");
        
        //let submit = new 
        
        this.form.addNewField(text1);
        this.form.addNewField(text2);
        this.form.addNewField(date);
        this.form.addNewField(email);
        this.form.addNewField(select);
        this.form.addNewField(checkbox);
        this.form.addNewField(textarea);

        //localStorage.setItem('name', 'surname');

        let btn = document.getElementById("Submit");
        console.log(btn);
        //btn.addEventListener("click", (e:Event) => this.poopie())
        let T = this;
        btn.onclick = function () {
            T.SaveData();
        }
        
        
    }

    render(){
        this.form.render()
    }

    SaveData() {
        let name = (document.getElementById("name")as HTMLInputElement);
        let surname = (document.getElementById("surname")as HTMLInputElement);
        let date = (document.getElementById("date")as HTMLInputElement);
        let email = (document.getElementById("email")as HTMLInputElement);
        let select = (document.getElementById("select")as HTMLInputElement);
        let checkbox = (document.getElementById("checkbox")as HTMLInputElement);
        let textarea = (document.getElementById("textarea")as HTMLInputElement);
        let LocalStorage = {
            name: name.value,
            surname: surname.value,
            date: date.value,
            email: email.value,
            select: select.value,
            checkbox: checkbox.value,
            textarea: textarea.value,

        };
        
        /*console.log(name);
        console.log(surname);        
        console.log(date);        
        console.log(email);        
        console.log(select);        
        console.log(checkbox);        
        console.log(textarea);*/
        
        console.log(LocalStorage);
        localStorage.setItem('session', JSON.stringify(LocalStorage));
        
        let p = document.createElement("p");
        p.innerHTML = JSON.stringify(LocalStorage);
        document.body.appendChild(p);
        
        let pname = document.createElement("p");
        pname.innerHTML = "Name: "+ LocalStorage.name; 
        document.body.appendChild(pname);

        let psurname = document.createElement("p");
        psurname.innerHTML = "Surname: "+ LocalStorage.surname;
        document.body.appendChild(psurname);
        
        let pdate = document.createElement("p");
        pdate.innerHTML = "Date: "+ LocalStorage.date;
        document.body.appendChild(pdate);
        
        let pemail = document.createElement("p");
        pemail.innerHTML = "Email: "+ LocalStorage.email;
        document.body.appendChild(pemail);

        let pselect = document.createElement("p");
        pselect.innerHTML = "Select: "+ LocalStorage.select;
        document.body.appendChild(pselect);

        let pchckbox = document.createElement("p");
        pchckbox.innerHTML = "Checkbox: "+ LocalStorage.checkbox;
        document.body.appendChild(pchckbox);

        let ptextarea = document.createElement("p");
        ptextarea.innerHTML = "TextArea: "+ LocalStorage.textarea;
        document.body.appendChild(ptextarea);
        
        let tism = JSON.parse(JSON.stringify(LocalStorage));
        console.log(tism);
        
    }
}
