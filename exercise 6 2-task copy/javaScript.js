"use strict";

let birinchi = prompt(`Birinchi sonni kiriting`);
let ikkinchi = prompt(`Ikkinchi sonni kiriting`);
let uchinchi = prompt(`Uchinchi sonni kiriting`);

if (
  birinchi < ikkinchi &&
  birinchi < uchinchi &&
  ikkinchi > birinchi &&
  ikkinchi > uchinchi
) {
  alert(`Eng kichik son ${birinchi} eng katta son ${ikkinchi}`);
} else if (
  ikkinchi < birinchi &&
  ikkinchi < uchinchi &&
  birinchi > ikkinchi &&
  birinchi > uchinchi
) {
  alert(`Eng kichik son ${ikkinchi} eng katta son ${birinchi}`);
} else if (
  uchinchi < birinchi &&
  uchinchi < ikkinchi &&
  birinchi > ikkinchi &&
  birinchi > uchinchi
) {
  alert(`Eng kichik son ${uchinchi} eng katta son ${birinchi}`);
} else if (
  uchinchi > birinchi &&
  birinchi < ikkinchi &&
  uchinchi > ikkinchi &&
  birinchi < uchinchi
) {
  alert(`Eng kichik son ${birinchi} eng katta son ${uchinchi}`);
} else if (
  uchinchi > ikkinchi &&
  birinchi > ikkinchi &&
  uchinchi > ikkinchi &&
  birinchi < uchinchi
) {
  alert(`Eng kichik son ${ikkinchi} eng katta son ${uchinchi}`);
} else if (
  uchinchi < birinchi &&
  uchinchi < ikkinchi &&
  uchinchi < ikkinchi &&
  birinchi < ikkinchi
) {
  alert(`Eng kichik son ${uchinchi} eng katta son ${ikkinchi}`);
} else {
  alert(`Qiymat topilmadi`);
}
