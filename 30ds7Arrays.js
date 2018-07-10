'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    if (arr.length > 0){
        letsRecurseThis(0, arr);
    }

}

function letsRecurseThis(pos, arr) {
    if(pos < arr.length)
    {
        letsRecurseThis((pos + 1), arr);
        process.stdout.write("" + arr[pos] + " ");

    }
    else if(pos == (arr.length - 1) && pos > 0)
    {
        process.stdout.write("" + arr[pos] + " ");
    }
}