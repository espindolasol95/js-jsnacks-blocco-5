const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

 //in questo caso dobbiamo usare sempre filter ne devo fare due di operazioni una con tutte le 
 // zucchine >15 cm e un altra con le zucchiune <15

 const zucchineLunghe = zucchine.filte(zucchina => zucchina.length >=15);
 console.log(zucchineLunghe);

 const zucchineCorte = zucchine.filter(zucchina => zucchina.length <15)
  console.log(zucchineCorte);

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.