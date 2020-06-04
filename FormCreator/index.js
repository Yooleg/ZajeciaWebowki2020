var FieldType;
(function (FieldType) {
    FieldType[FieldType["textBox"] = 1] = "textBox";
    FieldType[FieldType["date"] = 1] = "date";
    FieldType[FieldType["long"] = 1] = "long";
    FieldType[FieldType["checkbox"] = 1] = "checkbox";
})(FieldType || (FieldType = {}));
var InputFieldimplements = /** @class */ (function () {
    function InputFieldimplements() {
    }
    return InputFieldimplements;
}());
Field;
{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    constructor(name, string, label, string);
    {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    render();
    HTMLElement;
    {
        return this.element;
    }
    getValue();
    any;
    {
        return this.element.value;
    }
}
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () {
    };
    Form.prototype.getValue = function () {
    };
    return Form;
}());
