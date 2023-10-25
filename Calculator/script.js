let result = document.getElementById('result');
let num1 = 0;
let num2 = 0;
let operator = '';
let text = '';

document.addEventListener ('keypress', (event) => {

    let keyPress = event.key;
    let numberList = '1234567890';
    let operatorList = '-+*/.';
    
    if (keyPress === '=' || keyPress === 'Enter') calculate();
    if (keyPress.toLocaleLowerCase() === 'c' ) clearResult();

    if (numberList.includes(keyPress)){
        this.addNumber(keyPress);
    }
    if (operatorList.includes(keyPress)){
        this.addOperator(keyPress);
    }
});

function addNumber(number) {
    if (operator === '') {
        num1 = parseFloat(num1.toString() + number);
        result.value = num1;
    } else {
        num2 = parseFloat(num2.toString() + number);
        result.value = num2;
    }
}

function addOperator(op) {
    operator = op;
    result.value = '';
}

function clearResult() {
    num1 = 0;
    num2 = 0;
    operator = '';
    result.value = '';
}

function calculate() {
    let total = 0;
    switch (operator) {
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '/':
            total = num1 / num2;
    }
    result.value = total;

}
