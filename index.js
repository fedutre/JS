const bienvenidoTurno = prompt("Bienvenido a Multideportes, alquiler de canchas")
let ingreseNombre = prompt("Ingrese su nombre y Apellido")

let ingreseDni = parseInt(prompt("DNI"))
if (isNaN(ingreseDni)) {
    alert("Ud no coloco un número")
}


let edad = parseInt(prompt("Ingrese su edad"))
if (edad >= 18) {
    alert("Bienvenido al gestor de reservas de Multideportes")

} else {
    alert("No puede sacar turno por ser menor de edad.")
}

let numeroCelular = parseInt(prompt("Coloque número de contacto"))

if (isNaN(numeroCelular)) {
    alert("Ud no coloco un número")
}


let continuar = true

while (continuar) {

    let canchaSolicitada = parseInt(prompt('Que cancha desea reservar: \n 1. Cancha de Futbol 5 \n 2. Cancha de Padel \n 3. Cancha de Tenis'))

    if (isNaN(canchaSolicitada)) {
        alert("Ud no coloco un número")
    } else if (canchaSolicitada === 1) {
        alert("Ud. selecciono Cancha de futbol 5");
        
        continuar = false
    } else if (canchaSolicitada === 2) {
        alert("Ud. selecciono Cancha de Padel")
        
        continuar = false
    } else if (canchaSolicitada === 3) {
        alert("Ud. selecciono Cancha de Tenis")
        
        continuar = false
    } else {
        alert("Ud. selecciono una opcion inválida")
    }
    
}

    let horarioTurno = parseInt(prompt('Turnos a reservar \n 1. 19:00 hs \n 2. 20:00 hs \n 3. 21:00 hs \n 4. 22:00 hs \n 5. 23:00 hs \n 6. 00:00 hs'))

    if (isNaN(horarioTurno)) {
        alert("Ud no coloco un número")
    } else if (horarioTurno === 1) {
        alert("Turno 19:00 hs");
        
        continuar = false
    } else if (horarioTurno === 2) {
        alert("Turno 20:00 hs")
        
        continuar = false
    } else if (horarioTurno === 3) {
        alert("Turno 21:00 hs")
        
        continuar = false
    } else if(horarioTurno === 4){
        alert("Turno 22:00 hs")

        continuar = false
    } else if(horarioTurno === 5){
        alert("Turno 23:00 hs")

        continuar = false
    } else if(horarioTurno === 6){
        alert("Turno 00:00hs")

        continuar = false
    } else {
        alert("Ud. selecciono una opcion inválida")
    }

    function turnoResultado(canchaSolicitada, horarioTurno) {
        console.log(canchaSolicitada + " " + horarioTurno);
    }
    