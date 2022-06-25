var caracteres, inverse, palavra, tam;
console.log("--- Inversor de palavras ---");
palavra = input("Target Sistemas:");
caracteres = [];
inverse = "";

for (var letra, _pj_c = 0, _pj_a = palavra, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  letra = _pj_a[_pj_c];
  caracteres.append(letra);
}

tam = caracteres.length - 1;

while (tam >= 0) {
  inverse += caracteres[tam];
  tam -= 1;
}

console.log("Palavra invertida: ");
console.log(inverse);
