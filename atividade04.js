let nomes = ["Bruno", "Caio", "Helena", "Dudu", "Harlen", "Erick"];

console.log("Segundo nome:", nomes[1]);

nomes.push("Gabrielly");
nomes.unshift("Eduarda");
console.log("Array após adicionar outros nomes:", nomes);

nomes.pop();
console.log("Array após remover o último nome:", nomes);


let numeros = [3, 7, 8, 12,16];

let dobrados = numeros.map(num => num * 2);
console.log("Valores dobrados:", dobrados);

let pares = numeros.filter(num => num % 2 === 0);
console.log("Valores pares", pares);

let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Valores somados:", soma);