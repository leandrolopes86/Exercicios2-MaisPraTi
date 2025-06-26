const produtos = [
  { nome: "Camiseta", preco: 49.90 },
  { nome: "Calça Jeans", preco: 129.90 },
  { nome: "Tênis", preco: 199.99 },
  { nome: "Boné", preco: 39.90 },
  { nome: "Relógio", preco: 299.90 },
  { nome: "Mochila", preco: 159.90 },
  { nome: "Fone de Ouvido", preco: 89.90 },
  { nome: "Óculos de Sol", preco: 120.00 },
  { nome: "Carteira", preco: 69.90 },
  { nome: "Jaqueta", preco: 249.90 }
];

function ordenarPorPrecoCrescente(produtos) {
  return [...produtos].sort((a, b) => a.preco - b.preco);
}

function ordenarPorPrecoDecrescente(produtos) {
  return [...produtos].sort((a, b) => b.preco - a.preco);
}

function exibirProdutos(lista) {
  lista.map((produto, index) => {
    console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
  });
}

function nomesOrdenadosPorPreco(produtos) {
  const ordenados = ordenarPorPrecoCrescente(produtos); 
  return ordenados.map(produto => produto.nome);        
}

const nomes = nomesOrdenadosPorPreco(produtos);
console.log("\n🛍️ Nomes dos produtos ordenados por preço crescente:\n");
nomes.forEach((nome, i) => console.log(`${i + 1}. ${nome}`));
