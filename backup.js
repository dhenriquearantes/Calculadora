let valueTemp = "";
let state = 1;
let valueOne = "";
let valueTwo = "";
let operators = "";
let tempOperator = "";
let visor = document.getElementById('display');
let lockVisor = false;
let lockInput = false
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

  if (value === "=" && state === 2) {
    equals();
    lockVisor = true;
  

  }

  if (value !== "=" && state === 2 && valueTemp > 0) {
    tempOperator = value
    operators = value;
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
      case "%":
        porcentage();        
        break;
      default:
        break;
    }

    valueTemp = "";
    
  }
  
}

function sum() {
  valueTwo = valueTemp;
  result = Number(valueOne) + Number(valueTwo); 
  visor.value = "";
  visor.placeholder = result;
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
  operators = "" 

}

function subtract() {
  valueTwo = valueTemp;
  result = Number(valueOne) - Number(valueTwo); 
  visor.value = "";
  visor.placeholder = result;
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
  operators = "" 

}

function multiply() {
  valueTwo = valueTemp;
  result = Number(valueOne) * Number(valueTwo); 
  visor.value = "";
  visor.placeholder = result;
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
  operators = "" 

}

function division() {
  valueTwo = valueTemp;
  result = Number(valueOne) / Number(valueTwo); 
  visor.value = "";
  visor.placeholder = result;
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
  operators = "" 

}

function porcentage() {
  valueTwo = valueTemp;
  result = (Number(valueOne) * Number(valueTwo)) / 100; 
  visor.value = "";
  visor.placeholder = result;
  valueOne = result;
  valueTwo = "";
  valueTemp = "";
}

function equals() {
  valueTwo = valueTemp
  if (operators === "+") {
    result = Number(valueOne) + Number(valueTwo); 
  } 
  if (operators === "-") {
    result = Number(valueOne) - Number(valueTwo); 
  } 
  if (operators === "*") {
    result = Number(valueOne) * Number(valueTwo); 
  } 
  if (operators === "/") {
    result = Number(valueOne) / Number(valueTwo); 
  }

  visor.placeholder = result;
  visor.value = "";
  valueOne = result;
  operators = "";
  lockVisor= true

  console.log(tempOperator);
}

function erase() {
  valueTemp = "";
  state = 1;
  valueOne = "";
  valueTwo = "";
  operators = "";
  visor.value = "";
  visor.placeholder = "0";
}

function del() {
  if (lockVisor === false) {
    valueTemp = valueTemp.slice(0, -1);
    visorUpdate(0, valueTemp);
  }
}

function visorUpdate(option, update) {
  if (option === 0) {
    visor.value = update;
  } else {
    visor.placeholder = update;
  }
}