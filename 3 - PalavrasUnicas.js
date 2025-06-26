const prompt = require('prompt-sync')();

function palavrasUnicas() {
  console.log("=== Exercício 3: Palavras Únicas ===");
  const frase = prompt("Digite uma frase: ");
  const palavras = frase.toLowerCase().match(/\b\w+\b/g);

  const contagem = {};
  
  for (let i = 0; i < palavras.length; i++) {
    const p = palavras[i];
    if (contagem[p]) {
      contagem[p] = contagem[p] + 1;
    } else {
      contagem[p] = 1;
    }
  }
  
  const unicas = [];
  for (let palavra in contagem) {
    if (contagem[palavra] === 1) {
      unicas.push(palavra);
    }
  }

  console.log(unicas);
}
palavrasUnicas();