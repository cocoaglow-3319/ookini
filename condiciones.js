// Datos de la Condición
const cupoCata = 8;
const inscritos = 8;

// Condicional de Cata Abierta o Llena
// Si el número de cupos es mayor que el número de inscritos devuelve "Hay cupos, abrir reserva",
// Si no devuelve "Cata llena, ofrecer lista de espera"

if (cupoCata > inscritos) {
    console.log("Hay cupos, abrir reserva");
} else {
    console.log("Cata llena, ofrecer lista de espera");
}

// Operadores de Comparación
8 > 5    // true
3 < 10   // true
8 >= 8   // true
4 <= 9   // true
5 === 5  // true
5 !== 3  // true

// Revisa el Código para predecir el Resultado

const tazasReservadasHoy = 47;
const maxTazasDia = 50;

if (tazasReservadasHoy >= maxTazasDia) {
    console.log("Cerrar reservas del día");
} else {
    console.log("Aún hay disponibilidad");
}

// Un pedazo de Código que corre, pero está mal

const cantidadTazas = 0;

if (cantidadTazas > 2) {
    console.log("Solo puedes reservar máximo 2 tazas");
} else {
    console.log("Reserva confirmada")
}

// Desafío (Clase 9):

const minTazas_Reservadas = 1;
const maxTazas_Reservadas = 2;
const tazasReservadas_PersonaX = 0;

if (tazasReservadas_PersonaX < minTazas_Reservadas) {
    console.log("Debes reservar al menos una taza")
} else if (tazasReservadas_PersonaX == minTazas_Reservadas || tazasReservadas_PersonaX < maxTazas_Reservadas) {
    console.log("Puedes reservar una taza extra");
} else if (tazasReservadas_PersonaX == maxTazas_Reservadas) {
    console.log("No es posible reservar más tazas")
}