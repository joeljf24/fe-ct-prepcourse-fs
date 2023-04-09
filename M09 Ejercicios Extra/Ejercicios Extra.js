/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arrayPpal = [];

   for (let i = 0; i < Object.keys(objeto).length; i++) {
      arrayPpal.push ([Object.keys(objeto)[i], Object.values(objeto)[i]]);
   }

   return arrayPpal;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let strgOrdAlf = string.split("").sort ();
   let obj = {};

   for (const i of strgOrdAlf) {
      if (obj.hasOwnProperty(i)) {
         obj[i] = obj[i] + 1;
      } else {
         obj[i] = 1;
      }
   }

   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let lMayus = "";
   let lMinus = "";

   for (const letra of string) {
      if (letra === letra.toUpperCase()) {
         lMayus += letra;
      } else {
         lMinus += letra;
      }
   }
   
   return lMayus + lMinus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let nvaFrase = frase.split (" ");
   let array = [];

   nvaFrase.forEach(element => {
      array.push(element.split("").reverse().join(""));
   })

   let string = array.join (" ");
   return string;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let nuevoNum = numero.toString().split("").reverse().join("");

   if (nuevoNum == numero) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = [];

   for (let i = 0; i < string.length; i++) {
      if ((string[i] !== "a") && (string[i] !== "b") && (string[i] !== "c")) {
         array.push (string[i]);
      }
   }

   let nvoString = array.join ("");
   return nvoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let nuevoArray = arrayOfStrings.sort ((a, b) => a.length - b.length);

   return nuevoArray;
  }

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let numRepetidos = [];

   array1.forEach ((num) => {
      if (array2.includes(num)) {
         return numRepetidos.push (num);
      }
   })

   return numRepetidos;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
