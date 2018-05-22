export function Euler(num) {
  this.num = num;
}

Euler.prototype.problem1 = function(num) {
  var sum = 0
  for(var i = 1; i < num; i++) {
    if((i % 3 == 0) || (i % 5 == 0)) {
      sum += i;
    }
  }
    return sum;
};


Euler.prototype.problem2 = function(num) {
  var sum = 0;
  var prevNum = 0;
  var tempNum = 0;
  var currentNum = 1;

  for (var i = 1; i <= num; i++) {
    tempNum = currentNum;
    currentNum += prevNum;
    prevNum = tempNum;

    if (currentNum % 2 == 0){
      sum += currentNum;
    } else {

    }
  }
  return sum;
};
