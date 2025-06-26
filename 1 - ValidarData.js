const prompt = require('prompt-sync')();

function ehDataValida() {
  console.log("=== Exercício 1: Validar Data ===");
  const data = prompt("Digite uma data no formato dd/mm/aaaa: ");
  const partes = data.split("/");

  if (partes.length !== 3) {
    console.log("Formato inválido.");
    return;
  }

  const [dia, mes, ano] = partes.map(Number);
  const dataObj = new Date(ano, mes - 1, dia);

  if (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes - 1 &&
    dataObj.getDate() === dia
  ) {
    console.log("Data válida.");
  } else {
    console.log("Data inválida.");
  }
}
ehDataValida();