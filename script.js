const display = document.querySelector("#display");
const equals = document.querySelector(".equals");

function add(num1, num2) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let sum = number1 + number2;
    console.log(sum);
    display.innerHTML = `${sum}`;
    return sum;
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
    let num = button.value
    display.innerHTML += num;
    //let content = display.textContent;
    //console.log(content);
    
    //equals.addEventListener("click", operate(value))
    //let splitValue = value.split(" ");
    //operate(splitValue);
};


function operate(content) {
    splitContent = content.split(" ");
    if (splitContent.includes("+")) {
        add(splitContent[0], splitContent[2]);
    };
    console.log(splitContent);
}


