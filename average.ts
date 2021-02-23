function average(a: number | string, b: number | string): number {
  return (Number(a) + Number(b)) / 2;
}

console.log(average(2, 5));
console.log(average("1", 2));
console.log(average("2", "2"));
