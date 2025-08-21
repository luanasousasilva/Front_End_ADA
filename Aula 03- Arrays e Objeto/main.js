// // Crie um programa que receba uma altura e um peso e calcule um IMC, mostrando o
// // resultado para o usuário.
// // IMC = Peso/Altura^2

// const peso = parseFloat(prompt("Digite o seu peso:"));
// const altura = parseFloat(prompt("Digite a sua altura:"));

// const imc = peso/altura**2;

// // Abaixo temos três maneiras de "printar" o texto para o usuário
// alert(`O seu IMC é ${imc.toFixed(2)}.`);
// //alert("O seu IMC é " + imc.toFixed(2));
// //console.log("O seu IMC é", imc.toFixed(2));

// // Vamos considerar a classificação do IMC

// // Maior que >
// // Maior ou igual >=
// // Menor que <
// // Menor ou igual <=
// // Igual (só checa valor) ==
// // Igual (checa tipo e valor) ===
// // Diferente !=

// // Podemos programar desta maneira, porém ainda NÃO É A MELHOR
// if (imc <= 18.5) {
//     alert("Você está abaixo do peso ideal.");
// } else if (imc > 18.5 && imc < 25) {
//     alert("Você está no seu peso ideal. Parabéns!");
// } else if (imc >= 25 && imc < 30) {
//     alert("Você está com sobrepeso.");
// } else if (imc >= 30 && imc < 35) {
//     alert("Você está com obesidade grau I.");
// } else if (imc >= 35 && imc < 40) {
//     alert("Você está com obesidade grau II.");
// } else {
//     alert("Você está com obesidade grau III.");
// }

// // Esta versão é a melhor versão do código
// if (imc <= 18.5) {
//     alert("Você está abaixo do peso ideal.");
// } else if (imc < 25) {
//     alert("Você está no seu peso ideal. Parabéns!");
// } else if (imc < 30) {
//     alert("Você está com sobrepeso.");
// } else if (imc < 35) {
//     alert("Você está com obesidade grau I.");
// } else if (imc < 40) {
//     alert("Você está com obesidade grau II.");
// } else {
//     alert("Você está com obesidade grau III.");
// }

// // Crie um programa que calcule a média de um aluno e converta essa média para um conceito,
// // mostrando para o usuário com base na "tabela" abaixo
// // A -> média é maior ou igual que 9
// // B -> média é menor que 9 e maior ou igual a 8
// // C -> média é menor que 8 e maior ou igual a 7
// // D -> média é menor que 7 e maior ou igual a 5
// // F -> abaixo de 5
// // Desafio: Garantir que a nota seja válida, ou seja, se ela está entre 0 e 10

// // O exemplo abaixo, com o uso de while, indica a aplicação de uma repetição indeterminada

// // Passo 1: Inicializo a variável
// let nota1 = parseFloat(prompt("Digite a sua primeira nota (valores de 0 a 10):"));

// // Passo 2: Comparo a variável com os valores de referência
// while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
//     console.log("Nota inválida!");

//     // Passo 3: Atualizar o valor da minha variável
//     nota1 = parseFloat(prompt("Digite a sua primeira nota novamente (valores de 0 a 10):"));
// }

// let nota2 = parseFloat(prompt("Digite a sua segunda nota:"));
// while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
//     console.log("Nota inválida!");
//     nota2 = parseFloat(prompt("Digite a sua primeira nota novamente:"));
// }

// const media = (nota1 + nota2)/2

// if (media >= 9)
//     console.log("Conceito A");
// else if (media >= 8)
//     console.log("Conceito B");
// else if (media >= 7)
//     console.log("Conceito C");
// else if (media >= 5)
//     console.log("Conceito D");
// else
//     console.log("Conceito F");

// // Altere o programa anterior para que ele calcule a média e mostre o conceito de 5 alunos
// // O exemplo abaixo, com o uso de while, indica a aplicação de uma repetição determinada

// // Passo 1: Inicializar
// let contador = 0;

// // Passo 2: Comparar
// while (contador < 5) {
//     let nota1 = parseFloat(prompt("Digite a sua primeira nota (valores de 0 a 10):"));
//     while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
//         console.log("Nota inválida!");
//         nota1 = parseFloat(prompt("Digite a sua primeira nota novamente (valores de 0 a 10):"));
//     }

