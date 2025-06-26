const prompt = require('prompt-sync')();

function fatorial(n) {
  if (n < 0) {
    throw new Error("O fatorial não é válido para números negativos.");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

const entrada = prompt('Qual o número para calcular o fatorial? ');
const numero = Number(entrada); 

try {
  const resultado = fatorial(numero);
  console.log(`📘 O fatorial de ${numero} é: ${resultado}`);
} catch (erro) {
  console.error(`Erro: ${erro.message}`);
}
