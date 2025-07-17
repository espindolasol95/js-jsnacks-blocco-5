const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

//in questo snack mi sta chiedendo TUTTI gli oggetti(name) quindi
//anche qua devo utilizare forEach e function in modo di stampare solo ed specificamente 
//i nomi 

people.forEach(function(people){
  console.log(people.name);


})

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'