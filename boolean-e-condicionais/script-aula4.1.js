// Boolean (false or true)

var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais com If e Else

if(possuiDoutorado) {
    console.log("Possui graduação e doutorado.");
} else if(possuiGraduacao) {
    console.log("Possui graduação, mas não possui doutorado.");
} else {
    console.log("Não possui graduação.");
}

// Switch - espécie de condicional, "case" verifica se a variável é igual a valor x, break cancela a continuação caso isso seja verídico. O valor "default" ocorre se nenhum "case" for verdadeiro.

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}


// Truthy e Falsy

var nome = ""; // string vazia é dada como falso

if(nome) {
    console.log(nome);
} else {
    console.log("Nome não existe");
}

// Falsy

// if(false)
// if(0)
// if(NaN)
// if(null)
// if(undefined)
// if("")

// todo resto é truthy

var teste0 = 10 - 10;

if(teste0) {
    console.log("é true")
} else {
    console.log("é false")
}

// Operador Lógico de Negação

// o operador ! nega uma operação booleana, ou seja, !true é false, o contrário é verdadeiro.

// if(!true) - false
// if(!1) - false
// if(!'') - true
// if(!undefined) - true
// if(!!' ') - !! modo de verificar o valor, nesse caso, true
// if(!!'') - !! modo de verificar o valor, nesse caso, false

if(!possuiGraduacao) {
    console.log("Não possui graduação.")
} else {
    console.log("Possui graduação.")
}

// Operadores de Comparação


// 10 > 5; true - maior que
// 5 > 10; false - maior que
// 20 < 10; false - menor que
// 10 <= 10; true - menor ou igual
// 10 >= 11; false - maior ou igual

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

// 10 == '10'; true
// 10 == 10; true
// 10 === '10'; false
// 10 === 10; true
// 10 != 15; true
// 10 != '10'; false
// 10 !== '10'; true

var x = 10;

console.log(x == "10"); // true
console.log(x != "10"); // false
console.log(x === "10"); // false
console.log(x !== "10"); // true

// Operadores Lógicos && (e) - sempre retorna o primeiro valor false ou ultimo true

// true && true; true
// true && false; false
// false && true; false
// 'Gato' && 'Cão'; 'Cão' - ultimo valor true
// (5 - 5) && (5 + 5); 0 - primeiro valor false
// 'Gato' && false; false
// (5 >= 5) && (3 < 6); true

if((5 - 5) && (5 + 5)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

if((6 - 10) && (5 + 5)) { // if (-4, true) e (10, true)
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

// Operadores Lógicos || (ou) - retorna o primeiro valor true que encontrar

// true || true; true
// true || false; true
// false || true; true
// 'Gato' || 'Cão'; 'Gato' - primeiro valor true
// (5 - 5) || (5 + 5); 10 - primeiro valor true
// 'Gato' || false; Gato - primeiro valor true
// (5 >= 5) || (3 < 6); true

var condicional = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional); // retorna o 10, primeiro valor true
