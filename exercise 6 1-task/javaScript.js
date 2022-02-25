"use strict";

let birinchi = prompt(`Birinchi sonni kiriting`);
let ikkinchi = prompt(`Ikkinchi sonni kiriting`);
let uchinchi = prompt(`Uchinchi sonni kiriting`);

if (birinchi > ikkinchi && birinchi > uchinchi) {
  alert(`Eng katta son ${birinchi}`);
} else if (ikkinchi > birinchi && ikkinchi > uchinchi) {
  alert(`Eng katta son ${ikkinchi}`);
} else if (uchinchi > birinchi && uchinchi > ikkinchi) {
  alert(`Eng katta son ${uchinchi}`);
} else {
  alert(`Qiymat topilmadi`);
}
