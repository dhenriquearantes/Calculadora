var valorAcumulado = "";
var state = 1;
var valueOne = "";
var valueTwo = "";
var operador = "";
var visor = document.getElementById('display');

// var porcent = document.getElementById("porcent").value; 
// console.log(porcent);

function inputNum(valor) {
  valorAcumulado += valor;
  document.getElementById('display').setAttribute("value", valorAcumulado);
}

document.getElementById("clear").addEventListener("click",() => {
  valorAcumulado = "";
  state = 1;
  valueOne = "";
  valueTwo = "";
  operador = "";
  visor.setAttribute("value", valorAcumulado);
})

document.getElementById("del").addEventListener("click",() => {
    valorAcumulado = valorAcumulado.slice(0, -1);
    visor.setAttribute("value", valorAcumulado)
})

function operator(valor) {

  if (valor == '+' || '-' || '*' || '/' || '%') {
    operador = valor;
    valueOne = valorAcumulado;
    state = 2;
    valorAcumulado = "";
    visor.setAttribute("value", valorAcumulado)
  }  
}

function calculate() {
  let result = ""

  if (state == 2) {
    valueTwo = valorAcumulado;

    switch (operador) {
      case "+":
        result = Number(valueOne) + Number(valueTwo)
        result = result.toFixed(2)
        visor.setAttribute("value", result)
        break;
      case "-":
        result = Number(valueOne) - Number(valueTwo)
        result = result.toFixed(2)

        visor.setAttribute("value", result)
        break
      case "*":
        result = Number(valueOne) * Number(valueTwo)
        result = result.toFixed(2)

        visor.setAttribute("value", result)
        break     
      case "/":
        result = Number(valueOne) / Number(valueTwo)
        result = result.toFixed(2)
        visor.setAttribute("value", result)
        break       
      case "%":
        result = 100 / (Number(valueOne) * Number(valueTwo))
        visor.setAttribute("value", result)
        break            
      default:
        break;
    }

    valorAcumulado = result;
    state = 1;

  }


    
}