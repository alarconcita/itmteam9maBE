console.log("EJERCICIO_1");
let arr=[];
arr[0]=5;
console.log(arr);
arr[0]=7;
console.log(arr);
arr[0]=56;
console.log(arr);
arr[0]="MAR";
console.log(arr);
arr[0]="programación";
console.log(arr);

console.log("EJERCICIO_2");
const myAlphabet=['A','B','C','D','E','F','G'];
console.log(myAlphabet.length);

console.log("EJERCICIO_3");
const fruits=['pera','manzana','durazno','banana'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log("EJERCICIO_4");
const numbers = ['1', '3', '5', '7', '9'];
const numbersPlusTwo = numbers.map(number => parseInt(number) + 2);
console.log(numbersPlusTwo);

console.log("EJERCICIO_5");
const frase = "Erre con erre cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del ferrocarril";
const fraseMin = frase.toLowerCase();
let contadorR = 0;
for (let i = 0; i < fraseMin.length; i++) {
  if (fraseMin[i] === "r") {
    contadorR++;
  }
}
console.log(`La letra "r" aparece ${contadorR} veces en la frase "${frase}"`);

console.log("EJERCICIO_6");
let people = ["Ana", "Carolina", "Laura", "Natalia", "Fernanda"]
//a
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//b
people.splice(1,1);
console.log(people);
//c
people.splice(3,1);
console.log(people);
//d
people.push("Francisco");
console.log(people);
//e
people.push("Mariana");
console.log(people);
//f
let index=people.indexOf("Natalia");
console.log("El índice de Natalia es: ", index);
//g1
let index1=people.indexOf("Mariana");
console.log("El índice de mi nombre es: ", index1);
//g2
let index2=people.findIndex(function(miNombre){
  return miNombre==="Mariana";
});
console.log("El índice de mi nombre es: ", index2);

console.log("EJERCICIO_7");
let song1 = {
  nombre: "Duérmase mi amor",
  artista: "Lalo de los Santos",
  álbum: "Rosarinos",
  año: 1997
  };
let song2 = {
  nombre: "Canción de cuna",
  artista: "Los Piojos",
  álbum: "Máquina de sangre",
  año: 2003
  };
let song3 = {
  nombre: "Motivos",
  artista: "Abel Pintos",
  álbum: "Abel",
  año: 2013
  };

console.log("EJERCICIO_8");
class Tienda {
  constructor(nombre, direccion, propietario, rubro) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
  }};
const tienda = new Tienda("Pura Vida", "Sarmiento 485", "Juan Gallino", "Tatuajes");
const tienda2 = new Tienda("Mestiere", "Lavalle 724", "Mariana Alarcón", "Cosmética Natural");
const tienda3 = new Tienda("Jo Tosetto", "Suipacha 3564", "Josefina Tosetto", "Fotografía");

console.log("EJERCICIO_9");
const tienda4 = new Tienda("Laboratorio", "Córdoba S 39", "Mabel Rinaldi", "Análisis clínicos");
const tienda5 = new Tienda("Psi Alex Alarcón", "Moreno 1797", "Alex Alarcón", "Psicología");

console.log("EJERCICIO_10");
const lion = {
  species: 'Panthera leo',
  foots: 4,
  hasTail: true,
  weight: '190kg',
  isMammal: true,
};
// notación de punto
console.log(lion.species);
console.log(lion.foots);
console.log(lion.hasTail);
//notación de corchetes
console.log(lion['species']);
console.log(lion['foots']);
console.log(lion['hasTail']);
