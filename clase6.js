var Ariel = {
  nombre: 'Ariel',
  apellido: 'Ayala',
  edad: 28
}

var Dario = {
  nombre: 'Dario',
  apellido: 'Vargas',
  edad: 27
}

function imprimirNombreEnMayusculas(persona){
  var nombre= persona.nombre.toUpperCase()

  console.log(nombre)
}

imprimirNombreEnMayusculas(Ariel)
imprimirNombreEnMayusculas(Dario)
