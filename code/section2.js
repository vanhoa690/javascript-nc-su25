// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers);
// const [first, , third, ...rest] = numbers;

// console.log("first:", first); // 10
// console.log("third:", third); // 30
// console.log("rest:", rest); // [40, 50]

let srcImageFromApi = "https://images";
let imageDeafault =
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630";

const srcImage = srcImageFromApi || imageDeafault;

// console.log(srcImage);

let a = 0;
let b = "Hello";
let c;
a ||= "Fallback";
b &&= "Updated";
c ??= "Default";

let d = a || "Fallback";
// console.log("a:", a); // 'Fallback'
// console.log("b:", b); // 'Updated'
// console.log("c:", c); // 'Default'
// console.log("d:", d); // 'Fallback'

// console.log("--- Logical Assignment Operators ---");
// let user1 = { name: "Alice", age: null };
// user1.age ||= 25;
// user1.age ??= 25;
// console.log(user1);

// ✅ Nullish Coalescing Operator
console.log("--- Nullish Coalescing ---");
const age = 0;
console.log(age ?? 18); // 0 vi 0 !== null  ?? check null va under
console.log(age || 18); // 18 || check trulty null va under, 0, false
