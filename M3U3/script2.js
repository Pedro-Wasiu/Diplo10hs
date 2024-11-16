function boton() {
  // Obtener los valores de los inputs
  const num1 = parseInt(document.getElementById("numero1").value);
  const num2 = parseInt(document.getElementById("numero2").value);
  const num3 = parseInt(document.getElementById("numero3").value);

  // Validación: verificar si algún valor ingresado no es un número
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) 
    // verifica si el valor pasado como argumento no es un número.
    {
    document.getElementById("respuesta").innerText = "Por favor, ingrese tres números válidos.";
    return;
  }

  // Comparar los números y encontrar el mayor
  let mayor;
  if (num1 > num2 && num1 > num3) {
    mayor = num1;
  } else if (num2 > num3) {
    mayor = num2;
  } else {
    mayor = num3;
  }

  // Mostrar el resultado
  document.getElementById("respuesta").innerText = `El mayor es: ${mayor}`;
}
