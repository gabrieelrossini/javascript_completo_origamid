var nome = "André";
var idade = 28;
var simbolo = Symbol();

console.log(typeof nome, typeof idade, typeof simbolo);

var nome = "André";
var sobrenome = "Rafael";
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";

console.log(typeof frase, frase);

// podemos usar Template String

var faculdade = "segunda"
var frase2 = `Estou na ${faculdade} faculdade`;

console.log(frase2);