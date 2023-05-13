// Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
};
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; 

//Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para 
//imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log(` A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

//Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa 
//chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.

//Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte 
//formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
//Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: 
//“A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.
console.log(` A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`);
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);


//Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx 
//pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let name in names) {
  console.log(`Olá,${names[name]}`);
}

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let chave in car) {
  console.log(chave + ':' + car[chave]);
}

//  Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos 
//abordados no conteúdo.


let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(student, `nome`, `Fulano da Silva`);
addProperty(student, `email`, `exemplo-fulano.silva@email.com`);
addProperty(student, `telefone`, `11 1111-1111`);
addProperty(student, `github`, `github.com/exemplo-fulano-da-silva`);
addProperty(student, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);
console.log(student);

/**
 * Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato 
 * “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta 
 * a seguir e compare-a com sua solução.
 */

let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

function listSkills(student) {
  let arrayOfSkills = Object.keys(student);
  for (let index in arrayOfSkills) {
    console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

/**
 * Para fixar melhor o conteúdo abordado, observe, a seguir, mais um exemplo em que foram implementadas, de modos diferentes, 
 * duas funções que retornam a mesma lista de valores. Perceba como fica muito mais fácil obter os valores de um objeto com o 
 * uso do Object.values.
*/

let student = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskill: 'Ótimo',
};

function listSkillsValuesWithFor(student) {
  let skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

function listSkillsValuesWithValues(student) {
  return Object.values(student);
}

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));
 


let countries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};
let pairKeyValue = Object.entries(countries);
console.log(pairKeyValue);
// Observe que o retorno da variável pairKeyValue é um array. Cada um dos elementos é outro array com apenas dois dados: a 
//chave da propriedade e seu valor.

//Para ver os valores separadamente, adicione o for abaixo do código anterior e execute-o novamente:


for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
