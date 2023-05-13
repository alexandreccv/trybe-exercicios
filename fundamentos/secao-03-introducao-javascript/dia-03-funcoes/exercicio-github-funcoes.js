// Requisito 1 - Crie a função verificaPalindromo
function verificaPalindromo(palavra){
  let aoContrario = palavra.split('').reverse().join('');
    if (palavra === aoContrario) {
      return true;
    }else {
      return false;
    }
  }
// Requisito 2 - Crie a função indiceDoMaior
function indiceDoMaior(array){
  let maiorValor = 0;
  for (let index = 1; index < array.length; index += 1) {
    if(array[index] > array[maiorValor]){
      maiorValor = index;
    }
  }
  return maiorValor;
}

// Requisito 3 - Crie a função indiceDoMenor
function indiceDoMenor(array){
  let menorValor = 0;
  for (let index = 1; index < array.length; index += 1) {
    if(array[index] < array[menorValor]){
      menorValor = index;
    }
  }
  return menorValor;
}

// Requisito 4 - Crie a função maiorPalavra
function maiorPalavra(array){
  let maisCaracteres = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maisCaracteres.length){
    maisCaracteres = array[index];
  }
}
return maisCaracteres;
}
// Requisito 5 - Crie a função maisRepetido
function maisRepetido(array) {
  let contador = {};
  let maximo = 0;
  let numeroMaisRepetido = null;

  for (let index = 0; index < array.length; index += 1) {
    let num = Number(array[index]);

  if (!isNaN(num)) 
    contador[num] = (contador[num] || 0) + 1;

  if (contador[num] > maximo) {
        maximo = contador[num];
        numeroMaisRepetido = num;
      }
    }
    return numeroMaisRepetido;
  }

// Requisito 6 - Crie a função somatorio
function somatorio(numero) {
  if (numero < 0) {
    return "ERRO";
  } else {
    let soma = 0;
    for (let index = 1; index <= numero; index += 1) {
      soma += index;
    }
    return soma;
  }
}


// Requisito 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(palavra1,palavra2){
  if(palavra2.length > palavra1.length){
    return false;
  }else{
    return palavra1.endsWith(palavra2);
  }
}

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};
