var ariel = {
  nombre: 'Ariel',
  apellido: 'Ayala',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 10
}

function imprimirProfesiones (persona) {
  console.log(`${persona.nombre} es:`)
  if(persona.ingeniero) {
    console.log('Ingeniero');
  }else{
    console.log('No es ingeniero');
  }

  if(persona.cocinero){
    console.log('Cocinero');
  }

  if(persona.dj){
    console.log('DJ')
  }

  if(persona.cantante){
    console.log('Cantante')
  }

  if(persona.guitarrista){
    console.log('Guitarrista')
  }

  if(persona.drone){
    console.log('Vuel drone')
  }

}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD



function imprimirSiEsMayorDeEdad (persona) {
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona){
  if (!esMayorDeEdad(persona)){
    console.log('Acceso denegado');
  }
}
