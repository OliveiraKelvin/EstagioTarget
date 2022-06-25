var num1, num2, num3, numDigitado;
num1 = Number.parseInt(0);
num2 = Number.parseInt(1);
num3 = Number.parseInt(0);
console.log(" Sequencia de Fibonacci ");
console.log("Consulte se um numero pertence a Sequencia de Fibonacci.");
numDigitado = Number.parseInt(input("30"));

while (numDigitado > num3) {
  num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
}

if (numDigitado === (0 | numDigitado) && (0 | numDigitado) === 1) {
  console.log("O numero " + numDigitado.toString() + " esta na sequencia de Fibonacci.");
} else {
  if (numDigitado === num3) {
    console.log("O numero " + numDigitado.toString() + " esta na Sequencia de Fibonacci.");
  } else {
    console.log("O numero nao esta presente na Sequencia de Fibonacci.");
  }
}
