/* Logging letters
n = prompt("enter a number");
var sum = 0;
for(var i= 0; i < n; i++){
  sum += i;
  console.log(sum)
}

console.log("final:"+ sum);
*/

/* Counting Numbers
function countingCharacters(word){
  var count = word.length;
  return count;
}
var word="SOEJFOT";
console.log(countingCharacters(word));
*/
/* RollDice
function rollDice(num){
  var number = Math.floor(Math.random()*num +1);
  return number;
}
var num = prompt("Enter number");
for (var i=0; i<100; i++){
  console.log(rollDice(num));
}
*/
/* Add Two Numbers
function addTwoNumbers(num1 , num2){
  return num1 + num2;
}
console.log(addTwoNumbers(7,20));
*/
function findMax(array){
  var max = 0;
  for (var i=0; i<array.length;i++){
    if(max <= array[i]) {
        max = array[i]
    }
  }
  return max;
}
var x = [7,10,30,55,3,5,7,100]
console.log(findMax(x));
