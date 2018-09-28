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

function imprimirNombreYEdad(persona) {
  var nombre = persona.nombre
  var edad = persona.edad
  console.log('Hola, me llamo '+ nombre + 'y tengo ' + edad + ' años.')
}

imprimirNombreYEdad(Ariel)
imprimirNombreYEdad(Dario)
