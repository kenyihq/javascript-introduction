// Funcion constructora

function auto (marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
  var autos = [];
  for(var i = 0 ; i < 3 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(var i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }