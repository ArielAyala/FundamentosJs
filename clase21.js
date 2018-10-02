function Persona(nombre,apellido) {
  this.nombre = nombre
  this.apellido = apellido

}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var ariel = new Persona('Ariel','Ayala')
var erika = new Persona('Erika','Luna')
var arturo = new Persona('arturo','martinez')
