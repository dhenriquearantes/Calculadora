let valueTemp = "";
let state = 1;
let valueOne = "";
let valueTwo = "";
let operators = "";
let tempOperator = "";
let visor = document.getElementById('display')
let lockVisor = false;



function inputNum(num) {
  lockVisor = false;
  valueTemp += num
  visorUpdate(0, valueTemp);
}


function operator(value) {
  if (state === 1 && valueTemp > 0 ) {
    operators = value;
    valueOne = valueTemp;
    state = 2;
    valueTemp = "";
    visorUpdate(0, valueTemp);
    visorUpdate(1, valueTemp);
  }

  if (value === "=" && state === 2 ) {
    operators = value;
    switch (operators) {
      case "+":
        sum()
        break;
      case "-":
        substrac()
        break
      case "*":
        multiplic()
        break     
      case "/":
        division()
        break       
      case "=":
        equals()
        break                   
      default:
        break;
    }
    lockVisor = true

  } 

   if (value != "=" && state === 2 && valueTemp > 0 ) {
     switch (operators) {
       case "+":
        sum()
        break;
      case "-":
        console.log("aqui");
        substrac()
        break
      case "*":
        multiplic()
        break     
      case "/":
        division()
        break                     
      default:
        break;
    }


  } 

  }


function sum() {
  valueTwo = valueTemp;
  result = Number(valueOne) + Number(valueTwo);
  visor.value = "";
  visor.placeholder = result;
  valueOne = result
  valueTwo = ""

  // tempOperator = operators

  console.log("valor1: ", valueOne);
  console.log("operador: ", operators);
  console.log("valor2: ", valueTwo);
  console.log("resultado: ", result);

  valueTemp = ""
}

function substrac() {
  valueTwo = valueTemp;
  result = Number(valueOne) - Number(valueTwo);
  visor.value = "";
  visor.placeholder = result;
  valueOne = result
  valueTwo = ""


  // tempOperator = operators

  console.log("valor1: ", valueOne);
  console.log("operador: ", operators);
  console.log("valor2: ", valueTwo);
  console.log("resultado: ", result);

  valueTemp = ""
}

function multiplic() {
  valueTwo = valueTemp;
  result = Number(valueOne) * Number(valueTwo);
  visor.value = "";
  visor.placeholder = result;
  valueOne = result
  valueTwo = ""

  // tempOperator = operators

  valueTemp = ""
}

function division() {
  valueTwo = valueTemp;
  result = Number(valueOne) / Number(valueTwo);
  visor.value = "";
  visor.placeholder = result;
  valueOne = result
  valueTwo = ""

  // tempOperator = operators

  valueTemp = ""

}


function equals() {
  if (state === 1) {
    
  }
  valueOne = result
  if (tempOperator === "+") {
    result = Number(valueOne) + Number(valueTwo);
    visor.value = result;
  }
  if (tempOperator === "-") {
    result = Number(valueOne) - Number(valueTwo);
    visor.value = result;
  }  
  if (tempOperator === "*") {
    result = Number(valueOne) * Number(valueTwo);
    visor.value = result;
  }  
  if (tempOperator === "/") {
    result = Number(valueOne) / Number(valueTwo);
    visor.value = result;
  }  

}

// function formatResult(value) {
//   if (Number.isInteger(value)) {
//     return value.toString();
//   } else {
//     return value.toFixed(2);
//   }
// }

function erase() {
  valueTemp = "";
  state = 1;
  valueOne = "";
  valueTwo = "";
  operators = "";
  visor.value = ""
  visor.placeholder = "0"
  
}

function del() {
  if (lockVisor == false){
    valueTemp = valueTemp.slice(0, -1);
    visorUpdate(0, valueTemp)
  }
}

function visorUpdate(option, update) {
  if (option === "0") {
    document.getElementById('display').value = update;
  } else {
    document.getElementById('display').placeholder = update;    
  }
}




// console.log("resultado: ", result);
// console.log("valor1: ", valueOne);
// console.log("operador: ", value);
// console.log("valor2: ", valueTwo);