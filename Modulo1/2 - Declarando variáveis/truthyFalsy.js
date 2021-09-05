// Alguns valores são considerados true e false:

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null -> foi definido como nulo, não existete;
// undefined -> não foi definido;

let varUndefined;
let varNull = null;

console.log(typeof varUndefined);
console.log(typeof varNull); //Objeto é uma referencia na memoria, quando não temos mais referencia em um pointer
// ele tem valor nulo, por isso o bug do null ser objeto, pq é como se um objeto perdesse
// a referencia;