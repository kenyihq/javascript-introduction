// For

var nombres = ["Kenyi", "Julberht", "Tutankam0nk"];

function saludar(name) {
    console.log(`Hola ${name}`);
}
for (var i = 0; i < nombres.lenght; i++) {
    saludar(nombres[i]);
}

// While

var names = ["Kenyi", "Julberht", "Tuankam0nk"];

function saludar(name) {
    console.log(`Hola ${name}`);
}

while (names.length > 0) {
    var name = names.shift();
    saludar(name);
}

// Do While

var names = ["Kenyi", "Julberht", "Tuankam0nk"];

function saludar(name) {
    console.log(`Hola ${name}`);
}

do {
    var name = names.shift();
    saludar(name);
} while (names.length > 0)


