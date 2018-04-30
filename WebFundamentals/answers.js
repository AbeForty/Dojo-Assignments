//Setting and Swapping
function settingAndSwapping() {
    var myNumber = 42;
    var myName = "Aaron Cheung";
    var myNumberTemp = myNumber;
    myNumber = myName;
    myName = myNumberTemp;
}
//Print -52 to 1066
function print521066() {
    for (var i = -52; i <= 1066; i++) {
        console.log(i);
    }
}
//Don't Worry, Be Happy
function dontWorryBeHappy() {
    function beCheerful() {
        console.log('good morning!')
    }
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
    beCheerful();
}
//Multiples of Three - but Not All
function multiplesOfThree() {
    for (var i = 3; i < -300; i = i - 3) {
        if (i == -3 || i == -6) {
            continue;
        }
    }
}
//Printing Integers with While
function printIntegersWithWhile() {
    var idx = 2000;
    while (idx <= 5280) {
        console.log(idx);
        idx++;
    }
}
//You Say It's Your Birthday
function checkBday(bday) {
    if (bday == 01) {
        console.log('How did you know?')
    }
    else {
        console.log('Just another day....')
    }
}
//Leap Year
function checkLeapYear(myDate) {
    if (myDate % 4 == 0 && myDate % 100 == 0 && myDate % 400 == 0) {
        console.log('It is a leap year');
    }
    else {
        console.log('It is not a leap year');
    }
}
//Print and Count
function printAndCount() {
    for (var indx = 5; indx <= 4096; indx = indx + 5) {
        var indxNumber = 0;
        console.log(indx);
        indxNumber++;
        console.log(indxNumber);
    }
}
//Multiples of Six
function multiplesOfSix() {
    var indx6 = 6;
    while (indx6 <= 6000) {
        indx6 += 6;
        console.log(indx6);
    }
}
//Counting, the Dojo Way
function countingDojo() {
    for (var indxDojo = 1; indxDojo <= 100; indxDojo++) {
        if (indxDojo % 5 == 0) {
            console.log('Coding');
        }
        if (indxDojo % 10 == 0) {
            console.log('Dojo');
        }
    }
}
//What Do You Know?
function incomingFunction(incoming) {
    console.log(incoming);
}
//Whoa, That Sucker's Huge...
function suckersHuge() {
    var sumHuge = 0;
    for (var indxHuge = -300000; indxHuge <= 300000; indxHuge++) {
        if (indxHuge % 2 >= 1 || indxHuge % 2 <= -1) {
            sumHuge = lastInt + indxHuge;
        }
    }
    console.log(sumHuge);
    console.log(-300000 + 300000);
}
//Countdown by Fours
function countdownFours() {
    indxFours = 2016;
    // console.log(indxFours);
    while (indxFours > 0) {
        if (indxFours != 0) {
            console.log(indxFours);
        }
        indxFours -= 4;

    }
}
//Flexible Countdown
function flexibleCountdown(lowNum, highNum, mult) {
    for (lowNum; lowNum <= highNum; lowNum = lowNum + mult) {
        console.log(lowNum);
    }
}
//The Final Countdown
function finalCountdown(param1, param2, param3, param4) {
    while (param2 < param3) {
        if (param2 % param1 == 0) {
            if (param2 != param4) {
                console.log(param2);
            }
            param2 += param1;
        }
        else {
            param2 += 1;
        }

    }
}
//Countdown
function countdown(number) {
    var newArr = [];
    while (number >= 0) {
        newArr.push(number);
        number--
    }
    console.log(newArr.length);
}
//Print and Return
function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}
//First Plus Length
function firstPlusLength(arr) {
    // if (arr[0] % 2 <= 0 || arr[0] % 2 >= 0) {
        return arr[0] + arr.length;
    // }
}
//Values Greater than Second
function valuesGreaterThanSecond(arr = [1, 3, 5, 7, 9, 13]) {
    var numOfValuesGreaterThanSecond = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            numOfValuesGreaterThanSecond++
        }
    }
    return numOfValuesGreaterThanSecond;
}
//Values Greater than Second, Generalized
function valuesGreaterThanSecondGeneralized(arr) {
    if (arr.length > 1) {
        var numOfValuesGreaterThanSecond = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[1]) {
                console.log(arr[i]);
                numOfValuesGreaterThanSecond++
            }
        }
        return numOfValuesGreaterThanSecond;
    }
}
//This Length, That Value
function thisLengthThatValue(num1, num2) {
    var newArr = [];
    for (var i = 1; i <= num1; i++) {
        newArr.push(num2);
    }
    if (newArr.length == num2) {
        console.log('Jinx!');
    }
    return newArr;
}
//Fit the First Value
function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log('Too big!');
    }
    else if (arr[0] < arr.length) {
        console.log('Too small!');
    }
    else {
        console.log('Just right!')
    }
}
//Farenheit to Celsius
function farenheitToCelsius(farenheitValue) {
    return (5 / 9) * (farenheitValue - 32);
}
//Celsius to Farenheit
function celsiusToFarenheit(celsiusValue) {
    return (9 / 5 * celsiusValue) + 32;
}
//Biggie Size
function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
//Print Low, Reutrn High
function printLowReturnHigh(arr) {
    var lowValue = arr[0];
    var highValue = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < lowValue) {
            lowValue = arr[i];
        }
        else if (arr[i] > highValue) {
            highValue = arr[i];
        }
    }
    console.log(lowValue);
    return highValue;
}
//Print One, Return Another
function printOneReturnAnother(arr) {
    console.log(arr[arr.length - 2]);
    var firstOdd;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 > 0) {
            firstOdd = arr[i];
            break;
        }
    }
    return firstOdd;
}
//Double Vision
function doubleVision(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push((arr[i] * 2));
    }
    return newArr;
}
//Count Positives
function countPositives(arr) {
    var numOfPositives = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            numOfPositives++;
        }
    }
    arr[arr.length - 1] = numOfPositives;
    return arr;
}
//Evens and Odds
function evensAndOdds(arr) {
    var numOfOddsInRow = 0;
    var numOfEvensInRow = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            numOfOddsInRow = 0;
            numOfEvensInRow++;
            if (numOfEvensInRow == 3) {
                console.log('Even more so!')
                numOfEvensInRow = 0;
            }
        }
        else {
            numOfEvensInRow = 0;
            numOfOddsInRow++;
            if (numOfOddsInRow == 3) {
                console.log('That\'s odd!')
                numOfOddsInRow = 0;
            }
        }
    }
}
//Increment the Seconds
function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 > 0) {
            arr[i]++
        }
        console.log(arr[i]);
    }
    return arr;
}
//Previous Lengths
function previousLengths(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length
    }
    return arr;
}
//Add Seven to Most
function addSevenToMost(arr) {
    var newArr = [];
    var newArr2 = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push((arr[i] + 7));
    }
    return newArr;
}
//Reverse Array
function reverseArray(arr) {
    var tempValue = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        tempValue = arr[i];
        arr[i] = arr[(arr.length - 1 - i)];
        arr[(arr.length - 1 - i)] = tempValue;
    }
    return arr;
}
//Outlook: Negative
function outlookNegative(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
        }
    }
    return arr;
}
//Always Hungry
function alwaysHungry(arr) {
    var numOfFood = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log('yummy');
            numOfFood++
        }
    }
    if (numOfFood == 0) {
        console.log('i\'m hungry');
    }
}//Swap Toward the Center
function swapTowardTheCenter(arr) {
    var tempValue = 0;
    for (var i = 0; i < (arr.length/2); i=i+2) {
        tempValue = arr[i];
        arr[i] = arr[(arr.length-1-i)];
        arr[(arr.length-1-i)] = tempValue;
    }
    return arr;
}
//Scale the Array
function scaleTheArray(arr,num){
    for (var i = 0; i < arr.length; i++){
        arr[i]*=num;
    }
    return arr;
}