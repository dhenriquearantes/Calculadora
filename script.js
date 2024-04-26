let valueTemp = "";
let state = 1;
let valueOne = "";
let valueTwo = "";
let operators = "";
const visor = document.getElementById('display');
let lockVisor = false;



function inputNum(num) {
  lockVisor = false;
  valueTemp += num
  visor.value = valueTemp;
}


function erase() {
  valueTemp = "";
  state = 1;
  valueOne = "";
  valueTwo = "";
  operators = "";
  visor.value = valueTemp;
  visor.placeholder = "0";
  
}

function del() {
  if (lockVisor == false){
    valueTemp = valueTemp.slice(0, -1);
    visor.value = valueTemp;
  }
}


function operator(value) {
  if (state == 1) {
    operators = value;
    valueOne = valueTemp;
    state = 2;
    valueTemp = "";
    visor.placeholder = valueTemp;
  } 
  if (state == 2 && valueOne > 0 && operators == "+") {
      valueTwo = valueTemp;
      sum();
      valueTemp = ""

  }
    if (state == 2 && valueOne > 0 && operators == "-") {
      valueTwo = valueTemp;
      substrac();
  }
}

function calculate() {
  let result = ""

  if (state == 2) {
    valueTwo = valueTemp;
    switch (operators) {
      case "+":
        result = Number(valueOne) + Number(valueTwo);
        visor.value = "";
        visor.placeholder = formatResult(result);
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

  } else {
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
  }
}

function sum() {
  result = Number(valueOne) + Number(valueTwo);
  visor.value = formatResult(result);
  valueOne = result
}

function substrac() {
  result = Number(valueOne) - Number(valueTwo);
  visor.value = "";
  visor.placeholder = formatResult(result);
  valueTemp = ''

}

function formatResult(result) {
  if (Number.isInteger(result)) {
    return result.toString();
  } else {
    return result.toFixed(2);
  }
}
