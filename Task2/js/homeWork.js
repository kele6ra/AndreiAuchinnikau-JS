'use strict';

let makeStringFromArray = (inArray, inChar) => {
    if (!Array.isArray(inArray) || !inArray.length) {
        return false;
    }
    let resultString = '';
    inArray.forEach((item, i, inArray) => resultString += inArray[i] + (i === (inArray.length - 1) ? '' : inChar));
    return resultString;
}


let changeTextCase = inString => {
    let resultString = '';
    if (typeof inString !== 'string') {
        return false;
    }
    for (let i = 0; i < inString.length; i++) {
        resultString += inString[i].toUpperCase() === inString[i] ? inString[i].toLowerCase() : inString[i].toUpperCase();
    }
    return resultString;
}


let clearArray = inArray => Array.isArray(inArray) && inArray.length ? inArray.filter(c => c) : false;


function makeBuffer() {
    let buffer = '';
    return (bufferElement = '') => buffer += bufferElement;
}


let sieveOfEratosthenes = inNubmer => {
    var time = performance.now();
    if (isNaN(inNubmer)) {
        return false;
    }
    let inNubmerArray = Array(inNubmer+1);
    let inNubmerArrayLength = inNubmerArray.length;
    let simpleNumbers = [1];
    
    for (let i = 2; i <inNubmerArrayLength; i++){
        if (inNubmerArray[i] !== false){
            simpleNumbers.push(i);
            let j = i*2;
            while (j < inNubmerArrayLength){
                if (inNubmerArray[j] !== false) inNubmerArray[j] = false;
                j+=i;
            }
        }
    }
    time = performance.now() - time;
    console.log(time);
    return simpleNumbers;
}