//Para FIXAR
//Crie uma variável chamada “currentHour” que receba um número entre 4 e 24,
 //conforme sua escolha, para representar as horas do dia.
 // Crie uma variável chamada “message” que inicialmente seja uma string vazia.
let currentHour = 16;
let message = "";

if(currentHour >= 22){
  message = 'Não deveriamos comer nada ,é hora de dormir';
  console.log(message);
}else if(currentHour >= 18 && currentHour < 22){
  message = 'Rango da noite,vamos jantar :D';
  console.log(message);
}else if (currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde';
  console.log(message);
}else if(currentHour >= 11 && currentHour < 14){
  message = 'Hora do almoço'
  console.log(message);
}else if(currentHour >= 4 && currentHour <= 11){
  message = 'Hmmm,cheiro de café recém-passado';
  console.log(message);
}

/** PARA FIXAR

let weekDay = 'quarta-feira'
if(weekDay === 'segunda-feira' || weekDay === 'terca-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira'){
  console.log('Oba,mais um dia de aprendizado')
}else{
  console.log('FINALMENTE, descanso merecido.')
}*/