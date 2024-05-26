// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

const obj2 = {
  idade: 25,
  email: "joao@example.com",
};

const objCombinado = combinarObjetos(obj1, obj2);

console.log(objCombinado);
