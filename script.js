const display = document.querySelector("#display");
const equals = document.querySelector(".equals");
const clear = document.getElementsByClassName("clear operator");




function add(num1, num2) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let sum = number1 + number2;
    
    display.innerHTML = `${sum}`;

};

function subtract(num1, num2) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let difference = number1 - number2;
    display.innerHTML = `${difference}`;
}
    

function multiply(num1, num2) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let product = number1 * number2;
    
    display.innerHTML = `${product}`;
};

function divide(num1, num2) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    if (number2 === 0) {
        display.innerHTML = `You are an idiot lol`;
        
    }
    else {
        let answer = number1 / number2;
        display.innerHTML =`${answer.toFixed(5)}`;
    };
    
};

function moveToDisplay(button) {
    let num = button.value
    display.innerHTML += num;
    
};


function operate(content) {
    splitContent = content.split(" ");
    if (splitContent.includes("+")) {
        add(splitContent[0], splitContent[2]);
    }
    else if (splitContent.includes("-")) {
        subtract(splitContent[0], splitContent[2]);
    }
    else if (splitContent.includes("/")) {
        divide(splitContent[0], splitContent[2]);
    }
    else if (splitContent.includes("X")) {
        multiply(splitContent[0], splitContent[2]);
    }
    
    
}

function clearDisplay() {
    display.innerHTML = "";
};


