const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }

// $.get(lukeUrl,opts,function(luke){
//   console.log(`Hola yo soy, ${luke.name}`)
// })



 function obtenerPersona(id, callback){
   const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

   $
    .get(url,opts,callback)
     .fail(() => {
       console.log(`Sucedio un error. No se pudo obtener el persona ${id}`);
     })

 }

obtenerPersona(1,function(personaje){
  console.log(`Hola, yo soy ${personaje.name}`)
  obtenerPersona(2,function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)
    obtenerPersona(3,function(personaje){
      console.log(`Hola, yo soy ${personaje.name}`)
      obtenerPersona(4,function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)
        obtenerPersona(5,function(personaje){
          console.log(`Hola, yo soy ${personaje.name}`)
          obtenerPersona(6,function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)
            obtenerPersona(7,function(personaje){
              console.log(`Hola, yo soy ${personaje.name}`)

            })
          })
        })
      })
    })
  })
})
