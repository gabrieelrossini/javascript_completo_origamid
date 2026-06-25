// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // resp : 35

// Crie duas expressões que retornem NaN

var exp1 = "isso é uma string" * 4;
var exp2 = "32 kg" / 4;

console.log(isNaN(exp1));
console.log(isNaN(exp2));

// Somar a string '200' com o número 50 e retornar 250

var somar = +"200" + 50;
console.log(somar);

// Incremente o número 5 e retorne o seu valor incrementado

var cinco = 5;
console.log(++cinco);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// resp: apenas fazer a conta antes de concatenar com a string kg

var pesoPorDois = +numero / 2 + unidade;
console.log(pesoPorDois);