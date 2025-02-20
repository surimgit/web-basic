const scores1 = [70, 80, 40, 60, 80];

let x = 60;

const a = [x, ...scores1];
console.log(x);
console.log(a);
console.log(scores1);

const [y, ...scores2] = a;

console.log(y);
console.log(a);
console.log(scores2);