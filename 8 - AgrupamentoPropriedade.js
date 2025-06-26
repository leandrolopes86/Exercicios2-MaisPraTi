const vendas = [
  { cliente: "Ana Souza", total: 49.90 },
  { cliente: "Carlos Lima", total: 129.90 },
  { cliente: "Beatriz Martins", total: 199.99 },
  { cliente: "Diego Silva", total: 39.90 },
  { cliente: "Fernanda Rocha", total: 299.90 },
  { cliente: "Gustavo Alves", total: 159.90 },
  { cliente: "Juliana Castro", total: 89.90 },
  { cliente: "Lucas Mendes", total: 120.00 },
  { cliente: "Mariana Dias", total: 69.90 },
  { cliente: "Rafael Oliveira", total: 249.90 },

  { cliente: "Ana Souza", total: 100.00 },
  { cliente: "Carlos Lima", total: 50.00 }
];

function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    if (!acumulador[venda.cliente]) {
      acumulador[venda.cliente] = 0;
    }
    acumulador[venda.cliente] += venda.total;
    return acumulador;
  }, {});
}

const resultado = agruparPorCliente(vendas);

console.log("\n Total por cliente:\n");
for (const cliente in resultado) {
  console.log(`${cliente}: R$ ${resultado[cliente].toFixed(2)}`);
}
