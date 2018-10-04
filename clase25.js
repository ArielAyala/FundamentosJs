class Persona {
  constructor (nombre,apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto(){
      return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido,altura) {
    super(nombre, apellido,altura)
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }
}



// var ariel = new Persona('Ariel', 'Ayala', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('arturo', 'martinez', 1.89)

// ariel.soyAlto()
// erika.soyAlto()
// arturo.soyAlto()