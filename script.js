const equation = [];


function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function moveToDisplay(button) {
    let num = button.value;
    document.getElementById("display").innerHTML += num;
    equation.push(num);
};

function operate(num1, num2, operator) {

}


