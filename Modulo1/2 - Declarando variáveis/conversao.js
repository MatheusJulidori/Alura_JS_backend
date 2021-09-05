const numero = 456;
const numeroString = "456";

console.log("numero == numeroString" + (numero == numeroString));
console.log("numero === numeroString" + (numero == numeroString));
//=== não converte, == converte os valores pra tipos iguais pra comparar;

console.log(numero + numeroString); // Conversão implicita 
console.log(numero + Number(numeroString)); // Conversão explicita 
console.log(String(numero) + numeroString);