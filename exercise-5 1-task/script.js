"use strict";

// 5-task 1-topshiriq

let delfin1 = Number(prompt("Delfinlarni 1-topshiriq ballarini kiriting"));
let delfin2 = Number(prompt("Delfinlarni 2-topshiriq ballarini kiriting"));
let delfin3 = Number(prompt("Delfinlarni 3-topshiriq ballarini kiriting"));

let kuala1 = Number(prompt("Kualalarni 1-topshiriq ballarini kiriting"));
let kuala2 = Number(prompt("Kualalarnilarni 2-topshiriq ballarini kiriting"));
let kuala3 = Number(prompt("Kualalarni 3-topshiriq ballarini kiriting"));

let calcAverage = function (arg1, arg2, arg3) {
  return (arg1 + arg2 + arg3) / 3;
};

let avgDelfin = calcAverage(delfin1, delfin2, delfin3);
let avgKuala = calcAverage(kuala1, kuala2, kuala3);

console.log(avgDelfin, avgKuala);

let checkWinner = function (avgDelfin, avgKuala) {
  if (avgDelfin / 2 >= avgKuala) {
    console.log(
      `Delfinlar golib boldi delfinlar toplagan ball ${avgDelfin},Kualalar toplagan ball ${avgKuala}`
    );
  } else if (avgDelfin <= avgKuala / 2) {
    console.log(
      `Kualalar golib boldi Delfinlar toplagan ball ${avgDelfin},Kualalar toplagan ball ${avgKuala}`
    );
  } else {
    console.log(`Hechkim golib bolmadi musobaqa soqqa bolib ketdi`);
  }
};

console.log(checkWinner(avgDelfin, avgKuala));
