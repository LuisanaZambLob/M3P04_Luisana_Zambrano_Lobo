function calcularMedia() {
  var notas = [];
  var totalNotas = 0;
  var media = 0;
  
  // Ingresar las 6 notas
  for (var i = 1; i <= 6; i++) {
    var nota = parseFloat(prompt("Introduce la nota " + i));
    notas.push(nota);
    totalNotas += nota;
  }
  
  // Calculo de la media
  media = totalNotas / 6;
  
  // Mostrar la media en pantalla
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "La nota media es: " + media.toFixed(2);
}

function mostrarRango() {
  var media = parseFloat(document.getElementById("resultado").innerHTML.split(":")[1]);
  var rango = "";
  if (media >= 0 && media <= 2.99) {
    rango = "Muy deficiente";
  } else if (media >= 3 && media <= 4.99) { 
    rango = "Insuficiente";
  } else if (media >= 5 && media <= 5.99) {
    rango = "Suficiente";
  } else if (media >= 6 && media <= 6.99) {
    rango = "Bien";
  } else if (media >= 7 && media <= 8.99) {
    rango = "Notable";
  } else if (media >= 9 && media <= 10) {
    rango = "Sobresaliente";
  } else {
    rango = "Nota inválida";
  }

  // Mostrar la correspondencia en pantalla
  var rangoElemento = document.getElementById("rango");
  rangoElemento.innerHTML = "El rango es: " + rango;
}