//     // Se fossemos usar for ficaria desta maneira:
//     // for (;isNaN(nota1) || nota1 < 0 || nota1 > 10;) {
//     //     console.log("Nota inválida!");
//     //     nota1 = parseFloat(prompt("Digite a sua primeira nota novamente (valores de 0 a 10):"));
//     // }

//     let nota2 = parseFloat(prompt("Digite a sua segunda nota:"));
//     while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
//         console.log("Nota inválida!");
//         nota2 = parseFloat(prompt("Digite a sua primeira nota novamente:"));
//     }

//     const media = (nota1 + nota2)/2

//     if (media >= 9)
//         console.log("Conceito A");
//     else if (media >= 8)
//         console.log("Conceito B");
//     else if (media >= 7)
//         console.log("Conceito C");
//     else if (media >= 5)
//         console.log("Conceito D");
//     else
//         console.log("Conceito F");

//     // Passo 3: Atualizar
//     contador++; // contador = contador + 1, contador += 1
// }

// // Existe uma outra estrutura de repetição mais "enxuta"
// for (let contador = 0; contador < 5; contador++) {
//     let nota1 = parseFloat(prompt("Digite a sua primeira nota (valores de 0 a 10):"));

//     while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
//         console.log("Nota inválida!");
//         nota1 = parseFloat(prompt("Digite a sua primeira nota novamente (valores de 0 a 10):"));
//     }

//     let nota2 = parseFloat(prompt("Digite a sua segunda nota:"));
//     while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
//         console.log("Nota inválida!");
//         nota2 = parseFloat(prompt("Digite a sua primeira nota novamente:"));
//     }

//     const media = (nota1 + nota2)/2

//     if (media >= 9)
//         console.log("Conceito A");
//     else if (media >= 8)
//         console.log("Conceito B");
//     else if (media >= 7)
//         console.log("Conceito C");
//     else if (media >= 5)
//         console.log("Conceito D");
//     else
//         console.log("Conceito F");
// }

// // Será que eu consigo separar esse código em "pedaços"?

// // Exemplo de função simples, com retorno
// // f(x) = x^2 + 1

// // Definição de uma função
// function elevaAoQuadradoESomaUm(x) {
//     return x**2 + 1;
// }

// // Chamada de uma função
// console.log(elevaAoQuadradoESomaUm(2));

// Exemplo de função aplicada ao nosso contexto
function converteNotaParaConceito(nota) {
    if (nota >= 9)
        return "A";
    else if (nota >= 8)
        return "B";
    else if (nota >= 7)
        return "C";
    else if (nota >= 5)
        return "D";

    return "F";
}

function exibeDadosAluno(nota1, nota2, media, conceito) {
    console.log(`Aluno com G1=${nota1} e G2=${nota2}, obteve média final igual a ${media} e conceito de ${conceito}.`)
}

// Exemplo de passagem de parâmetro opcional (com valor default) para uma função
// Lembrete: Começar SEMPRE com os parâmetros obrigatórios e deixar os opcionais por último
function calculaMedia(nota1, nota2, nota3=-1) {
    if (nota3 == -1) return (nota1 + nota2)/2;

    return (nota1 + nota2 + nota3)/3;
}

// Exemplo de uso do if-else ternário
function calculaMediaBoladona(nota1, nota2, nota3=-1) {
    return (nota3 == -1)? (nota1 + nota2)/2 : (nota1 + nota2 + nota3)/3;
}

// // Existe uma outra estrutura de repetição mais "enxuta"
// for (let contador = 0; contador < 5; contador++) {
//     let nota1 = parseFloat(prompt("Digite a sua primeira nota (valores de 0 a 10):"));
//     while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
//         console.log("Nota inválida!");
//         nota1 = parseFloat(prompt("Digite a sua primeira nota novamente (valores de 0 a 10):"));
//     }

//     let nota2 = parseFloat(prompt("Digite a sua segunda nota:"));
//     while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
//         console.log("Nota inválida!");
//         nota2 = parseFloat(prompt("Digite a sua primeira nota novamente:"));
//     }

//     let nota3 = parseFloat(prompt("Digite a sua segunda nota:"));
//     while (isNaN(nota3) || nota3 < 0 || nota3 > 10) {
//         console.log("Nota inválida!");
//         nota3 = parseFloat(prompt("Digite a sua primeira nota novamente:"));
//     }

//     const media = calculaMedia(nota1, nota2, nota3);

//     const conceito = converteNotaParaConceito(media);

//     exibeDadosAluno(nota1, nota2, media, conceito);
// }

