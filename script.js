var nombrePersona = "";

function Persona(nombre) {
    this.nombrePersona = nombre;
}

var persona1 = new Persona("Carlos Ocampo");
// console.log(persona1.nombrePersona);



function MostrarNombre(callback) {
    var nombre = "Carlos Ocampo";
    callback(nombre);
}

function Saludar(nombre) {
    console.log('Hola ' + nombre);
}

MostrarNombre(Saludar);

var seconds = 20;
function StartCount() {
    setInterval(function(){
        seconds--;
        ShowSeconds();
    }, 1000);
}

function ShowSeconds() {
    console.log(seconds);
}

StartCount();