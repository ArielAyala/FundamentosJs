const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }

// $.get(lukeUrl,opts,function(luke){
//   console.log(`Hola yo soy, ${luke.name}`)
// })

const onPeopleResponse = function(persona){
   console.log(`Hola, yo soy ${persona.name}`)
 }

 function obtenerPersona(id){
   const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
   $.get(url,opts,onPeopleResponse)
 }

obtenerPersona(1)
obtenerPersona(2)
obtenerPersona(3)
