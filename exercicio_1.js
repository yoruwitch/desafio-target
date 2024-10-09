// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

let num = 0; // entrada de dados para ser verificada

function seqFibonacci(num) {
    if (num < 1) {
        return "Número inválido!";
    }

    let sum = 0;
    let prevNum = 0;
    let nextNum = 1;

    while (nextNum < num) {
        sum = prevNum + nextNum;
        prevNum = nextNum;
        nextNum = sum;
    }

    if (nextNum === num) {
        return `O número ${num} pertence a esta sequência.`;
    } else {
        return `O número ${num} não pertence a esta sequência.`;
    }
}

console.log(seqFibonacci(num));
