let peso_kg = 74;
let estatura_m = 1.62;

let imc = peso_kg / ( estatura_m * estatura_m );

let conIMCDecimal = imc.toFixed(2); 

console.log(`Peso: ${peso_kg} kilogramos`);
console.log(`Estatura: ${estatura_m} metros`);
console.log( `El índice de masa corporal de la persona es ${conIMCDecimal}` );