const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const findPersonByName = (name) => {
  let person;
  try {
    for (let index = 0; index < clients.length; index += 1) {
      if (clients[index].name === name) {
        person = clients[index];
      }
    }
    if (!person) {
      throw new Error('Pessoa não encontrada, tente novamente');
    }

    console.log(person);

    return `Destinatário: ${person.name}. Endereço: ${person.address.street}, ${person.address.number}, 
    ${person.address.neighborhood}, ${person.address.city} - ${person.address.state}. CEP: ${person.address.cep}`;
  } 
   catch (error) {
    throw error.message;
  }
}

const personInfo = findPersonByName('João da Silva');
console.log(personInfo);


const findPersonByPosition = (position) => {
  try {
    const person = clients[position];
    if (!person) {
      throw new Error('Posição inválida, tente novamente');
    }
    return `Cliente: ${person.name}. email: ${person.email}`;
  } catch (error) {
    return error.message;
  }
};

console.log(findPersonByPosition(5));
console.log(findPersonByPosition(10)); 


const arrayValidation = (array) => {
  if (array.length === 0) {
    throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro');
  }
};

const findPeopleByState = (state) => {
  try {
    let people = [];
    for (let index = 0; index < clients.length; index += 1) {
      if (clients[index].address.state === state) {
        people.push(clients[index].name);
      }
    }
    arrayValidation(people);
    return people;
  } catch (error) {
    return error.message;
  }
};

console.log(findPeopleByState('SP')); // Fluxo completo
console.log(findPeopleByState('AC')); // Fluxo de exceção