// Arrays como conjunto de dados
const arrayNotas = [3.4, 5.6, 3.2, 7.8, 8.9, 5.7, 0.9, 6.5, 2.3, 7.6, 9.3];

// Acessar valores do meu array de notas
console.log(arrayNotas[0]);
console.log(arrayNotas[5]);

// Acessar as posições em ordem
for (let i = 0; i < arrayNotas.length; i++) {
    console.log(arrayNotas[i]);
}

// Encontrar a menor nota da turma
let menorNota = arrayNotas[0];
for (let i = 1; i < arrayNotas.length; i++) {
    if (arrayNotas[i] < menorNota) {
        menorNota = arrayNotas[i];
    }
}
console.log(`A menor nota é ${menorNota}.`);

// Spread/Rest Operator
console.log("Esse é o console.log sem o spread:", arrayNotas);
console.log("Esse é o console.log com o spread:", ...arrayNotas);

// Abaixo segue a forma INCORRETA de se copiar um array para outro
const arrayNotasCopiao = arrayNotas;

arrayNotasCopiao.push(4.9);
console.log("Array Notas Copião: ", arrayNotasCopiao);
console.log("Array Notas: ", arrayNotas);

// Abaixo segue a forma CORRETA de se copiar um array para outro
const arrayNotasCopiaValores = [...arrayNotas];

// Esse operador pode ser aplicado em parâmetros de funções também
function calculaMediaSpread(...arrayValores) {
    let somaMedias = 0;
    for (let i=0; i < arrayValores.length; i++) {
        somaMedias = somaMedias + arrayValores[i];
    }
    return somaMedias/arrayValores.length;
}

console.log("Esse é o resultado da função 'calculaMediaSpread':", calculaMediaSpread(3.9, 4.2, 5.1, 6.4, 7.8, 5.6, 2.4, 10, 9.8))

// Outras formas de percorrer um array:

// Percorrendo os valores (ou seja, 'nota' assume cada valor dentro do meu arrayNotas)
console.log("\n-----------------> Usando for..of")
for (let nota of arrayNotas) {
    console.log(nota);
}

// Percorrendo os índices (ou seja, 'indice' assume cada valor do índice do meu arrayNotas)
console.log("\n-----------------> Usando for..in")
for (let indice in arrayNotas) {
    console.log(indice, arrayNotas[indice]);
}

// Como eu atualizo a informação de um elemento do meu array?
arrayNotas[2] = 3.5;

// Okay, mas como faz para eu remover um elemento de um array?

console.log("Segue o último elemento do meu array:", arrayNotas.pop());
console.log("Seguem o elemento deletado da posição 4:", arrayNotas.splice(4, 1));

// Mostrando o array de notas após remoções
console.log(arrayNotas);

// Mostrando uma "fatia" desse array
console.log(arrayNotas.slice(2, 6));

// // Como obter um array de médias e posteriormente mostrar a média da turma?
// function calculaMediaArray(arrayValores) {
//     let somaMedias = 0;
//     for (let i=0; i < arrayValores.length; i++) {
//         somaMedias = somaMedias + arrayValores[i];
//     }
//     return somaMedias/arrayValores.length;
// }

// const arrayMedias = [];
// for (let contador = 0; contador < 5; contador++) {
//     let nota1 = parseFloat(prompt("Digite a sua primeira nota (valores de 0 a 10):"));
//     while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
//         console.log("Nota inválida!");
//         nota1 = parseFloat(prompt("Digite a sua primeira nota novamente (valores de 0 a 10):"));
//     }

//     let nota2 = parseFloat(prompt("Digite a sua segunda nota:"));
//     while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
//         console.log("Nota inválida!");
//         nota2 = parseFloat(prompt("Digite a sua primeira nota novamente:"));
//     }

//     let nota3 = parseFloat(prompt("Digite a sua terceira nota:"));
//     while (isNaN(nota3) || nota3 < 0 || nota3 > 10) {
//         console.log("Nota inválida!");
//         nota3 = parseFloat(prompt("Digite a sua primeira nota novamente:"));
//     }

//     const media = calculaMedia(nota1, nota2, nota3);

//     arrayMedias.push(media);

//     const conceito = converteNotaParaConceito(media);

//     exibeDadosAluno(nota1, nota2, media, conceito);
// }

// const mediaTurma = calculaMediaArray(arrayMedias);

// console.log(`A média da turma ;é ${mediaTurma}.`);