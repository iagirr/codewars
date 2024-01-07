/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */

function isIsogram(str){
    str = str.toLowerCase();
    noIsograma = {};
    for (let c of str) {
        if (noIsograma[c]) {
            return false;
        } noIsograma[c] = true;
    }
    return true 
}

//solucion con Set
//Set establece un obxeto con so valores unicos, polo que xa se fuma os duplicados. Se o tamaño coincie, e isograma.
function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

/* 
Isograma: palabra con letras repetidas
Obxetivo: isograma =>  true, non => false
    1. variable vacia
    2. String en caracteres
    3. Si caracter repetido na variable = true */