// Array de alumnos
var alumnos = [
    { nombre: 'Juan Gomez', nota: 7 },
    { nombre: 'Pedro Rodriguez', nota: 4 },
    { nombre: 'Roxana García', nota: 8 },
    { nombre: 'Luciano Lopez', nota: 5 },
    { nombre: 'Fernanda Gimenez', nota: 6 },
    { nombre: 'Florencia Martinez', nota: 10 },
    { nombre: 'Raul Sanchez', nota: 7 },
    { nombre: 'Sandra Figueroa', nota: 8 }
  ];
  
  // Recorremos el array y eliminamos las notas bajas
  for (var i = 0; i < alumnos.length; i++) {
    if (alumnos[i].nota < 7) {
      alumnos.splice(i, 1); // Elimina el alumno con nota baja
      i--; // Retrocede el índice porque el array se acorta, es decir evitamos que se salten posiciones, ya que estas se cambian
    }
  }
  
  // Seleccionamos el elemento UL del DOM
  var listaAprobados = document.getElementById("listaAprobados");
  
  // Agregamos los alumnos aprobados al DOM
  alumnos.forEach(function(alumno) {
    var li = document.createElement("li"); // Creamos un elemento de lista
    li.textContent = `${alumno.nombre} - Nota: ${alumno.nota}`; // Agregamos el texto
    listaAprobados.appendChild(li); // Lo añadimos al UL
  });
  