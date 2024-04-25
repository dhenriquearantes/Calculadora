var valorTemp = "";
var state = 1;
var valueOne = "";
var valueTwo = "";
var operador = "";
var visor = document.getElementById('display');
var lockVisor = false;



function inputNum(valor) {
  lockVisor = false
  valorTemp += valor
  document.getElementById('display').setAttribute("value", valorTemp);
}

document.getElementById("clear").addEventListener("click",() => {
  valorTemp = "";
  state = 1;
  valueOne = "";
  valueTwo = "";
  operador = "";
  visor.setAttribute("value", valorTemp);
  visor.setAttribute("placeholder", "0");
})

document.getElementById("del").addEventListener("click",() => {
  console.log(lockVisor)
  if (lockVisor == false){
    valorTemp = valorTemp.slice(0, -1);
    visor.setAttribute("value", valorTemp)
  }
})

// function del (){
//   let display = document.getElementById("display").value
//   console.log(display)
//   if (lockVisor == false){
//     display = display.slice(0, -1);
//     visor.setAttribute("value", display)
//   }
// }

function operator(valor) {

    if (valor == '+' || '-' || '*' || '/' || '%') {
      operador = valor;
      valueOne = valorTemp;
      state=2;
      valorTemp = "";
      visor.setAttribute("placeholder", valorTemp);
      // console.log(state);
      }  
}

function calculate() {
  let result = ""

  if (state == 2) {
    valueTwo = valorTemp;
    switch (operador) {
      case "+":
        result = Number(valueOne) + Number(valueTwo)
        visor.setAttribute("value", formatResult(result))
        break;
      case "-":
        result = Number(valueOne) - Number(valueTwo)
        visor.setAttribute("value", formatResult(result))
        break
      case "*":
        result = Number(valueOne) * Number(valueTwo)
        visor.setAttribute("value", formatResult(result))
        break     
      case "/":
        result = Number(valueOne) / Number(valueTwo)
        visor.setAttribute("value", formatResult(result))
        break       
      case "%":
        result = (Number(valueOne) * Number(valueTwo)) / 100
        visor.setAttribute("value", formatResult(result))
        break            
      default:
        break;
    }
    valorTemp = result;
    state = 1;
    lockVisor = true

  } else {
    if (operador === "+") {
      valorTemp = Number(valorTemp) + Number(valueTwo)
      visor.setAttribute('value', formatResult(valorTemp));
      console.log(valorTemp);
    }
    if (operador === "-") {
      valorTemp = valorTemp - valueTwo
      visor.setAttribute('value', valorTemp);
      console.log(valorTemp);
    }    
    if (operador === "*") {
      valorTemp = valorTemp * valueTwo
      visor.setAttribute('value', valorTemp);
      console.log(valorTemp);
    }
    if (operador === "/") {
      valorTemp = valorTemp / valueTwo
      visor.setAttribute('value', valorTemp);
      console.log(valorTemp);
    }
    lockVisor = true
  }
  valorTemp = ""

}

function formatResult(result) {
  if (Number.isInteger(result)) {
    return result.toString();
  } else {
    return result.toFixed(3);
  }
}
