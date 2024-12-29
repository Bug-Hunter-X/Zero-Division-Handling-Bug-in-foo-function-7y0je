function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This is the problematic line
  }
  return a / b;
}
console.log(foo(1, 0)); //Outputs Infinity instead of 0
console.log(foo(0, 1)); //Outputs Infinity instead of 0
console.log(foo(0, 0)); //Outputs NaN instead of 0