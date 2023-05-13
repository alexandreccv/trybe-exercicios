/*Desenvolva cada exercício a seguir com o uso de funções.

Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas 
que:

Adicione um valor ao saldo.
Subtraia um valor do saldo.
Multiplique o valor do saldo por uma taxa.
Divida o valor do saldo
*/

let saldo = 100;

function somaSaldo(valor) {
  return valor + saldo;
};

function subtraiSaldo(valor) {
  return saldo - valor;
};

function multiplicaSaldo(valor) {
  return valor * saldo;
};

function divideSaldo(valor) {
  return saldo / valor;
};

console.log(somaSaldo(300)); // 400
console.log(subtraiSaldo(50)); // 50
console.log(multiplicaSaldo(2)); // 200
console.log(divideSaldo(5)); // 20


/**
 * Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um 
 * parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
 */
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(cliente) {
  if (typeof cliente === 'string') {
    clientesTrybeBank.push(cliente);
    return 'Cliente adicionada(o) com sucesso!';
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}


console.log(adicionaCliente(true)); // O parâmetro passado deve ser do tipo "string"
console.log(adicionaCliente('Joaquim')); // Cliente adicionada(o) com sucesso
console.log(clientesTrybeBank); // [ 'Ada', 'John', 'Gus', 'Joaquim' ]

/**
 * Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se 
 * de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo 
 * string e caso o(a) cliente não exista dentro do array
 */

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrada(o)'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
};

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]

/*
Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrado'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
};
*/

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
  } else {
    return true;
  }
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = clienteIndex(cliente);
  if (index === false) {
    return 'Cliente não encontrada(o).'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
}

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]