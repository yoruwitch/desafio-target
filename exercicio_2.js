// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

let word = "verde";

function isThereAnA(word) {
    let sumA = 0;

    for (let letter of word) {
        if (letter == "A" || letter == "a") {
            sumA += 1;
        }
    }

    if (sumA != 0) {
        return `A quantidade de letras "a" é ${sumA}`;
    } else {
        return `Não existe letra A na palavra ${word} `;
    }
}

console.log(isThereAnA(word));
