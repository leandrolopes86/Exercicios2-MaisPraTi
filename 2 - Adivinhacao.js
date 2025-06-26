const prompt = require('prompt-sync')();

function jogoAdivinhacao() {
  console.log("=== Exercício 2: Jogo de Adivinhação ===");
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let chute;

  console.log("Tente adivinhar o número entre 1 e 100.");

  do {
    chute = Number(prompt("Digite seu chute: "));
    tentativas++;

    if (chute < numeroSecreto) {
      console.log("Mais alto.");
    } else if (chute > numeroSecreto) {
      console.log("Mais Baixo.");
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
    }
  } while (chute !== numeroSecreto);
}
jogoAdivinhacao()