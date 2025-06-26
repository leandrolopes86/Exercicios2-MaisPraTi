const prompt = require('prompt-sync')();

function debounce(fn, delay) {
  let timeoutId; 

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args); 
    }, delay);
  };
}

const mostrarMensagem = debounce((texto) => {
  console.log(`\n🟢 Executando função final com o valor: "${texto}"\n`);
}, 2000); // Tempo de espera: 2000ms = 2 segundos

console.log("Digite algo (digite 'sair' para encerrar):");

// Loop principal para capturar entradas do usuário
while (true) {
  const entrada = prompt(">>> "); // Solicita entrada do usuário

  // Se o usuário digitar 'sair', o loop é encerrado
  if (entrada.toLowerCase() === 'sair') {
    console.log("\nEncerrando o programa...");
    break;
  }

  // Exibe mensagem de espera e chama a função com debounce
  console.log("(⏳ Aguardando 2 segundos para processar...)");
  mostrarMensagem(entrada);
}
