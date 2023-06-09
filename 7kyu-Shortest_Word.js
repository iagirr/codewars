/* DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
    let words = s.split(" ");
    let countS = 100;
    for (let i=0; i<words.length; i++) {
      if (words[i].length < countS) {
        countS = words[i].length;
      }
    } return countS;
  }
  
  const findShort = (s) => s
    .split(" ")
    .sort((a,b) => b.length - a.length)
    .pop()
    .length;
  const findShort = (s) =>
    Math.min(...s.split(' ').map(s => s.length))