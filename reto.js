var piedra, papel, tijera, jugador1, jugador2;

piedra = 1;
papel = 2;
tijera = 3;

jugador1 = 1;
jugador2 = 2;

function (jugador1, jugador2) {
    if (jugador1 === piedra && jugador2 === piedra) {
        console.log("WINNER : EMPATE");
    } else if (jugador1 === piedra && jugador2 === papel) {
        console.log("WINNER : JUGADOR 2");
    } else if (jugador1 === piedra && jugador2 === tijera) {
        console.log("WINNER : JUGADOR 1");
    } else if (jugador1 === papel && jugador2 === piedra) {
        console.log("WINNER : JUGADOR 1");
    } else if (jugador1 === papel && jugador2 === papel) {
        console.log("WINNER : EMPATE");
    } else if (jugador1 === papel && jugador2 === tijera) {
        console.log("WINNER : JUGADOR 2");
    } else if (jugador1 === tijera && jugador2 === piedra) {
        console.log("WINNER : JUGADOR 2");
    } else if (jugador1 === tijera && jugador2 === papel) {
        console.log("WINNER : JUGADOR 1");
    } else if (jugador1 === tijera && jugador2 === tijera) {
        console.log("WINNER : EMPATE");
    } else {
        console.log("Elija una opción válida");
    }