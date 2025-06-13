// Questão 1: Escreva um código que verifique se um número é positivo. Caso contrário, mostre que ele é negativo.

// Passo 1. Solicitar um número ao usuário
// Passo 2. Verificar se o número é positivo ou negativo
// Passo 3. Exibir o resultado

// let num = parseFloat(prompt('Digite um número: '));

// if (num < 0){
//     alert(`O número ${num} é negativo.`);
// }else if (num === 0){
//     alert(`O número ${num} é nulo.`);
// }else{
//     alert(`O número ${num} é positivo.`)
// }

// Solicite o horário atual ao usuário e retorne uma saudação adequada.

// const hora = parseInt(prompt('Informe a hora atual (0-23):'));

// if (hora < 12){
//     alert("Bom dia!");
// }else if (hora < 18){
//     alert("Boa tarde!");
// }else {
//     alert("Boa noite!");
// }

// ========== Laços de Repetição: ===========

// for (let i=10; i > 0; i--){
//     console.log(`Número: ${i}`);
// }

// Peça um valor ao usuário e imprima uma sequência de números de 1 até o valor informado.

let num = parseInt(prompt('Digite um número inteiro maior do que 1: '));

for (let i=1; i <= num; i++){
    console.log(`Número: ${i}`);
}