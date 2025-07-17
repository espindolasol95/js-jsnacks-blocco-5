const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];


//in questo caso andiamo a prenedre lo studente con id 2 usando find visto che mi trova
// il primo elemento que rispetta quella condizione la conzione sarà id===2

const secondoStudente= students.find (studente => studente.id===2);
console.log(secondoStudente);



// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }