// Exercise 2 page 30
"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores){
    let scoreSum = 0;
    for(let i = 0; i < scores.length; i++){
        scoreSum += scores[i];
    }
    let avgScore = scoreSum / scores.length;
    return avgScore.toFixed(2);
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));