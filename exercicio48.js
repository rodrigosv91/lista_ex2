function combinarInventarios(inventarioLojaA, inventarioLojaB) {
  const inventarioCombinado = { ...inventarioLojaA };

  for (const item in inventarioLojaB) {
    if (inventarioCombinado.hasOwnProperty(item)) {
      inventarioCombinado[item] += inventarioLojaB[item];
    } else {
      inventarioCombinado[item] = inventarioLojaB[item];
    }
  }

  return inventarioCombinado;
}

const inventarioLojaA = {
  maçã: 10,
  banana: 15,
  laranja: 20,
};

const inventarioLojaB = {
  banana: 20,
  pera: 10,
  uva: 5,
};

const inventarioCombinado = combinarInventarios(
  inventarioLojaA,
  inventarioLojaB
);

for (const item in inventarioCombinado) {
  console.log(`${JSON.stringify(item)}: ${inventarioCombinado[item]}`);
}
