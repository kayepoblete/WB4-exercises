// Exercise 3 page 48
"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100, 99];

function getAverage(_scores){
    let scoreSum = 0;
    for(let i = 0; i < _scores.length; i++){
        scoreSum += _scores[i];
    }
    let avgScore = scoreSum / _scores.length;
    return avgScore;
}

function getMedian(_scores){
    _scores.sort(function(a,b){
        if (a < b) return -1;
        else if (a == b) return 0;
        else return 1;
    });
    let middle = Math.floor((_scores.length - 1) / 2);
    if(_scores.length % 2 == 0){
        return (_scores[middle]+_scores[middle+1])/2;
    }
    else{
        return _scores[middle];
    }
}

function getHignAndLow(_scores){
    _scores.sort(function(a,b){
        if (a < b) return -1;
        else if (a == b) return 0;
        else return 1;
    });
    let lowest = _scores[0];
    let highest = _scores[_scores.length-1];
    return `Highest score: ${highest}, Lowest score: ${lowest}`;
}

console.log(`Median: ${getMedian(myScores)}, Average: ${getAverage(myScores).toFixed(2)} ${getHignAndLow(myScores)}`);
console.log(`Median: ${getMedian(yourScores)}, Average: ${getAverage(yourScores).toFixed(2)} ${getHignAndLow(yourScores)}`);
