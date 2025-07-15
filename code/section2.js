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

console.log(srcImage);
