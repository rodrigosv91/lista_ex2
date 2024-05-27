// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas e o número de vendas por vendedor.

function sumarizarVendasPorVendedor(vendas) {
  const sumario = {};
  for (const venda of vendas) {
    const { vendedor, valor } = venda;
    if (sumario.hasOwnProperty(vendedor)) {
      sumario[vendedor].totalVendas += valor;
      sumario[vendedor].quantidadeVendas++;
    } else {
      sumario[vendedor] = {
        totalVendas: valor,
        quantidadeVendas: 1,
      };
    }
  }
  return sumario;
}

const vendas = [
  { vendedor: "Alice", valor: 100 },
  { vendedor: "Bob", valor: 200 },
  { vendedor: "Alice", valor: 150 },
  { vendedor: "Bob", valor: 250 },
  { vendedor: "Charlie", valor: 300 },
];

const sumarioVendas = sumarizarVendasPorVendedor(vendas);

console.log(sumarioVendas); // Deve imprimir { Alice: { totalVendas: 250, quantidadeVendas: 2 }, Bob: { totalVendas: 450, quantidadeVendas: 2 }, Charlie: { totalVendas: 300, quantidadeVendas: 1 } }
