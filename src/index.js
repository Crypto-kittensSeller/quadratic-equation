module.exports = function solveEquation(equation) {
  let solution = [];
  let arr = equation.split(" ");
  let a = arr[0];
  let b = arr[3]+arr[4];
  let c = arr[7]+arr[8];
  let discr = b*b-4*a*c;
  let x1 = Math.round((-b+Math.sqrt(discr))/(2*a));
  let x2 = Math.round((-b-Math.sqrt(discr))/(2*a));
  solution.push(x2);
  solution.push(x1);
  solution.sort(function(a,b){return a - b});
  return solution;
}
