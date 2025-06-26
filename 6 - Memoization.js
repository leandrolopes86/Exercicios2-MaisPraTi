const prompt = require('prompt-sync')();

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log(`🔁 [CACHE] Resultado já armazenado para argumentos: ${key}`);
      return cache.get(key);
    }

    console.log(` [CALCULANDO] Função chamada com: ${key}`);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function somarLento(a, b) {
  return a + b;
}

const somarMemoizada = memoize(somarLento);

while (true) {
  const entradaA = prompt('Digite o primeiro número (ou "sair"): ');
  if (entradaA.toLowerCase() === 'sair') break;

  const entradaB = prompt('Digite o segundo número: ');
  if (entradaB.toLowerCase() === 'sair') break;

  const a = Number(entradaA);
  const b = Number(entradaB);

  if (isNaN(a) || isNaN(b)) {
    console.log('Entrada inválida. Tente novamente.');
    continue;
  }

  const resultado = somarMemoizada(a, b);
  console.log(`Resultado: ${a} + ${b} = ${resultado}\n`);
}
