"use strict";

let bills = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 400];
let usluga = [];
let total = [];

let calc = function () {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] < 50 || bills[i] > 300) {
      let a = bills[i] * 0.2;
      let b = a + bills[i];
      usluga.push(a);
      total.push(b);
    } else if (bills[i] > 50 && bills[i] < 300) {
      let k = bills[i] * 0.15;
      let l = bills[i] + k;

      usluga.push(k);
      total.push(l);
    }
  }
  console.log(`Jami kiritilgan usluga ${usluga}`);
  console.log(`Jami kiritilgan summa ${total}`);
};
calc();
