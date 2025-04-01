//Función: sumaTres 3 formas, las hacen lo mismo
var sumaTres = (x) => {
    return x + 3;
  }

function sumaTres(x){
    return x + 3;
}

var sumaTres = function (x){
    return x + 3;
}


  //Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre); //diferencia en obsidian
    //return nombre;
  }

function otraFuncion(){
    return("el nombre retornado por la funcion 'cuidadoConElConsoleLog' es: "+ cuidadoConElConsoleLog('Juan'))
}

//Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 


