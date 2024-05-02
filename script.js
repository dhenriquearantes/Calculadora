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
    } else if (num === "." && valueTemp.includes(".")) {
        return;
    } else {
      valueTemp += num;
    }
    
    lockVisor = false;
  
    visor.value = formatNumber(valueTemp);
  }
}

function operator(value) {
  if (value !== "=" && value !== "%" && state === 1) {
    operators = value;
    tempOperator = value;
    valueOne = valueTemp;
    state = 2;
    valueTemp = "";
    visor.value = formatNumber(valueOne);

  } else if (value === operators && state === 2) {

    repeatOperation();

  } else if (value !== "=" && value !== "%" && state === 2) {

    lockEquals = false
    tempOperator = value;
    valueTemp = ""

  } else if (value === "=" && state === 2) {

    equals();
    lockVisor = true;

  } else if (value === "%" ) {

    state = 2
    percentage()

  }
}

function repeatOperation() {
  if (valueOne !== "" && valueTemp !== "") {
    switch (operators) {
      case "+":
        result = Number(valueOne) + Number(valueTemp);
        break;
      case "-":
        result = Number(valueOne) - Number(valueTemp);
        break;
      case "*":
        result = Number(valueOne) * Number(valueTemp);
        break;
      case "/":
        result = Number(valueOne) / Number(valueTemp);
        break;
      default:
        return;
    }
    visor.value = formatNumber(result);
    valueOne = result;
    valueTemp = "";
  }
}

function percentage() {

  if (tempOperator !== "") {
    valueTwo = valueTemp;
    const percent = (Number(valueOne) * Number(valueTwo)) / 100;
  
    if (operators === "+") {
      result = Number(valueOne) + percent;
    } else if (operators === "-") {
      result = Number(valueOne) - percent;
    } else if (operators === "*") {
      result = percent;
    } else if (operators === "/") {
      result = Number(valueOne) / (Number(valueTwo) / 100);
    }
  
    state = 1;
    visor.value = formatNumber(result);
    valueTwo = "";
    valueOne = result;
    valueTemp = result;
  
    console.log(tempOperator);
  } else {
    state = 2

    result = visor.value / 100;
    visor.value = formatNumber(result);

    valueTemp = "";
    valueOne = result;
  }


}



function equals() {
  if (lockEquals === false) {
    switch (tempOperator) {
      case "+":
        result = Number(valueOne) + Number(valueTemp);
        break;
      case "-":
        result = Number(valueOne) - Number(valueTemp);
        break;
      case "*":
        result = Number(valueOne) * Number(valueTemp);
        break;
      case "/":
        result = Number(valueOne) / Number(valueTemp);
        break;
      default:
        return;
    }
    valueTwo = visor.value
    lockEquals = true;
  } else {
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
  visor.value =  formatNumber(result)
  valueOne = result
  lockVisor = true;
  valueTemp = ""

  console.log("valueOne:", valueOne);
  console.log("valueTwo:", valueTwo);
  console.log("result:", result);

}

function erase() {
  location.reload();

  // valueTemp = "";
  // valueOne = "";
  // valueTwo = "";
  // operators = "";
  // state = 1;
  // visor.value = "0");

}

function del() {
  if (lockVisor === false) {
    valueTemp = valueTemp.slice(0, -1);
    visor.value = formatNumber(valueTemp);
  }
}


function formatNumber(number) {
  var formattedNumber = Number(number).toLocaleString("pt-BR").replace(/,/g, ".");
  
  if (number.length <= 6 ) {
    visor.style.fontSize = '84px';
  } else if ( number.length === 7 ) {
    visor.style.fontSize = '68px';
  } else if ( number.length === 8 ) {
    visor.style.fontSize = '64px';
  } else if ( number.length === 9 ) {
    visor.style.fontSize = '56px';
  }
  
  return formattedNumber;
}


