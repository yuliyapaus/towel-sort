
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let a = [];
  matrix.map(function(i) {i.map(function (y) {a.push(y)})});
  return a.sort(function(a,b){a<b});
}
