function boton() // Al apretar el botón "aceptar" sigue la acción de este js, "()"" ejecuta la función en ese momento, cambiando el comportamiento del botón.
{const distancia = parseInt(document.getElementById("distancia").value);
// Con document.getElementById("distancia") lo vinculo con id=distancia, value es para que tome el valor marcado y no toda la etiqueta

let transporte; 
// Uso let porque trasporte va a tener varios valores

if(distancia >= 0 && distancia <= 1000 ){transporte = "pie"}
// && es un operador lógico que evalúa múltiples condiciones.
else if (distancia > 1000 && distancia <= 10000 ) {transporte = "bicicleta"}
else if (distancia > 10000 && distancia <= 30000 ) {transporte = "colectivo"}
else if (distancia > 30000 && distancia <= 100000){transporte= "auto"}
else if (distancia > 100000){transporte= "avion"}
else {transporte = "Distancia no válida";}
// En caso de no cumplir ninguna de las de las condiciones, nos dará la respuesta "distanacia no valida"


document.getElementById("respuesta").innerText = `El medio de transporte recomendado es: ${transporte}`;

}

// Con .innerText lo que estamos haciendo es modificar el texto del elemento html, asignandole el nuevo valor
// Las comillas invertidas permiten crear cadenas de textos dinámicas
// Por la anterior propiedad se puede agregar el valor de una variable "${}"
