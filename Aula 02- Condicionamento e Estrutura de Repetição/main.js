// crie um programa que receba uma altura e um pesso e calcule um IMC, mostrando o resultado para o usuario
// const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
// const peso = parseFloat(prompt("Digite seu peso em kg (ex: 70):"));
//
// if (!altura || !peso) {
//     alert("Por favor, insira valores válidos para altura e peso.");
// } else {
//     const imc = peso / (altura * altura);
//     let classificacao = "";
//
//     if (imc < 18.5) {
//         classificacao = "Abaixo do peso";
//     } else if (imc < 24.9) {
//         classificacao = "Peso normal";
//     } else if (imc < 29.9) {
//         classificacao = "Sobrepeso";
//     } else if (imc < 34.9) {
//         classificacao = "Obesidade grau 1";
//     } else if (imc < 39.9) {
//         classificacao = "Obesidade grau 2";
//     } else {
//         classificacao = "Obesidade grau 3 (mórbida)";
//     }
//
//     alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
// }

// crie um programa que calcule a media de um aluno e converta essa media para um conceito
// mostranddo para o usuario como base a "tabela"  abaixo
// A -> media e maior ou igual que 9
// B -> media e menor ou igual a 9 e maior ou igual a 8
// c -> media e menor ou igual a 8 e maior ou igual a 7
// D -> media e menor ou igual a 7 e e maior ou igual a 5
// E -> abaixo de 5
// desafio : verificar se a anota e valida, ou seja, se ela estar entre 0 e 10
// altere i programa anterior para que eke calcule a media e mostre de 5 alunos
// Pede a primeira nota e valida
// for (let aluno = 1; aluno <= 5; aluno++) {
//     console.log(`\n=== Aluno ${aluno} ===`);
//
//     // Pede a primeira nota e valida
//     let nota1;
//     while (true) {
//         const input1 = prompt(`Digite a primeira nota do aluno ${aluno}:`);
//         if (input1 === null) {
//             console.log("Operação cancelada!");
//             break;
//         }
//         nota1 = parseFloat(input1);
//         if (!isNaN(nota1) && nota1 >= 0 && nota1 <= 10) break;
//         console.log("Nota inválida! Digite um valor entre 0 e 10.");
//     }
//     if (nota1 === undefined) continue;  // Se cancelou, vai para o próximo aluno
//
//     // Pede a segunda nota e valida
//     let nota2;
//     while (true) {
//         const input2 = prompt(`Digite a segunda nota do aluno ${aluno}:`);
//         if (input2 === null) {
//             console.log("Operação cancelada!");
//             break;
//         }
//         nota2 = parseFloat(input2);
//         if (!isNaN(nota2) && nota2 >= 0 && nota2 <= 10) break;
//         console.log("Nota inválida! Digite um valor entre 0 e 10.");
//     }
//     if (nota2 === undefined) continue;  // Se cancelou, vai para o próximo aluno
//
//     // Calcula a média
//     const media = (nota1 + nota2) / 2;
//     console.log(`Média: ${media.toFixed(1)}`);
//
//     // Define o conceito
//     let conceito;
//     if (media >= 9) {
//         conceito = "A";
//     } else if (media >= 8) {
//         conceito = "B";
//     } else if (media >= 7) {
//         conceito = "C";
//     } else if (media >= 5) {
//         conceito = "D";
//     } else {
//         conceito = "F";
//     }
//     console.log(`Conceito: ${conceito}`);
// }
//
// console.log("\nProcessamento concluído para todos os alunos!");


// // Função
// function obterNota(aluno, ordemNota) {
//     while (true) {
//         const input = prompt(`Digite a ${ordemNota} nota do aluno ${aluno}:`);
//         if (input === null) return null;
//         const nota = parseFloat(input);
//         if (!isNaN(nota) && nota >= 0 && nota <= 10) return nota;
//         console.log ("Nota inválida! Digite um valor entre 0 e 10.");
//     }
// }
//
// for (let aluno = 1; aluno <= 5; aluno++) {
//     console.log(`\n=== Aluno ${aluno} ===`);
//
//     const nota1 = obterNota(aluno, "primeira");
//     if (nota1 === null) continue;
//
//     const nota2 = obterNota(aluno, "segunda");
//     if (nota2 === null) continue;
//
//     const media = (nota1 + nota2) / 2;
//     console.log(`Média: ${media.toFixed(1)}`);
//
//     const conceito = media >= 9 ? "A" : media >= 8 ? "B" : media >= 7 ? "C" : media >= 5 ? "D" : "F";
//     console.log(`Conceito: ${conceito}`);
// }

console.log("\nProcessamento concluído para todos os alunos!");


