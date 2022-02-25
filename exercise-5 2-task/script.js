"use strict";

let firtstNumber = Number(prompt(`Birinchi raqamni kiriting`));
let operator = prompt(`Qaysi amalni tanlaymiz( + , - , / , * )`);
let secondNumber = Number(prompt(`Ikkinchi raqamni kirirting`));

let summa = function (operator, first, second) {
  switch (operator) {
    case "+":
      alert(first + second);
      break;
    case "-":
      alert(first - second);
      break;
    case "/":
      alert(first / second);
      break;
    case "*":
      alert(first * second);
      break;
    default:
      alert(`Qiymat topilmadi`);
      break;
  }
};

alert(summa(operator, firtstNumber, secondNumber));
