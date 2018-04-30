function rewardIncrement() {
    var reward = 0.01;
    var sum = 0.01;
    for (var i = 1; i < 30; i++) {
        reward *= 2;
        sum+=reward;
    }
    console.log(sum);
}
function rewardIncrementFindDays() {
    var days = 0;
    for (var i = 0.01; i <= 10000; i = i * 2) {
        days++
    }
    console.log(days);

}
function rewardIncrementFindDays1Billion() {
    var days = 0;
    for (var i = 0.01; i <= Infinity; i = i * 2) {
        days++
    }
    console.log(days);
}
