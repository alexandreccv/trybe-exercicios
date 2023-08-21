const { encode, decode } = require('./encodeDecode.js');

describe('Testa as funções encode e decode', () => {
  //  Teste se encode e decode são funções.
  test('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  test('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  test('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  test('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  test('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  test('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  test('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  test('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });

  test('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  test('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  test('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  test('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  test('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  test('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  test('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});


 
