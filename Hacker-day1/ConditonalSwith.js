'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    let c = s.charAt(0);
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') letter = "A";
    else if (c === 'b' || c === 'c' || c === 'd' || c === 'f' || c === 'g') letter = "B";
    else if (c === 'h' || c === 'j' || c === 'k' || c === 'l' || c === 'm') letter = "C";
    else letter = "D";
    return letter;
}

