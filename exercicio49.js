function agruparTransacoesPorCategoria(transacoes) {
  const categorias = {};

  transacoes.forEach((transacao) => {
    const { categoria, valor } = transacao;

    if (!categorias[categoria]) {
      categorias[categoria] = {
        transacoes: [],
        subtotal: 0,
      };
    }
    categorias[categoria].transacoes.push(transacao);

    categorias[categoria].subtotal += valor;
  });

  return categorias;
}

// Transações
const transacoes = [
  { id: 1, valor: 100, data: "2024-05-01", categoria: "Alimentação" },
  { id: 2, valor: 50, data: "2024-05-02", categoria: "Transporte" },
  { id: 3, valor: 200, data: "2024-05-03", categoria: "Alimentação" },
  { id: 4, valor: 150, data: "2024-05-04", categoria: "Lazer" },
  { id: 5, valor: 120, data: "2024-05-05", categoria: "Transporte" },
];

const transacoesPorCategoria = agruparTransacoesPorCategoria(transacoes);

//imprime todos
for (const categoria in transacoesPorCategoria) {
  console.log(categoria + ":");
  transacoesPorCategoria[categoria].transacoes.forEach((transacao) => {
    console.log(JSON.stringify(transacao, null, 2));
  });
  console.log("Subtotal:", transacoesPorCategoria[categoria].subtotal);
  console.log();
}
