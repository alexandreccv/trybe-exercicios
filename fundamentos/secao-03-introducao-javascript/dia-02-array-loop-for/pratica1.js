// IF/ELSE
/*Para fixar
Para fixar, faça os próximos exercícios:

Obtenha o valor “Serviços” do array menu:*/

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices =menu[1];

console.log(menuServices);

// Procure o índice do valor “Portfólio” do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);
// Adicione o valor “Contato” no final do array menu.
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')

console.log(menu);

//FOR
//Para fixar, faça o exercício a seguir:

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}
//FOR/OF
//Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let index of names){
  console.log(index);
}

// WHILE

let counter = 0;

while(counter !== 5) {
  counter += 1;
}


