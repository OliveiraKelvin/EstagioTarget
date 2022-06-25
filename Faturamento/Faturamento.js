import * as json from 'json';
var aux, dados, diasFaturamento, f, maior, media, menor, soma;
f = open("Faturamento/dados.json");
dados = json.load(f);
aux = 0;
maior = 0;
menor = 0;
soma = 0;
media = 0;

for (var dia, _pj_c = 0, _pj_a = dados, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  dia = _pj_a[_pj_c];

  if (dia["valor"] !== 0) {
    aux = dia["valor"];

    if (aux > maior) {
      maior = aux;
    }

    if (menor === 0) {
      menor = aux;
    } else {
      if (aux < menor) {
        menor = aux;
      }
    }

    soma += dia["valor"];
  }
}

console.log("O maior valor de faturamento do mes foi: R$ " + maior.toString() + ".");
console.log("O menor valor de faturamento do mes foi: R$ " + menor.toString() + ".");
media = soma / dados.length;
diasFaturamento = "";

for (var i, _pj_c = 0, _pj_a = dados, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  i = _pj_a[_pj_c];

  if (i["valor"] !== 0) {
    if (i["valor"] > media) {
      diasFaturamento += i["dia"].toString() + " ";
    }
  }
}

console.log("Os dias em que o faturamento foi maior que a media mensal foram: " + diasFaturamento);
