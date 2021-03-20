
let nombre = prompt('Ingrese su nombre')
let edad = prompt('Ingrese su edad')
let date = new Date()
let year = date.getFullYear()

// console.log(year)
// console.log( typeof edad )

edad = parseInt(edad)
let dateUser = year - edad

// console.log( typeof edad)


alert('Bienvenido ' + nombre + '. Usted nacio en ' + dateUser)





// let, const, var

/*
// PRIMITIVOS

let variableString = 'miVarible' + '2';
let variableNumber = 10 + 2;
let variableBoolean = false
let variableUndefined = undefined
let variableNull = null
let variableBigInt = BigInt(10)
let variableSymbol = Symbol('symbol')

// Objetos
let fn = function () {
    console.log('holis')
}
let obj = {}


// variable = 1
console.log(variableString)

*/



/*
let gatito1 = 'Ruben'
let gatito2 = gatito1
gatito2 = 'Vasco'

console.log(gatito1)
console.log(gatito2)

console.log('=================================')

let gatitoObj1 = {
    "nombre": "Ruben"
}
gatitoObj2 = gatitoObj1
gatitoObj2.nombre = 'Vasco'

console.log(gatitoObj1.nombre)
console.log(gatitoObj2.nombre)
*/
