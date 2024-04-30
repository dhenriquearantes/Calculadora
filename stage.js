let valueTemp = "";
let state = 1;
let valueOne = "";
let valueTwo = "";
let operators = "";
let tempOperator = "";
let visor = document.getElementById('display');
let lockVisor = false;
let result = 0;

function inputNum(num) {
  lockVisor = false;
  valueTemp += num;

  visorUpdate(0, valueTemp);
}

function operator(value) {
  if (state === 1 && valueTemp > 0) {
    operators = value;
    valueOne = valueTemp;
    state = 2;
    valueTemp = "";
    visorUpdate(0, valueTemp);
    visorUpdate(1, valueTemp);
  }

  if (value === "=" && state === 2 && valueTemp !== "") {
    equals();
    lockVisor = true;
  }

  if (value !== "=" && state === 2 && valueTemp > 0) {
    tempOperator = value;
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
      case "%":
        porcentage();
        break;
      default:
        break;
    }
    operators = value;
    valueTemp = "";
  }
}

function sum() {
  valueTwo = valueTemp;
  result = Number(valueOne) + Number(valueTwo);
  visorUpdate(0, result);
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

function porcentage() {
  valueTwo = valueTemp;
  const percent = (Number(valueOne) * Number(valueTwo)) / 100;
  result = Number(valueOne) - percent;
  visorUpdate(0, result);
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
}

function equals() {
  valueTwo = valueTemp;
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

  visorUpdate(0, result);
  valueOne = result;
  operators = "";
  lockVisor = true;
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
  if (option === 0) {
    visor.value = formatNumber(update);
  } else {
    visor.placeholder = formatNumber(update);
  }
}

function formatNumber(number) {
  return Number(number).toLocaleString('en-US');
}