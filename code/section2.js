const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
const [first, , third, ...rest] = numbers;

console.log("first:", first); // 10
console.log("third:", third); // 30
console.log("rest:", rest); // [40, 50]
