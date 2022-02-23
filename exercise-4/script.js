"use strict";

4 - exercise;

let number = Number(prompt(`Yoshingizni kiriting`));

let kun = number * 365;

let soat = kun * 24;

let minut = soat * 60;

let sikund = minut * 60;

if (number > 0) {
  alert(
    `Sizning yoshingiz ${number} da,${kun} kun,${soat} soat,${minut} minut,${sikund} secund dan beri yashayabsiz.Endi ozizga savol berin shu yoshizgacha nima ish qildiz?`
  );
} else if (number < 0) {
  alert(`kalla yoshing minusda bolmaydi`);
} else {
  alert(`Yoshingni kirit eshak sozni emas`);
}
