function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

console.log(calcularPrecio(5,2));
console.log(calcularPrecio(3,4));
console.log(calcularPrecio(7,1));

// Una Función que DECIDE:

function puedeReservar(cantidad) {
    if (cantidad <= 2) {
        return true;
    } else {
        return false;
    }
}

/*if (puedeReservar(2)) {
    console.log("Reserva confirmada");
} else {
    console.log("Lo siento, máximo 2 tazas por persona");
}

// Una Función parecida, generada por IA:

function puedeReservar(cantidad) {
    return cantidad <= 2;
}

// Desafío (Clase 11):

let cantidad = 0;
let totalTazas_Dia = 0; 

function puedeReservar(cantidad, totalTazas_Dia) {
    return cantidad <= 2 && (totalTazas_Dia + cantidad) <= 50;
}

if (puedeReservar(cantidad >=1 && cantidad <=2, (totalTazas_Dia + cantidad) >= 0 && (totalTazas_Dia + cantidad) <=50)) {
    console.log("Reserva confirmada.");
} else {
    console.log("Lo lamentamos, NO puede reservar. Ookini tiene como política un máximo de 2 tazas (reservadas) por persona. Asimismo, solo se producen 50 tazas al día.");
}

console.log(puedeReservar(1,41));
console.log(puedeReservar(2,59));*/