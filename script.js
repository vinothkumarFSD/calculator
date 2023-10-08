var container = document.createElement("div");
container.setAttribute("class", "container");
var output = document.createElement("div");
output.setAttribute("class", "output");


function outputele(tagname, attrname, attrvalue, attrname1, attrvalue1) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    return ele;
}

var out = outputele("input", "type", "text", "id", "output")
var btn = document.createElement("div");
btn.setAttribute("class", "btn");

function inputele(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2, attrname3, attrvalue3) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    ele.setAttribute(attrname2, attrvalue2);
    ele.setAttribute(attrname3, attrvalue3);
    return ele;
}

function enter(input) {
    document.getElementById('output').value += input;
}

function onclick() {
    console.log("enter(this.value)")
}

function clean() {
    document.getElementById('output').value = "";
}

function calculate() {
    var output = document.getElementById('output').value;
    var res = eval(output);
    document.getElementById('output').value = res;
}

var row1 = document.createElement("div");
row1.setAttribute("class", "row1");
var button1 = inputele("input", "type", "button", "name", "seven", "value", "7", "onclick", "enter(this.value)");
var button2 = inputele("input", "type", "button", "name", "eight", "value", "8", "onclick", "enter(this.value)");
var button3 = inputele("input", "type", "button", "name", "nine", "value", "9", "onclick", "enter(this.value)");
var button4 = inputele("input", "type", "button", "name", "div", "value", "/", "onclick", "enter(this.value)");

row1.append(button1, button2, button3, button4);

var row2 = document.createElement("div");
row2.setAttribute("class", "row2");
var button1 = inputele("input", "type", "button", "name", "four", "value", "4", "onclick", "enter(this.value)");
var button2 = inputele("input", "type", "button", "name", "five", "value", "5", "onclick", "enter(this.value)");
var button3 = inputele("input", "type", "button", "name", "six", "value", "6", "onclick", "enter(this.value)");
var button4 = inputele("input", "type", "button", "name", "multiply", "value", "*", "onclick", "enter(this.value)");

row2.append(button1, button2, button3, button4);

var row3 = document.createElement("div");
row3.setAttribute("class", "row3");
var button1 = inputele("input", "type", "button", "name", "one", "value", "1", "onclick", "enter(this.value)");
var button2 = inputele("input", "type", "button", "name", "two", "value", "2", "onclick", "enter(this.value)");
var button3 = inputele("input", "type", "button", "name", "three", "value", "3", "onclick", "enter(this.value)");
var button4 = inputele("input", "type", "button", "name", "subtract", "value", "-", "onclick", "enter(this.value)");

row3.append(button1, button2, button3, button4);

var row4 = document.createElement("div");
row4.setAttribute("class", "row4");
var button1 = inputele("input", "type", "button", "name", "clear", "value", "C", "onclick", "clean()");
var button2 = inputele("input", "type", "button", "name", "zero", "value", "0", "onclick", "enter(this.value)");
var button3 = inputele("input", "type", "button", "name", "Equal", "value", "=", "onclick", "calculate()");
var button4 = inputele("input", "type", "button", "name", "add", "value", "+", "onclick", "enter(this.value)");

row4.append(button1, button2, button3, button4);

output.append(out);
btn.append(row1, row2, row3, row4);
container.append(output, btn);
document.body.append(container);

