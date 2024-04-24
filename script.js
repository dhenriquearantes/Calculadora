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
  visor.setAttribute("value", valorAcumulado);
})

document.getElementById("del").addEventListener("click",() => {
  valorAcumulado = valorAcumulado.slice(0, -1);
  visor.setAttribute("value", valorAcumulado)
})

function operator(valor) {
  let resultado = 0;

  if (valor == '+' || '-' || '*' || '/' || '%') {
    operador = valor;
    valueOne = valorAcumulado;
    state = 2;
  }  

  switch (operador) {
    case "+":
      console.log("yesy");
      break;
    case "-":
      resultado = Number(valorArray[0]) - Number(valorArray[2])
      break
    case "*":
      resultado = Number(valorArray[0]) * Number(valorArray[2])
      break     
    case "/":
      resultado = Number(valorArray[0]) / Number(valorArray[2])
      break       
    case "%":
      resultado = 100 * Number(valorArray[0]) / Number(valorArray[2])
      break            
    default:
      break;
  }
    
}