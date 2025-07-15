# Hướng Dẫn và Giải Thích Kiến Thức JavaScript

## Section 2: Bài 1 - Cấu Trúc Dữ Liệu và Các Toán Tử Hiện Đại

### 1. Destructuring Array
Destructuring array cho phép trích xuất các phần tử từ mảng và gán chúng vào các biến riêng lẻ một cách ngắn gọn.

```javascript
const numbers = [10, 20, 30, 40, 50];
const [first, , third, ...rest] = numbers;
console.log('first:', first);   // 10
console.log('third:', third);   // 30
console.log('rest:', rest);     // [40, 50]
```

- `first` lấy phần tử đầu tiên (10).
- Dấu phẩy `,` bỏ qua phần tử thứ hai (20).
- `third` lấy phần tử thứ ba (30).
- `...rest` thu thập các phần tử còn lại thành một mảng ([40, 50]).

### 2. Spread Operator (…)
Toán tử Spread mở rộng các phần tử của một mảng hoặc đối tượng thành các phần tử riêng lẻ.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log('combined:', combined); // [1, 2, 3, 4]
```

- `...arr1` và `...arr2` mở rộng các mảng thành các phần tử riêng lẻ, sau đó kết hợp thành một mảng mới.

### 3. Rest Pattern và Parameters
Rest pattern thu thập các phần tử còn lại vào một biến, thường dùng trong destructuring hoặc tham số hàm.

```javascript
function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10
```

- `...numbers` thu thập tất cả đối số thành một mảng và tính tổng bằng `reduce`.

### 4. Short Circuiting
Toán tử `||` (OR) và `&&` (AND) sử dụng short-circuiting để trả về giá trị dựa trên điều kiện.

```javascript
let points = 0;
const displayPoints = points || 'No points';
console.log(displayPoints); // 'No points'
```

- `||` trả về giá trị đầu tiên "truthy" hoặc giá trị cuối cùng nếu không có giá trị truthy nào.

### 5. Nullish Coalescing Operator (??)
Toán tử `??` trả về giá trị bên phải nếu giá trị bên trái là `null` hoặc `undefined`.

```javascript
let userName = '';
const displayName = userName ?? 'Guest';
console.log(displayName); // ''
```

- Khác với `||`, `??` chỉ kiểm tra `null` hoặc `undefined`, không coi `0` hay `''` là falsy.

### 6. Logical Assignment Operators
Các toán tử gán logic (`||=`, `&&=`, `??=`) kết hợp gán giá trị với kiểm tra logic.

```javascript
let a = 0;
let b = 'Hello';
let c;
a ||= 'Fallback'; // Nếu a là falsy, gán 'Fallback'
b &&= 'Updated';  // Nếu b là truthy, gán 'Updated'
c ??= 'Default';  // Nếu c là null/undefined, gán 'Default'
console.log('a:', a); // 'Fallback'
console.log('b:', b); // 'Updated'
console.log('c:', c); // 'Default'
```

### 7. Optional Chaining (?.)
Optional chaining cho phép truy cập thuộc tính hoặc phương thức mà không gây lỗi nếu giá trị là `undefined` hoặc `null`.

```javascript
const user = {
  name: 'Dat',
  contact: {
    email: 'dat@gmail.com'
  }
};
console.log(user.contact?.email);  // 'dat@gmail.com'
console.log(user.profile?.age);    // undefined
```

- `?.` dừng kiểm tra nếu giá trị trước đó là `undefined` hoặc `null`, trả về `undefined`.

### 8. Object Destructuring
Destructuring object cho phép trích xuất các thuộc tính từ đối tượng và gán vào biến.

```javascript
const student = {
  name: 'Linh',
  age: 21,
  scores: {
    math: 9,
    english: 8
  }
};
const { name, scores: { math: diemToan, english: diemAnh } } = student;
console.log(name);       // Linh
console.log(diemToan);   // 9
console.log(diemAnh);    // 8
```

- Có thể đổi tên thuộc tính (VD: `math: diemToan`) và truy cập thuộc tính lồng nhau.

### 9. Enhanced Object Literal
Cú pháp ngắn gọn để tạo đối tượng (ES6+).

- **Tên thuộc tính tính toán**: `[key]: value`
- **Phương thức ngắn gọn**: `method() { ... }`
- **Thuộc tính trùng tên**: `{ name }` thay vì `{ name: name }`

### 10. Looping Object
Sử dụng `Object.keys`, `Object.values`, và `Object.entries` để duyệt qua đối tượng.

```javascript
const salaries = {
  John: 1000,
  Jane: 1500,
  Jim: 1200
};
const keys = Object.keys(salaries);       // ['John', 'Jane', 'Jim']
const values = Object.values(salaries);   // [1000, 1500, 1200]
const entries = Object.entries(salaries); // [['John', 1000], ['Jane', 1500], ['Jim', 1200]]
console.log('Keys:', keys);
console.log('Total:', values.reduce((sum, val) => sum + val, 0)); // 3700
for (const [name, salary] of entries) {
  console.log(`${name}: $${salary}`);
}
```

- `Object.keys`: Lấy danh sách các khóa.
- `Object.values`: Lấy danh sách các giá trị.
- `Object.entries`: Lấy danh sách cặp [khóa, giá trị].

## Section 3: Bài 2 - Cấu Trúc Dữ Liệu và Hàm

### 1. Làm Việc Với Strings
JavaScript cung cấp nhiều phương thức để thao tác chuỗi.

```javascript
const message = '  Welcome to JavaScript course!  ';
console.log(message.trim());         // 'Welcome to JavaScript course!'
console.log(message.toUpperCase());  // '  WELCOME TO JAVASCRIPT COURSE!  '
console.log(message.includes('JavaScript')); // true
```

- `trim()`: Xóa khoảng trắng đầu và cuối chuỗi.
- `toUpperCase()`: Chuyển chuỗi thành chữ hoa.
- `includes()`: Kiểm tra chuỗi con.

### 2. Default Parameters
Tham số mặc định cho phép gán giá trị mặc định cho tham số hàm nếu không được truyền vào.

```javascript
function greet(name = 'Guest') {
  console.log(`Hello ${name}`);
}
greet();         // Hello Guest
greet('Phát');   // Hello Phát
```

### 3. Value vs. Reference
- **Giá trị nguyên thủy** (VD: số, chuỗi) được sao chép khi gán.
- **Tham chiếu** (VD: đối tượng, mảng) chia sẻ cùng một tham chiếu.

```javascript
let x = 5;
let y = x;
y++;
console.log('x:', x); // 5
console.log('y:', y); // 6

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 100;
console.log('obj1:', obj1.value); // 100
console.log('obj2:', obj2.value); // 100
```

- `x` và `y` độc lập vì là giá trị nguyên thủy.
- `obj1` và `obj2` cùng tham chiếu đến một đối tượng, nên thay đổi `obj2` ảnh hưởng `obj1`.

### 4. Higher-Order Functions
Hàm bậc cao là hàm nhận hàm khác làm tham số hoặc trả về hàm.

```javascript
function calculator(operation) {
  if (operation === 'add') {
    return (a, b) => a + b;
  } else if (operation === 'multiply') {
    return (a, b) => a * b;
  } else {
    return () => 'Invalid';
  }
}
const add = calculator('add');
const multiply = calculator('multiply');
console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6
```

- `calculator` trả về hàm dựa trên `operation`, cho phép tái sử dụng logic.