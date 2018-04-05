'use strict';

let makeStringFromArray = (inArray, inChar) => {
    let resultString = '';
    inArray.forEach((item, i, inArray) => resultString += inArray[i] + (i === (inArray.length - 1) ? '' : inChar));
    return resultString;
}


let changeTextCase = inString => {
    let resultString = '';
    for (let i = 0; i < inString.length; i++) {
        resultString += inString[i].toUpperCase() === inString[i] ? inString[i].toLowerCase() : inString[i].toUpperCase();
    }
    return resultString;
}


let clearArray = inArray => inArray.filter(c => c);


function makeBuffer() {
    let stringBuffer = '';
    return (bufferElement = '') => stringBuffer += bufferElement;
}
