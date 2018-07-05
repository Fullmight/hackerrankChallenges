function processData(input) {
    //Enter your code here

    var inputOne = "";
    var inputTwo = "";
    var inputThree = "";

    //inputOne = input.slice("\n"[0]);
    //input.slice("\n"[0]) = "";
    var inputArr = input.split("\n"[0]);

    printCustomLine(0, inputArr);

}


function printCustomLine(linePlace, lineArr)
{
    var locStrOne = "";
    var locStrTwo = "";

    if(linePlace == 0 && lineArr.length > 1)
    {
        linePlace++;
        printCustomLine(linePlace, lineArr);
        return;
    }

    if(linePlace > 0)
    {
        var tempStr = "";
        tempStr += lineArr[linePlace];
        var tempI = 0;
        //console.log("TEST: " + tempStr);

        for(tempI = 0; tempI < tempStr.length; tempI++)
        {
            if(tempI == 0)
            {
                locStrOne += tempStr.charAt(tempI);
            }
            else if((tempI % 2) == 0)
            {
                locStrOne += tempStr.charAt(tempI);
            }
            else if(((tempI + 1)) % 2 == 0)
            {
                locStrTwo += tempStr.charAt(tempI);
            }
        }
        console.log(locStrOne + " " +locStrTwo);

        if(linePlace < lineArr.length - 1)
        {
            linePlace++;
            printCustomLine(linePlace, lineArr);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});