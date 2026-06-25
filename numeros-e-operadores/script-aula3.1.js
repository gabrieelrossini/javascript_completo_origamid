var eNumero = 2e3; // eN (N adiciona N número até 15)

console.log(eNumero);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// detalhe para + (concatenação) em strings!!

// Operadores Aritméticos (Strings)

var soma = "100" + 50; // 10050 (se torna string)
var subtracao = "100" - 50; // 50 (se torna numero)
var multiplicacao = "100" * "2"; // 200 (se torna numero)
var divisao = "Comprei 10" / 2; // NaN (Not a Number)

console.log(isNaN(divisao));

// a linguagem tenta converter strings em números para fazer a operação

// A ordem aritmética é a mesma da matemática

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Operadores Aritméticos Unários

var x = 5;
console.log(x++); // 5
console.log(x); // 6

var x2 = 5;
++x2; // 6
x2; // 6

// O + e o - tentam transformar o valor seguinte em um número

var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (number)
-idade; // -28 (number)
console.log(+idade + 5); // 33 (number)

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1