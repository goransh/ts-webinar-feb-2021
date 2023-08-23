function average(a, b) {
  return (a + b) / 2;
}

console.log(average(2, 5)); // 1.5
console.log(average("1", 2)); // 6
console.log(average("2", "2")); // 11
console.log(average(true, false)); // 0.5
console.log(average([1], [2])); // 6
console.log(average()); // NaN
console.log(average(null, undefined)); // NaN
