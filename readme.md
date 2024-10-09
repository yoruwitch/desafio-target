# Desafio Técnico - Target Sistemas

Desafio desenvolvido por [Evelyn Silva Fernandes](https://www.linkedin.com/in/evelyn-fernandes/) para teste técnico para a vaga de Estagiário em Desenvolvimento na empresa [Target Sistemas](https://targetsistemas.com.br/). O teste foi desenvolvido no dia 09/10/2024, e as questões foram disponibilizadas pela plataforma Gupy.

A linguagem escolhida foi JavaScript, e o teste se encontra em 3 arquivos: este [Readme](/readme.md), o [Exercício 1](/exercicio_1.js) e o [Exercício 2](/exercicio_2.js).

## Exercício 1

A resolução em código encontra-se no arquivo [Exercício 1](/exercicio_1.js).

## Exercício 2

A resolução em código encontra-se no arquivo [Exercício 2](/exercicio_2.js).

## Exercício 3:

Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

-   Resolução:

Inicía-se a repetição com os valores de k = 1 e SOMA = 1, onde os valores do loop são (para K e SOMA) :

K = 2 || SOMA = 2
K = 3 || SOMA = 5
K = 4 || SOMA = 9
K = 5 || SOMA = 14
K = 6 || SOMA = 20
K = 7 || SOMA = 27
K = 8 || SOMA = 35
K = 9 || SOMA = 44
K = 10|| SOMA = 54
K = 11|| SOMA = 65
K = 12 || SOMA = 77

O valor final de soma, após todas as repetições, é *77*.

## Exercício 4:

4. Descubra a lógica e complete o próximo elemento:

   a. 1, 3, 5, 7, __

   b. 2, 4, 8, 16, 32, 64, _

   c. 0, 1, 4, 9, 16, 25, 36, __

   d. 4, 16, 36, 64, __

   e. 1, 1, 2, 3, 5, 8, __

   f. 2,10, 12, 16, 17, 18, 19, __

a. 9 (ímpares).

b. 128 (potências de 2)

c. 49 (quadrados de números naturais)

d. 100 (quadrados de números pares)

e. 13 (sequência de fibonacci)

f. Esta sequência é uma pegadinha. Não há como prever o próximo valor utilizando lógica e matemática, ms, seguindo o padrão dos últimos três números, o próximo número é 20. A resposta "correta" é 200, pois a lógica para definição da sequência são números que começam com a letra 'D'.

## Exercício 5:

5. Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Primeiramente, deve-se ligar um dos interruptores e aguardar algum tempo para que a lâmpada esquente. Depois, ligar um dos interruptores e imediatamente desligar o primeiro interruptor. Assim, poderá ser verificado qual é a sala da primeiro interruptor ou o do segundo na primeira ida, pois se estiver quente pertence ao primeiro e acesa ao segundo.

Por fim, ligar o terceiro interruptor e verificar novamente indo a mais uma sala.
