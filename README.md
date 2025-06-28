# Hướng Dẫn JavaScript Nâng Cao

Hướng dẫn này cung cấp cái nhìn tổng quan về các kiến thức JavaScript cần thiết, bao gồm các mục tiêu học tập (CLO) từ cơ bản đến nâng cao. Nội dung được tổ chức để hỗ trợ người học nắm vững các khái niệm và áp dụng thực tế.

## Mục Lục

1. [CLO1: Sử dụng Cấu trúc Dữ liệu và Toán tử Hiện đại](#clo1)
2. [CLO2: Hàm Nâng cao](#clo2)
3. [CLO3: Làm việc với Mảng, Maps, Sets và các Phương thức](#clo3)
4. [CLO4: DOM và Xử lý Sự kiện Nâng cao](#clo4)
5. [CLO5: Hướng Đối tượng (OOP) trong JavaScript](#clo5)
6. [CLO6: Bất Đồng bộ trong JavaScript](#clo6)

---

## CLO1: Sử dụng Cấu trúc Dữ liệu và Toán tử Hiện đại

### Cấu trúc Dữ liệu

- **Array**: Lưu trữ danh sách các phần tử. Ví dụ:
  ```javascript
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits[0]); // 'apple'
  ```
- **Object**: Lưu trữ dữ liệu dạng key-value. Ví dụ:
  ```javascript
  const person = { name: "John", age: 30 };
  console.log(person.name); // 'John'
  ```
- **String**: Chuỗi ký tự, hỗ trợ các phương thức như `slice()`, `toUpperCase()`. Ví dụ:
  ```javascript
  const str = "Hello World";
  console.log(str.toUpperCase()); // 'HELLO WORLD'
  ```

### Toán tử Hiện đại

- **Spread Operator (`...`)**: Sao chép hoặc hợp nhất mảng/đối tượng. Ví dụ:
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
  const obj1 = { a: 1 };
  const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
  ```
- **Rest Pattern and Parameters**: Thu thập các phần tử còn lại. Ví dụ:
  ```javascript
  const [a, b, ...rest] = [1, 2, 3, 4]; // a=1, b=2, rest=[3, 4]
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3)); // 6
  ```
- **Short Circuiting**: Sử dụng `&&` và `||` để đánh giá điều kiện nhanh. Ví dụ:
  ```javascript
  const result = true && "Hello"; // 'Hello'
  const fallback = false || "Default"; // 'Default'
  ```
- **Nullish Coalescing Operator (`??`)**: Kiểm tra giá trị `null` hoặc `undefined`. Ví dụ:
  ```javascript
  const value = null ?? "Default"; // 'Default'
  ```

---

## CLO2: Hàm Nâng cao

- **Default Parameters**: Đặt giá trị mặc định cho tham số. Ví dụ:
  ```javascript
  function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greet()); // 'Hello, Guest!'
  ```
- **Value vs. Reference**:
  - Giá trị nguyên thủy (primitive) được sao chép. Ví dụ:
    ```javascript
    let a = 5;
    let b = a;
    b = 10;
    console.log(a); // 5
    ```
  - Tham chiếu (object, array) chia sẻ bộ nhớ. Ví dụ:
    ```javascript
    const obj1 = { value: 10 };
    const obj2 = obj1;
    obj2.value = 20;
    console.log(obj1.value); // 20
    ```

---

## CLO3: Làm việc với Mảng, Maps, Sets và các Phương thức

- **Map**: Biến đổi từng phần tử. Ví dụ:
  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map((n) => n * 2); // [2, 4, 6]
  ```
- **Filter**: Lọc phần tử theo điều kiện. Ví dụ:
  ```javascript
  const evens = numbers.filter((n) => n % 2 === 0); // [2]
  ```
- **Reduce**: Tích lũy giá trị. Ví dụ:
  ```javascript
  const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 6
  ```
- **Chaining**: Kết hợp các phương thức. Ví dụ:
  ```javascript
  const result = numbers.map((n) => n * 2).filter((n) => n > 2); // [4, 6]
  ```
- **Find và FindIndex**: Tìm phần tử hoặc chỉ số. Ví dụ:
  ```javascript
  const found = numbers.find((n) => n > 1); // 2
  const index = numbers.findIndex((n) => n > 1); // 1
  ```
- **Some và Every**: Kiểm tra điều kiện. Ví dụ:
  ```javascript
  const hasEven = numbers.some((n) => n % 2 === 0); // true
  const allPositive = numbers.every((n) => n > 0); // true
  ```
- **Flat và FlatMap**: Làm phẳng mảng. Ví dụ:
  ```javascript
  const nested = [1, [2, 3]];
  console.log(nested.flat()); // [1, 2, 3]
  console.log(numbers.flatMap((n) => [n, n * 2])); // [1, 2, 2, 4, 3, 6]
  ```
- **Maps và Sets**:
  - Map: Lưu trữ cặp key-value, key có thể là bất kỳ loại dữ liệu.
    ```javascript
    const map = new Map();
    map.set("key", "value");
    console.log(map.get("key")); // 'value'
    ```
  - Set: Lưu trữ giá trị duy nhất.
    ```javascript
    const set = new Set([1, 2, 2]);
    console.log([...set]); // [1, 2]
    ```

---

## CLO4: DOM và Xử lý Sự kiện Nâng cao

- **Page Navigation**: Điều hướng mượt mà với `scrollIntoView`. Ví dụ:
  ```javascript
  document.querySelector("#section1").scrollIntoView({ behavior: "smooth" });
  ```
- **Sticky Navigation**: Thêm lớp CSS khi cuộn đến vị trí. Ví dụ:
  ```javascript
  const nav = document.querySelector(".nav");
  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("sticky", !entry.isIntersecting);
    },
    { threshold: 0 }
  );
  observer.observe(document.querySelector(".header"));
  ```
- **Reveal Elements on Scroll**: Hiển thị phần tử khi cuộn đến. Ví dụ:
  ```javascript
  const sections = document.querySelectorAll(".section");
  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      }
    });
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15,
  });
  sections.forEach((section) => sectionObserver.observe(section));
  ```
- **Lazy Loading Images**: Tải hình ảnh khi hiển thị. Ví dụ:
  ```javascript
  const images = document.querySelectorAll("img[data-src]");
  const loadImage = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.remove("lazy-img");
        observer.unobserve(entry.target);
      }
    });
  };
  const imgObserver = new IntersectionObserver(loadImage, { threshold: 0.1 });
  images.forEach((img) => imgObserver.observe(img));
  ```
- **Slider Component**: Tạo thanh trượt. Ví dụ:
  ```javascript
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };
  document.querySelector(".next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  });
  ```

---

## CLO5: Hướng Đối tượng (OOP) trong JavaScript

- **Constructor Functions và `new` Operator**:
  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const john = new Person("John", 30);
  console.log(john.name); // 'John'
  ```
- **Setters và Getters**:
  ```javascript
  const person = {
    _age: 30,
    get age() {
      return this._age;
    },
    set age(value) {
      if (value > 0) this._age = value;
    },
  };
  person.age = 31;
  console.log(person.age); // 31
  ```
- **Encapsulation**: Ẩn chi tiết triển khai. Ví dụ:
  ```javascript
  class Account {
    #balance = 0; // Thuộc tính riêng tư
    deposit(amount) {
      this.#balance += amount;
    }
    getBalance() {
      return this.#balance;
    }
  }
  const acc = new Account();
  acc.deposit(100);
  console.log(acc.getBalance()); // 100
  ```

---

## CLO6: Bất Đồng bộ trong JavaScript

- **Event Loop**: Quản lý các tác vụ bất đồng bộ, ưu tiên thực thi đồng bộ trước.
- **Callback Hell**: Xử lý nhiều callback lồng nhau. Ví dụ:
  ```javascript
  setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
    }, 1000);
  }, 1000);
  ```
- **Promises**: Giải quyết callback hell. Ví dụ:
  ```javascript
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched"), 1000);
    });
  };
  fetchData().then((data) => console.log(data)); // 'Data fetched'
  ```
- **Async/Await**: Cú pháp đơn giản hơn cho Promise. Ví dụ:
  ```javascript
  async function getData() {
    const data = await fetchData();
    console.log(data);
  }
  getData(); // 'Data fetched'
  ```
- **AJAX Calls và APIs**: Gọi API với `fetch`. Ví dụ:
  ```javascript
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  ```
- **Throw Errors và Error Handling**:
  ```javascript
  async function fetchWithError() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      console ec0
      .log(data);
    } catch (error) {
      console.error('Caught error:', error.message);
    }
  }
  fetchWithError();
  ```

---

## Tài Nguyên Thêm

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- Thực hành qua các dự án nhỏ để củng cố kiến thức.
