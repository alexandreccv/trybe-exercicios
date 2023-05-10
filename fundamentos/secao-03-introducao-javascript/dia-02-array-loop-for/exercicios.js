/**
 * 
🚀 Lidando com arrays








 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let higherNumber = numbers[0];

// Some todos os valores contidos no array e imprima o resultado.
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index]; 
}
//Utilizando for, descubra o maior valor contido no array e imprima-o.
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

//Calcule e imprima a média aritmética dos valores contidos no array.
let media = sum / numbers.length;

//Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 
//20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da 
//média aritmética é menor ou igual a 20”.

if(media > 20 ){
  console.log('O valor da média aritmética é maior que 20');
}else{
  console.log('“O valor da média aritmética é menor ou igual a 20”.');
}

console.log(`A soma de todos os valores do array numbers é: ${sum}`);
// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
console.log(`Os valores contidos no array sao: ${numbers}`);
console.log(`A media dos valores do array é: ${media}`);
console.log(`O maior numero é: ${higherNumber}`);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: 
// “Nenhum valor ímpar encontrado”.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

//  Utilizando for, descubra o menor valor contido no array e imprima-o.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// O valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso o valor 1 fosse atribuído à variável, o algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema, inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar com index = 1.

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);


// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};

//crie um algoritmo que imprima na tela o fatorial de 10.

Solução:

Copiar
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra 
//“banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está 
//funcionando corretamente.

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

/**
 * Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e 
 * outro que imprima a menor. Considere o número de caracteres de cada palavra.
 */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

/**
 * Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
 * Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
 */

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);