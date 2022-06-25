var es, mg, outros, rj, sp, total;

function porcentagem(estado, total) {
  return round(100 * estado / total, 2);
}

sp = 67836.43;
rj = 36678.66;
mg = 29229.88;
es = 27165.48;
outros = 19849.53;
total = sp + rj + mg + es + outros;
console.log("Porcentagem do faturamento de SP:" + porcentagem(sp, total).toString() + "%");
console.log("Porcentagem do faturamento de RJ:" + porcentagem(rj, total).toString() + "%");
console.log("Porcentagem do faturamento de MG:" + porcentagem(mg, total).toString() + "%");
console.log("Porcentagem do faturamento de ES:" + porcentagem(es, total).toString() + "%");
console.log("Porcentagem de outros faturamentos:" + porcentagem(outros, total).toString() + "%");
