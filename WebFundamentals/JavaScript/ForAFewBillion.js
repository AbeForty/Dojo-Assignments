function rewardIncrement() {
    var reward = 0.01;
    var sum = 0.01;
    for (var i = 1; i < 30; i++) {
        reward *= 2;
        sum+=reward;
    }
    console.log(sum);
}