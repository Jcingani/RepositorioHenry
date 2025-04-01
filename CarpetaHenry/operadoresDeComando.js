//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//= es asignacion - === igualdad estricta (tipo de dato y valor) == igualdad (solo valor)

//Igualdad vs igualdad estricta 
console.log (3 == 3); // == igual != diferente
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");


//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b; // se sobreescribe el valor de a porque se opera de derecha a izquierda en la asignacion.
console.log (c); 
