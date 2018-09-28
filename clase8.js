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
  //var nombre = persona.nombre
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Ariel)
imprimirNombreEnMayusculas(Dario)

function cumpleaños(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

cumpleaños(Ariel)
