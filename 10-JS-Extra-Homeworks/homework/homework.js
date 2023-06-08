// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arr = Object.entries(objeto);
  return arr;
  //  otra forma de solucionar el ejercicio es la siguiente
  // let arr = Object.entries(objeto).map(([key, value]) => [key, value]);
  // return arr;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let obj = {};
  for (let i of string) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minus = "";
  let Mayus = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      Mayus += s[i];
    } else {
      minus += s[i];
    }
  }
  return Mayus + minus;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí.
  let arr = str.split(" ");
  let arr2 = arr.map((x) => x.split("").reverse().join(""));
  return arr2.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // if (numero.toString().split("").reverse().join("") == numero.toString()) {
  //   return "Es capicua";
  // }
  // return "No es capicua";  otra manera de hacerlo
  //  es declarando variables para cada uno de los casos y luego comparando las variables para saber si son iguales
  let cadena = numero.toString();
  let cadena2 = cadena.split("").reverse().join("");
  if (cadena === cadena2) {
    return "Es capicua";
  }
  return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // let arr = cadena.split("");
  // let arr2 = arr.filter((x) => x != "a" && x != "b" && x != "c");
  // return arr2.join("");
  // otra manera de hacerlo
  let arr = [];
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      arr.push(cadena[i]);
    }
  }
  return arr.join("");
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arr1 = arr.sort((a, b) => a.length - b.length);
  return arr1;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let arr = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] == arreglo2[j]) {
        arr.push(arreglo1[i]);
      }
    }
  }
  return arr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
