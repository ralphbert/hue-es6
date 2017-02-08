function sum() {
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  args.forEach(function (value) {
    sum += parseInt(value);
  });
  return sum;
}
console.log(sum(2, 2)); // 4
console.log(sum(1, 2, 3, 4, 5));    // 15

/*
// TODO don't use the arguments to generate the sum. use the spread operator and arrow functions instead
function sumES6() {

}

console.log('sum ES6 style');
console.log(sumES6(3, 3)); // 6
console.log(sumES6(1, 2, 3, 4, 5, 6));    // 21
*/