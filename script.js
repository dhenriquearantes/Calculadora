let valueTemp = "";
let state = 1;
let valueOne = "";
let valueTwo = "";
let operators = "";
let tempOperator = "";
let visor = document.getElementById('display');
let lockVisor = false;
let lockEquals = false;
let result = 0;

function inputNum(num) {

  if(valueTemp.length <= 8){

    if (num === "." && valueTemp === "" ) {
      valueTemp = "0."
    } else {
      valueTemp += num;
    }
    
    lockVisor = false;
  
    visorUpdate(0, valueTemp);
  }
}

function operator(value) {
  if (state === 1 && valueTemp > 0) {
    operators = value;
    tempOperator = value;
    valueOne = valueTemp;
    state = 2;
    valueTemp = "";
    visorUpdate(0, valueOne);
    visorUpdate(1, valueOne);
  }

  if (value === "=" && state === 2 && valueTemp !== "") {
    equals();
    lockVisor = true;
    
  }

  if (value !== "=" && state === 2 && valueTemp > 0) {
    console.log(operators)
    switch (operators) {
      case "+":
        sum();
        break;
      case "-":
        subtract();
        break;
      case "*":
        multiply();
        break;
      case "/":
        division();
        break;
      default:
        break;
    }
    operators = value;
    tempOperator = operators;
    valueTemp = "";
  }
}

function sum() {
  valueTwo = valueTemp;
  result = Number(valueOne) + Number(valueTwo);
  // visorUpdate(0, result);
  visorUpdate(1, result);
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
  operators = "";
}

function subtract() {
  valueTwo = valueTemp;
  result = Number(valueOne) - Number(valueTwo);
  visorUpdate(0, result);
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
  operators = "";
}

function multiply() {
  valueTwo = valueTemp;
  result = Number(valueOne) * Number(valueTwo);
  visorUpdate(0, result);
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
  operators = "";
}

function division() {
  valueTwo = valueTemp;
  result = Number(valueOne) / Number(valueTwo);
  visorUpdate(0, result);
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
  operators = "";
}

function percentage() {
  valueTwo = valueTemp
  if (state === 1) {
    result = valueTwo / 100;
    visor.value = formatNumber(result);
  } else if (state === 2) {

    const percent = (Number(valueOne) * Number(valueTwo)) / 100;

    if (operators === "+") {
      result = Number(valueOne) + percent;
      visor.value = formatNumber(result);
      valueOne = result
      valueTemp = ""
      console.log(operators);
      

    }

    if (operators === "-") {
      result = Number(valueOne) - percent;
      visor.value = formatNumber(result);

    }

    if (operators === "*") {
      result = Number(valueOne) * percent;
      visor.value = formatNumber(result);

    }
    if (operators === "/") {
      result = Number(valueOne) / percent;
      visor.value = formatNumber(result);

    }
  }

  visorUpdate(0, result);
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
}

function equals() {
  valueTwo = valueTemp;
  if (lockEquals == false) {
    console.log(valueTemp);
    switch (operators) {
      case "+":
        result = Number(valueOne) + Number(valueTwo);
        break;
      case "-":
        result = Number(valueOne) - Number(valueTwo);
        break;
      case "*":
        result = Number(valueOne) * Number(valueTwo);
        break;
      case "/":
        result = Number(valueOne) / Number(valueTwo);
        break;          
      default:
        return;
  } 
  lockEquals = true;
} 
  if (lockEquals == true) {
    switch (tempOperator) {
      case "+":
        result = Number(valueOne) + Number(valueTwo);
        break;
      case "-":
        result = Number(valueOne) - Number(valueTwo);
        break;
      case "*":
        result = Number(valueOne) * Number(valueTwo);
        break;
      case "/":
        result = Number(valueOne) / Number(valueTwo);
        break;  
      default:
        return;
  }
  }

  visor.value = "";
  visor.placeholder = formatNumber(result);
  valueOne = result;
  operators = "";
  lockVisor = true;
  valueTemp = result
}

function erase() {
  valueTemp = "";
  state = 1;
  valueOne = "";
  valueTwo = "";
  operators = "";
  visorUpdate(0, "0");
}

function del() {
  if (lockVisor === false) {
    valueTemp = valueTemp.slice(0, -1);
    visorUpdate(0, valueTemp);
  }
}

function visorUpdate(option, update) {
  if (update.length <= 9) {
    if (option === 0) {
      visor.value = formatNumber(update);
    } else {
      visor.placeholder = formatNumber(update);
    }
  }
}

function formatNumber(number) {
  return Number(number).toLocaleString("pt-BR");
}
