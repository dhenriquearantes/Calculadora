var valorAcumulado = "";
var visor = document.getElementById('display');


function inputNum(valor) {
  valorAcumulado += `${valor}`;
  visor.setAttribute("value", valorAcumulado)
  
}

document.getElementById("clear").addEventListener("click",() => {
  valorAcumulado = "";
  visor.setAttribute("value", valorAcumulado)
  
})

document.getElementById("del").addEventListener("click",() => {
  valorAcumulado = valorAcumulado.substring(1)
  console.log(valorAcumulado);

})