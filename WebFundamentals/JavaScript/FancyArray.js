function fancyArrayFancy(arr, symbol, reversed) {
    if (reversed == false) {

    }
    else {
        var tempValue = 0;
        for (var i = 0; i < arr.length / 2; i++) {
            tempValue = arr[i];
            arr[i] = arr[(arr.length - 1 - i)];
            arr[(arr.length - 1 - i)] = tempValue;
        }
    } 
    for (var i = 0; i < arr.length; i++) {
        console.log(i + " " + symbol + " " + arr[i]);
    }
}
function fancyArraySimple(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + " -> " + arr[i]);
    }
}
