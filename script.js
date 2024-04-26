let valueTemp = "";
let state = 1;
let valueOne = "";
let valueTwo = "";
let operators = "";
let visor = document.getElementById('display')
let lockVisor = false;



function inputNum(num) {
  lockVisor = false;
  valueTemp += num
  visorUpdate(valueTemp);
}


function operator(value) {
  if (state === 1) {
    operators = value;
    valueOne = valueTemp;
    state = 2;
    valueTemp = "";
    visorUpdate(valueTemp);

    console.log("valor1: ", valueOne);
    console.log("operador: ", value);
    console.log("valor2: ", valueTwo);

  } 
  if (state === 2 && operators === "+" && valueOne > 0) {
    valueTwo = valueTemp;
    result = Number(valueOne) + Number(valueTwo);
    visorUpdate(formatResult(result));
  
    valueOne = result;
    valueTemp = "";
    state = 3;

    console.log("valor1: ", valueOne);
    console.log("operador: ", value);
    console.log("valor2: ", valueTwo);

  }
  
  if (state === 2 && value === "-" && valueOne > 0) {
    valueTwo = valueTemp;
    result = Number(valueOne) - Number(valueTwo);
    visorUpdate(formatResult(result));

    valueOne = result
    valueTemp = "";

  }

  if (state === 2 && value === "*" && valueOne > 0) {
    valueTwo = valueTemp;
    result = Number(valueOne) * Number(valueTwo);
    visorUpdate(formatResult(result));

    valueOne = result
    valueTemp = "";

  }  

  if (state === 2 && value === "/"  && valueOne > 0) {
    valueTwo = valueTemp;
    result = Number(valueOne) / Number(valueTwo);
    visorUpdate(formatResult(result));
    
    valueOne = result
    valueTemp = "";

  }
}

function calculate() {
  let result = ""

  if (state === 1) {
    if (operators === "+") {
      valueTemp = Number(valueTemp) + Number(valueTwo); 
      visor.value= formatResult(valueTemp);     
    }
    if (operators === "-") {
      valueTemp = Number(valueTemp) - Number(valueTwo);
      visor.value = formatResult(valueTemp);      
    }    
    if (operators === "*") {
      valueTemp = Number(valueTemp) * Number(valueTwo);
      visor.value = formatResult(valueTemp);     
    }
    if (operators === "/") {
      valueTemp = Number(valueTemp) / Number(valueTwo);
      visor.value = formatResult(valueTemp);     
    }
    lockVisor = true

    console.log("resultado: ", result);
    console.log("valor1: ", valueOne);
    console.log("operador: ", value);
    console.log("valor2: ", valueTwo);

  }

  if (state === 2) {
    valueTwo = valueTemp
    switch (operators) {
      case "+":
        result = Number(valueOne) + Number(valueTwo);
        visor.value = formatResult(result);
        break;
      case "-":
        result = Number(valueOne) - Number(valueTwo);
        visor.value = formatResult(result);
        break
      case "*":
        result = Number(valueOne) * Number(valueTwo);
        visor.value = formatResult(result);
        break     
      case "/":
        result = Number(valueOne) / Number(valueTwo);
        visor.value = formatResult(result);
        break               
      default:
        break;
    }
    valueTemp = ""
    state = 1;
    lockVisor = true

  } 

  if (state === 3) {
    if (operators === "+") {
      valueTwo = valueTemp;
      result = Number(valueOne) + Number(valueTwo);
      visorUpdate(formatResult(result));
      state = 1;
  
      
      valueTemp = result
      valueOne = valueTemp
      valueTwo = ""
    }
    if (operators === "-") {
      valueTwo = valueTemp;
      result = Number(valueOne) - Number(valueTwo);
      visorUpdate(formatResult(result));
      state = 1;
  
      
      valueTemp = result
      valueOne = valueTemp
      valueTwo = ""
    }

  }
}

function sum() {
  result = Number(valueOne) + Number(valueTwo);
  visor.value = formatResult(result);
  valueOne = result
}

function substrac() {
  result = Number(valueOne) - Number(valueTwo);
  visor.value = formatResult(result);
  valueOne = result

}

function formatResult(result) {
  if (Number.isInteger(result)) {
    return result.toString();
  } else {
    return result.toFixed(2);
  }
}

function visorUpdate(update) {
  document.getElementById('display').value = update;
}

function erase() {
  valueTemp = "";
  state = 1;
  valueOne = "";
  valueTwo = "";
  operators = "";
  visorUpdate(valueTemp);
  visor.placeholder = "0";
  
}

function del() {
  if (lockVisor == false){
    valueTemp = valueTemp.slice(0, -1);
    visor.value = valueTemp;
  }
}


// console.log("resultado: ", result);
// console.log("valor1: ", valueOne);
// console.log("operador: ", value);
// console.log("valor2: ", valueTwo);