//var -> Podemos usar a var antes de declarar, pois o JS carrega todas as var antes de rodar.
//O problema é que, por causa disso, pode ser que a gnt use o mesmo nome de var sem perceber;

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

//let -> Não permite uso antes de declaração, e contas que usam let necessitam ser declaradas. let é de escopo restrito
// ou seja, se eu declarar area2 dentro do if, ele morre dentro do if, e eu posso usar outra let fora do if sem intereferir
// no resultado

let forma = 'retangulo123'
let altura2 = 5;
let comprimento2 = 7;
let area2;
if (forma === 'retangulo') {
    area2 = altura * comprimento;
} else {
    area2 = (altura * comprimento) / 2;
}

console.log(area2);

//const -> constante;