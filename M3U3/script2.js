function boton() {
  // Obtener los valores de los inputs
  const num1 = parseInt(document.getElementById("numero1").value);
  const num2 = parseInt(document.getElementById("numero2").value);
  const num3 = parseInt(document.getElementById("numero3").value);

  // Validación: verificar si algún valor ingresado no es un número
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      document.getElementById("respuesta").innerText = "Por favor, ingrese tres números válidos.";
      return;
  }

  // Llamar a la función que encuentra el mayor pasando un array
  const numeros = [num1, num2, num3];
  const mayor = encontrarMayor(numeros);

  // Mostrar el resultado
  document.getElementById("respuesta").innerText = `El mayor es: ${mayor}`;
}

function encontrarMayor(array) {
  let mayor = array[0];
  // asumimos que el primer elemento del array es el mayor
  for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
          mayor = array[i];
      }
  }
  return mayor;
}


