// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

function aplicarFuncaoEmPropriedades(objeto, funcao) {
  const novoObjeto = {};
  for (const chave in objeto) {
    if (objeto.hasOwnProperty(chave)) {
      novoObjeto[chave] = funcao(objeto[chave]);
    }
  }
  return novoObjeto;
}

// Função que converte strings para maiúsculas
function converterParaMaiusculas(valor) {
  return typeof valor === "string" ? valor.toUpperCase() : valor;
}

const objetoDeEntrada = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

const novoObjeto = aplicarFuncaoEmPropriedades(
  objetoDeEntrada,
  converterParaMaiusculas
);

console.log(novoObjeto);
