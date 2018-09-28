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

function imprimirNombreEnMayusculas({nombre}){

  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Ariel)
imprimirNombreEnMayusculas(Dario)
imprimirNombreEnMayusculas({nombre:'Pepito'})
imprimirNombreEnMayusculas()
