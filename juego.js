var piedrasPapelTijeras = {
    // Marcador del juego
    puntoMaquina: 0,
    puntoUsuario: 0,
  
    mostrarMarcador: function () {
      console.log(`Maquina: ${this.puntoMaquina} - Usuario: ${this.puntoUsuario}`)
    },
  
    // Opciones Validas
    opciones: ["piedra", "papel", "tijeras"],
  
    // Mostrar opciones validas
    mostrarOpciones: function () {
      for (var opcion of this.opciones) {
        console.log(`"${opcion}"`);
      }
    },
  
    // --------AQUI COMIENZA EL JUEGO----------//
    // entrada de la maquina
    maquina: "",
    // entrada del usuario
    usuario: "",
  
    validarMaquina: -1,
    validarUsuario: -1,
  
    // Funcion principal
    jugar: function () {
  
      while ((this.puntoMaquina < 10) && (this.puntoUsuario < 10)) {
        console.log("¡A jugar!");
        // Asinga un valor aleatorio a la entrada de maquina
        this.maquina = this.opciones[Math.round(Math.random() * 3)];
        // Asinga un valor aleatorio a la entrada de usuario
        this.usuario = this.opciones[Math.round(Math.random() * 3)];
        // Muestra las entradas
        console.log(`Maquina: ${this.maquina}`);
        console.log(`Usuario: ${this.usuario}`);
        // busca las entradas en las opciones validas
        this.validarMaquina = this.opciones.indexOf(this.maquina);
        this.validarUsuario = this.opciones.indexOf(this.usuario);
  
        // Revisa si las entradas son opciones validas
        if ((this.validarMaquina >= 0) && (this.validarUsuario >= 0)) {
          switch (true) {
  
            // valida si hay empate
            case (this.maquina === this.usuario):
              console.log("Hay un empate");
              this.mostrarMarcador();
              this.jugar();
              break;
              //casos donde gana la maquina
            case (((this.maquina === "piedra") && (this.usuario === "tijeras")) ||
              ((this.maquina === "papel") && (this.usuario === "piedra")) ||
              ((this.maquina === "tijeras") && (this.usuario === "papel"))):
  
              console.log("La maquina ha ganado");
              this.puntoMaquina++;
              this.mostrarMarcador();
              this.jugar();
              break;
  
            default: //si la maquina no gano, el usuario si
  
              console.log("El usuario ha ganado");
              this.puntoUsuario++;
              this.mostrarMarcador();
              this.jugar();
          }
        } else {
          console.log(`Opcion no valida ingresa una de las siguientes opciones:`);
          this.mostrarOpciones();
          this.jugar();
        }
      }
  
  
    },
    // Resultados
    resultados: function () {
      this.puntoMaquina == 10 ? console.log("Lo siento la Maquina ha ganado :(") : console.log("¡Felicidades eres el campeón del juego!");
    }
  }
  
  piedrasPapelTijeras.jugar();
  piedrasPapelTijeras.resultados();