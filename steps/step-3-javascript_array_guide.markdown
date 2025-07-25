# Hướng Dẫn Học JavaScript: Làm Việc Với Mảng, Maps, Sets và Các Phương Thức

## 1. Làm Việc Với Mảng (Arrays)

Mảng trong JavaScript là một cấu trúc dữ liệu để lưu trữ nhiều giá trị trong một biến duy nhất. Mảng rất linh hoạt và cung cấp nhiều phương thức hữu ích để thao tác dữ liệu.

### Khởi Tạo Mảng
```javascript
// Khởi tạo mảng
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
```

### Truy Cập và Sửa Đổi
```javascript
// Truy cập phần tử
console.log(fruits[0]); // Output: apple

// Sửa đổi phần tử
fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "orange"]
```

## 2. Maps

`Map` là một tập hợp các cặp key-value, nơi key có thể là bất kỳ kiểu dữ liệu nào (khác với object chỉ cho phép key là string hoặc symbol).

### Tạo và Sử Dụng Map
```javascript
// Tạo Map
const myMap = new Map();

// Thêm cặp key-value
myMap.set("name", "John");
myMap.set(1, "One");

// Lấy giá trị
console.log(myMap.get("name")); // Output: John

// Kiểm tra key tồn tại
console.log(myMap.has(1)); // Output: true

// Xóa key
myMap.delete("name");
```

### Demo: Đếm Số Lần Xuất Hiện
```javascript
const fruits = ["apple", "banana", "apple", "orange"];
const countMap = new Map();

fruits.forEach(fruit => {
  countMap.set(fruit, (countMap.get(fruit) || 0) + 1);
});
console.log(countMap); // Output: Map(3) { 'apple' => 2, 'banana' => 1, 'orange' => 1 }
```

## 3. Sets

`Set` là tập hợp các giá trị duy nhất, không cho phép trùng lặp.

### Tạo và Sử Dụng Set
```javascript
// Tạo Set
const mySet = new Set();

// Thêm giá trị
mySet.add(1);
mySet.add("hello");
mySet.add(1); // Không thêm vì đã tồn tại

console.log(mySet); // Output: Set(2) { 1, "hello" }

// Kiểm tra giá trị
console.log(mySet.has("hello")); // Output: true
```

### Demo: Loại Bỏ Trùng Lặp
```javascript
const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4]
```

## 4. Lặp Mảng Với `forEach`

Phương thức `forEach` lặp qua từng phần tử trong mảng và thực thi một hàm callback.

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3
// Index 3: 4
```

## 5. Các Phương Thức Mảng Quan Trọng

### `map`
Tạo mảng mới bằng cách áp dụng hàm cho từng phần tử.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

### `filter`
Tạo mảng mới chứa các phần tử thỏa mãn điều kiện.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

### `reduce`
Giảm mảng thành một giá trị duy nhất bằng cách áp dụng hàm reducer.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```

### Magic of Chaining
Kết hợp các phương thức mảng để xử lý dữ liệu một cách linh hoạt.

```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log(result); // Output: 12 (2*2 + 4*2 = 12)
```

### `find`
Trả về phần tử đầu tiên thỏa mãn điều kiện.

```javascript
const numbers = [1, 2, 3, 4];
const found = numbers.find(num => num > 2);
console.log(found); // Output: 3
```

### `findIndex`
Trả về chỉ số của phần tử đầu tiên thỏa mãn điều kiện.

```javascript
const numbers = [1, 2, 3, 4];
const index = numbers.findIndex(num => num > 2);
console.log(index); // Output: 2
```

### `some`
Kiểm tra xem có ít nhất một phần tử thỏa mãn điều kiện.

```javascript
const numbers = [1, 2, 3, 4];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true
```

### `every`
Kiểm tra xem tất cả phần tử có thỏa mãn điều kiện không.

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true
```

### `flat`
Làm phẳng mảng lồng nhau.

```javascript
const nested = [1, [2, 3], [4, [5]]];
const flatArray = nested.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]
```

### `flatMap`
Kết hợp `map` và `flat` để xử lý mảng lồng nhau trong một bước.

```javascript
const numbers = [1, 2, 3];
const result = numbers.flatMap(num => [num, num * 2]);
console.log(result); // Output: [1, 2, 2, 4, 3, 6]
```

## 6. Demo Tổng Hợp: Quản Lý Danh Sách Sinh Viên

```javascript
const students = [
  { name: "John", score: 85 },
  { name: "Jane", score: 92 },
  { name: "Bob", score: 78 },
  { name: "Alice", score: 95 }
];

// Lọc sinh viên có điểm trên 80, tăng điểm thêm 5, tính trung bình
const averageScore = students
  .filter(student => student.score > 80)
  .map(student => ({ ...student, score: student.score + 5 }))
  .reduce((acc, student, _, array) => acc + student.score / array.length, 0);

console.log(averageScore); // Output: 92.5

// Tìm sinh viên đầu tiên có điểm dưới 80
const lowScoreStudent = students.find(student => student.score < 80);
console.log(lowScoreStudent); // Output: { name: "Bob", score: 78 }

// Kiểm tra xem có sinh viên nào đạt 95 trở lên không
const hasTopStudent = students.some(student => student.score >= 95);
console.log(hasTopStudent); // Output: true
```

## Kết Luận

Các phương thức mảng như `map`, `filter`, `reduce`, cùng với `Map` và `Set`, cung cấp cách xử lý dữ liệu mạnh mẽ và linh hoạt trong JavaScript. Việc sử dụng kết hợp (chaining) các phương thức giúp viết code ngắn gọn và dễ đọc. Hãy thực hành với các ví dụ trên để nắm vững cách sử dụng!