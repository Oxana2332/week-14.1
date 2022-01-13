function calcSum(){
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let sum = Number(a) + Number(b);
    document.getElementById('result').textContent = sum;
    return sum;
}

function calcMinus(){
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let minus = a - b;
    document.getElementById('result').textContent = minus;
    return minus;
}

function calcMulti(){
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let multi = a * b;
    document.getElementById('result').textContent = multi;
    return multi;
}

function calcDivide(){
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let divide = a / b;
    document.getElementById('result').textContent = divide;
    return divide;
}