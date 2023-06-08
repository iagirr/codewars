/* DESCRIPTION:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
    let contx = 0;
    let conto = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            contx+=1;
        } else if (str[i].toLowerCase() === 'o') {
            conto+=1;
        };
    }
    return contx === conto;
}

/* Establezco 2 contadores para x e i, recorremos con loop e en minusculas, se son os mesmos, true
return equivale a un true booleano, podemos aforrar de poñelo */

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//divide as cadenas ao encontrarse en x ou o e logo compara, se teñen o mesmo tamaño de array son true