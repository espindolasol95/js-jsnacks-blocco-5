const nums = [2, 8, 4, 7, 12, 87];


// qua dobbiamo usare filter per andare nello specifico su certi numeri del array in 
// questo caso i numeri pari perciò useremmo l'operatore % === 0 che fara una 
// selezione solo de i numeri pari presente nel array
const numeriPari=nums.filter(numero => numero % 2 === 0);
console.log (numeriPari)

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]