module.exports = function(){
  return {
    add: function(num1, num2) { 
        var sum = num1 + num2;
        console.log("The sum is: " + sum);
    },
    multiply: function(num1, num2) {
        var product = num1 * num2;
        console.log("The product is: " + product);
    },
    square: function(num) {
        var square = num * num
        console.log("The square is: " + square);
    },
    random: function(num1, num2) {
        var randNum = Math.floor(Math.random() * (num2 - num1) + num1);
        console.log("The random number is: " + randNum);
    }
  }
};