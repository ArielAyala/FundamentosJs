var ariel = {
  nombre: 'Ariel',
  apellido: 'Ayala',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${ariel.nombre} pesa ${ariel.peso} kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }

const INCREMENTO_PESO = 0.3
const DIA_DEL_AÑO = 365
const aumentarDePeso = (persona, incremento) =>  persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = ariel.peso - 3

var dias = 0

while (ariel.peso > META) {
  
  if (comeMucho()) {
    //aumenta de persona
    aumentarDePeso(ariel)
  }
  if (realizaDeporte()) {
    adelgazar(ariel)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${ariel.nombre} adelgazó 3 kg.`)
