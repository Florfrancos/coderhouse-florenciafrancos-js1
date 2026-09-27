let nombre = prompt("Ingresá tu nombre")
let apellido = prompt("Ingresá tu apellido")
const nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)

const anioNacimiento = prompt("Ingresá tu año de nacimiento")
const anio = parseInt(anioNacimiento);

const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();
const edad = anioActual - anio;
console.log(edad)

console.log (nombreCompleto + " " + edad + " años")
