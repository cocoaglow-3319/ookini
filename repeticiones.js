console.log("V60")
console.log("Kyoto Drip")
console.log("Siphon")
console.log("Prensa Francesa")

// La "Listas" son "Arrays" en JavaScrip

// En este caso, la Lista de Métodos, se llaman "Arrays":
const metodos = ["V60", "Kyoto Drip", "Siphon", "Prensa Francesa"];

// Instrucción que recorre la Lista y que hace algo en cada Elemento:

for (const metodo of metodos) {
    console.log(metodo);
}

console.log("Fin del Programa")

// Ejemplo de Bucle de Reservas en un Día:

const reservasDelDia = [2, 1, 2, 1, 2];
let totalTazas = 0;

for (const cantidad of reservasDelDia) {
    totalTazas = totalTazas + cantidad;
}

console.log(totalTazas)

// Ejemplo de un "for" que corre, pero NO hace lo que pedimos:

for (const cantidad of reservasDelDia) {
    totalTazas = cantidad;
}

console.log(totalTazas)