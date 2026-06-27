/*function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

function puedeReservar(cantidad) {
    return cantidad <= 2;
}*/

/*function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

const botonReservar = document.querySelector("#boton-reservar");

botonReservar.addEventListener("click", function() {
    console.log("El Usuario hizo Clic");
});*/

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function() {
    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        Swal.fire({
            title: "Reserva Confirmada",
            text:"¡Reserva Registrada EXITOSAMENTE!",
            icon:"success"
        });
    } else {
        botonReservar.textContent = "Sin Cupos";
        botonReservar.disabled = true;
        Swal.fire({
            title: "Cupos Agotados",
            text:"¡NO es posible realizar más Reservas!",
            icon:"error"
        });
    }
});