const dados = [
  ["nome", "Lucas"],
  ["idade", 28],
  ["profissao", "Desenvolvedor"],
  ["cidade", "São Paulo"],
  ["ativo", true]
];

function paresParaObjeto(array) {
  return Object.fromEntries(array);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const objeto = paresParaObjeto(dados);
console.log('Objeto:', objeto);

const pares = objetoParaPares(objeto);
console.log('Array de pares:', pares);
