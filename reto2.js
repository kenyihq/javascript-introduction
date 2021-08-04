var piedra, papel, tijera;
piedra = 1;
papel = 2;
tijera = 3;

var jugador1, jugador2;

jugador1 = tijera;
jugador2 = papel;

switch (true) {
    case jugador1 === piedra && jugador2 === piedra:
        console.log("EMPATE");
        break;
    case jugador1 === piedra && jugador2 === papel:
        console.log("WINNER : JUGADOR 2");
        break;
    case jugador1 === piedra && jugador2 === tijera:
        console.log("WINNER : JUGADOR 1");
        break;
    case jugador1 === papel && jugador2 === piedra:
        console.log("WINNER : JUGADOR 1");
        break;
    case jugador1 === papel && jugador2 === papel:
        console.log("EMPATE");
        break;
    case jugador1 === papel && jugador2 === tijera:
        console.log("WINNER : JUGADOR 2");
        break;
    case jugador1 === tijera && jugador2 === piedra:
        console.log("WINNER : JUGADOR 2");
        break;
    case jugador1 === tijera && jugador2 === papel:
        console.log("WINNER : JUGADOR 1");
        break;
    case jugador1 === tijera && jugador2 === tijera:
        console.log("EMPATE");
        break;
    default:
        console.log("Elija una opción válida");

} 
    
 

// Inicializamos la función JUEGO
juego(piedra, papel);