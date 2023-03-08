/*function soyAsincrona(miCallback) {
    setTimeout(function () {
        console.log('Estoy siendo asincrona');
        miCallback();
    },1000);
    
}

console.log('Iniciando proceso...');
soyAsincrona(function(){
    console.log('Terminando proceso...');
});*/

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback();
  }, 1500);
}
function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios" + nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
hola("Juan", function () {
  adios("Juan", function () {
    console.log("Terminando proceso...");
  });
});
