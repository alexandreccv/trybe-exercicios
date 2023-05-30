/**Para fixar

Utilizando o fluxo de exceção no exemplo do Trybe Sporting Goods
Crie a função checkValidRange, que deverá ser responsável por verificar se o valor inserido no input de número está no intervalo
 de 1 a 10.
Para praticar, considere o exemplo de um boletim escolar
Implemente uma lógica que verifique a média da pessoa estudante. Para isso, considere as seguintes informações:
Escreva uma função que receba, como parâmetro, 4 valores do tipo number. Caso o valor recebido como parâmetro não seja do tipo 
number, lance uma exceção.
Lembre-se de quebrar problemas grandes em partes menores, a fim de facilitar sua manutenção e seu entendimento.
De olho na dica 👀: Aproveite para colocar em prática o uso do throw e try/catch. */

checkValidRange(number);

const checkValidRange = (number) => {
  if (number < 1 || number > 10) {
    throw new Error('É necessario digitar um número entre 1 e 10');
  }
}

const validateAverage = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    throw new Error('Atenção! Os valores devem ser numéricos');
  }
}

const calculateAverage = (n1, n2, n3, n4) => {
  try {
    validateAverage(n1, n2, n3, n4);
    let sum = n1 + n2 + n3 + n4;
    let media = sum / 4;
    return media;
  } catch (error) {
    return error.message;
  }  
}
console.log(calculateAverage(5, 6, 7, '8')) // Atenção! Os valores devem ser numéricos