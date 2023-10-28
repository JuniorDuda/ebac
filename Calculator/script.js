let history = document.getElementById('history');
let result = document.getElementById('result');
let operator = '';
let calculated = false;
let numberAllowed = '1234567890.';
let operatorAllowed = '-+*/';
let lastIsOperator = false;

document.addEventListener ('keypress', (event) => {

    let keyPress = event.key;
    
    if (keyPress === '=') calculate();
    if (keyPress.toLocaleLowerCase() === 'c' ) clearResult();
   
    if (numberAllowed.includes(keyPress) || operatorAllowed.includes(keyPress)){
        insert(keyPress);
    }
   
});


function back() {
    operator = '';
    result.value = result.value.substring(0, result.value.length -1);

    console.log(calculated);
    if (calculated == true) history.value = '';
}

function insert(num){

    if (calculated) {
        if (numberAllowed.includes(num)){
            history.value = '';
            result.value = '';
        }

        calculated = false;
    }

    if (operatorAllowed.includes(num)){
        if (operator != '') return false;
        if (result.value == '') return false;
        operator = num;
    }else{
        operator = '';
    }

    result.value += num;
}



function clearResult() {
    operator = '';    
    result.value = '';
    history.value = '';
    calculated = false;
}

function calculate() {
    
    if(result.value)
    {
        history.value = result.value + '=';
        result.value = eval(result.value);
        calculated = true;
    }
    else
    {
        return false;
    }    
}
