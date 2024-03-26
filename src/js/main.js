// Funciones para los temas
function seleccionarTema(numero) {
  const circulo = document.getElementById("circulo");
  const calculadora = document.querySelector(".calculadora");
  const pantalla = document.querySelector(".pantalla");
  const botones = document.querySelector(".botones");
  const fondoBoton = document.getElementById("fondo");
  if (numero === 1) {
    circulo.style.transform = "translateX(0)";
    calculadora.style.backgroundColor = "#394666";
    pantalla.style.backgroundColor = "#192033";
    botones.style.backgroundColor = "#192033";
    fondoBoton.style.backgroundColor = "#192033";
  } else if (numero === 2) {
    circulo.style.transform = "translateX(16.9px)";
    calculadora.style.backgroundColor = "#3f51b5";
    pantalla.style.backgroundColor = "#1a237e";
    botones.style.backgroundColor = "#1a237e";
    fondoBoton.style.backgroundColor = "#1a237e";
  } else if (numero === 3) {
    circulo.style.transform = "translateX(33.8px)";
    calculadora.style.backgroundColor = "#4caf50";
    pantalla.style.backgroundColor = "#1b5e20";
    botones.style.backgroundColor = "#1b5e20";
    fondoBoton.style.backgroundColor = "#1b5e20";
  }
}

// Funcion para la calculadora
function calculadora() {
  const siete = document.getElementById("7");
  const ocho = document.getElementById("8");
  const nueve = document.getElementById("9");
  const del = document.getElementById("del");
  const cuatro = document.getElementById("4");
  const cinco = document.getElementById("5");
  const seis = document.getElementById("6");
  const sumar = document.getElementById("sumar");
  const uno = document.getElementById("1");
  const dos = document.getElementById("2");
  const tres = document.getElementById("3");
  const restar = document.getElementById("resta");
  const punto = document.getElementById("punto");
  const cero = document.getElementById("0");
  const dividir = document.getElementById("barra");
  const multiplicar = document.getElementById("mult");
  const resetear = document.getElementById("reset");
  const total = document.getElementById("total");
  const pantalla = document.querySelector(".pantalla");

  siete.addEventListener("click", function () {
    pantalla.innerText += "7";
  });
  ocho.addEventListener("click", function () {
    pantalla.innerText += "8";
  });
  nueve.addEventListener("click", function () {
    pantalla.innerText += "9";
  });
  del.addEventListener("click", function () {
    let contenido = pantalla.innerText;
    pantalla.innerText = contenido.slice(0, -1);
  });
  cuatro.addEventListener("click", function () {
    pantalla.innerText += "4";
  });
  cinco.addEventListener("click", function () {
    pantalla.innerText += "5";
  });
  seis.addEventListener("click", function () {
    pantalla.innerText += "6";
  });
  sumar.addEventListener("click", function () {
    pantalla.innerText += "+";
  });
  uno.addEventListener("click", function () {
    pantalla.innerText += "1";
  });
  dos.addEventListener("click", function () {
    pantalla.innerText += "2";
  });
  tres.addEventListener("click", function () {
    pantalla.innerText += "3";
  });
  restar.addEventListener("click", function () {
    pantalla.innerText += "-";
  });
  punto.addEventListener("click", function () {
    pantalla.innerText += ".";
  });
  cero.addEventListener("click", function () {
    pantalla.innerText += "0";
  });
  dividir.addEventListener("click", function () {
    pantalla.innerText += "/";
  });
  multiplicar.addEventListener("click", function () {
    pantalla.innerText += "x";
  });
  resetear.addEventListener("click", function () {
    pantalla.innerText = "";
  });
  total.addEventListener("click", function () {
    let expresion = pantalla.innerText;
    let resultado;

    // Verificar si la expresión contiene un signo de suma, resta, multiplicación o división
    if (expresion.includes("+")) {
      let numeros = expresion.split("+");
      resultado = parseFloat(numeros[0]) + parseFloat(numeros[1]) + parseFloat(numeros[2]) + parseFloat(numeros[3]);
    } else if (expresion.includes("-")) {
      let numeros = expresion.split("-");
      resultado = parseFloat(numeros[0]) - parseFloat(numeros[1]) - parseFloat(numeros[2]) - parseFloat(numeros[3]);
    } else if (expresion.includes("x")) {
      let numeros = expresion.split("x");
      resultado = parseFloat(numeros[0]) * parseFloat(numeros[1]) * parseFloat(numeros[2]) * parseFloat(numeros[3]);
    } else if (expresion.includes("/")) {
      let numeros = expresion.split("/");
      resultado = parseFloat(numeros[0]) / parseFloat(numeros[1]) / parseFloat(numeros[2]) / parseFloat(numeros[3]);
    }

    pantalla.innerText = resultado; // Muestra el resultado en la pantalla
  });
}
calculadora();
