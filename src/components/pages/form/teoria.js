let persona = {
    nombre: 'Lucas', 
    edad : 23
}

let prop = 'edad'

console.log(persona.edad) // dot notation 
console.log(persona[prop]) // bracket notation

// si la propiedad de un objeto me llega en forma de string, no se puede\
// utilizar el dot notation ya que nos devolveria un error:

// persona.prop seria lo mismo que persona."edad" y esto no esta bien

// cuando tenemos este tipo de casos se utiliza el bracket notation para que
// podamos acceder a la propiedad sin problemas... por lo que nuestro acceso quedaria asi

// persona[prop] que es lo mismo que persona["edad"]

