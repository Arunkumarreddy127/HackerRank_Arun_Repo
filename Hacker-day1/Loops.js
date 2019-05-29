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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    vowels(s);
    consonents(s);
}

function vowels(s) {
    for (let i = 0; i < s.length; i++){
        let c = s.charAt(i);
        if (check(c)) {
            console.log(c);
        }
    }
}
function check(c) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        return true;
    }
    return false;
}
function consonents(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (!check(c)) {
            console.log(c);
        }
    }
}

