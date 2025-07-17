const numbers = [2, 8, 4, 7, 2, 87];

//qu devo utilizzare MAP perche mi crea una copia del array 
// esistente a qui posso andare a modificare aggiungendo un +1 per incrementare i numeri 

const incremento = numbers.map (number => number + 1 );
console.log(incremento)

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

