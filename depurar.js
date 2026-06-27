// "Hazme una función para mi sitio web de café que reciba la cantidad de tazas que un cliente quiere reservar y me diga si puede reservar o no. La regla es qe no se puede reservar más de 2 tazas por persona."

function puedeReservar(cantidad) {
    if (cantidad > 2) {
        return false;
    }
    return true;
}