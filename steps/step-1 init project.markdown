# Hướng Dẫn Cài Đặt và Phát Triển Trang Danh Sách Sản Phẩm với pnpm, JSON Server và JavaScript Thuần

Hướng dẫn này sẽ giúp bạn cài đặt **pnpm**, **JSON Server**, chạy server, tạo trang hiển thị danh sách sản phẩm sử dụng JavaScript thuần, và áp dụng **GitHub Flow** để lưu trữ mã nguồn trên GitHub.

## Mục Lục
1. [Cài đặt pnpm](#cai-dat-pnpm)
2. [Cài đặt và chạy JSON Server](#cai-dat-va-chay-json-server)
3. [Tạo trang danh sách sản phẩm với JavaScript thuần](#tao-trang-danh-sach-san-pham)
4. [GitHub Flow để lưu trữ mã nguồn](#github-flow)

---

## Cài đặt pnpm

**pnpm** là một trình quản lý gói nhanh và tiết kiệm dung lượng đĩa. Để cài đặt, bạn cần có **Node.js** (phiên bản ≥ 18.12) trên hệ thống.

### Bước 1: Cài đặt pnpm
Chạy lệnh sau để cài đặt pnpm toàn cục:
```bash
npm install -g pnpm
```
Hoặc sử dụng Corepack (khuyến nghị cho tính nhất quán):
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### Bước 2: Kiểm tra cài đặt
Xác nhận pnpm đã được cài đặt:
```bash
pnpm --version
```
Kết quả sẽ hiển thị phiên bản pnpm, ví dụ: `10.12.4`.

### Bước 3: Tạo dự án mới
Tạo thư mục dự án và khởi tạo `package.json`:
```bash
mkdir product-list-app
cd product-list-app
pnpm init
```
Lệnh `pnpm init` tạo file `package.json` với các thiết lập cơ bản.

---

## Cài đặt và chạy JSON Server

**JSON Server** là công cụ tạo API giả lập từ file JSON, phù hợp cho phát triển front-end.

### Bước 1: Cài đặt JSON Server
Trong thư mục dự án, cài đặt JSON Server:
```bash
pnpm add json-server
```

### Bước 2: Tạo file dữ liệu JSON
Tạo file `db.json` trong thư mục dự án với nội dung:
```json
{
  "products": [
    { "id": 1, "name": "Laptop", "price": 999.99, "category": "Electronics" },
    { "id": 2, "name": "Smartphone", "price": 499.99, "category": "Electronics" },
    { "id": 3, "name": "Headphones", "price": 89.99, "category": "Accessories" }
  ]
}
```

### Bước 3: Thêm script chạy JSON Server
Trong `package.json`, thêm script:
```json
"scripts": {
  "server": "json-server --watch db.json --port 3000"
}
```

### Bước 4: Chạy JSON Server
Chạy server:
```bash
pnpm run server
```
Server sẽ chạy tại `http://localhost:3000`. Bạn có thể kiểm tra dữ liệu tại:
- `http://localhost:3000/products`: Lấy danh sách sản phẩm.
- `http://localhost:3000/products/1`: Lấy sản phẩm với ID 1.

---

## Tạo trang danh sách sản phẩm

Tạo trang web hiển thị danh sách sản phẩm sử dụng **JavaScript thuần**, áp dụng các kiến thức từ CLO1, CLO3, CLO4, và CLO6.

### Bước 1: Tạo cấu trúc dự án
Tạo các file sau trong thư mục dự án:
```
product-list-app/
├── db.json
├── index.html
├── styles.css
├── script.js
└── package.json
```

### Bước 2: Tạo file HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Danh Sách Sản Phẩm</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Danh Sách Sản Phẩm</h1>
  </header>
  <main>
    <section id="product-list" class="product-container"></section>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

### Bước 3: Tạo file CSS (`styles.css`)
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}
header {
  text-align: center;
}
.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  transition: transform 0.3s;
}
.product-card:hover {
  transform: scale(1.05);
}
.product-card h3 {
  margin: 0 0 10px;
}
.hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s;
}
.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Bước 4: Tạo file JavaScript (`script.js`)
Sử dụng JavaScript thuần với **fetch API** (CLO6), **map/filter** (CLO3), **DOM manipulation** (CLO4), và **Spread Operator** (CLO1):
```javascript
// Lấy phần tử container
const productList = document.querySelector('#product-list');

// Hàm lấy dữ liệu sản phẩm từ JSON Server
async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) throw new Error('Không thể lấy dữ liệu');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Lỗi:', error.message);
    return [];
  }
}

// Hàm hiển thị danh sách sản phẩm
function displayProducts(products) {
  // Sử dụng map để tạo HTML cho mỗi sản phẩm
  const productHTML = products
    .map(product => `
      <div class="product-card hidden">
        <h3>${product.name}</h3>
        <p>Giá: $${product.price}</p>
        <p>Danh mục: ${product.category}</p>
      </div>
    `)
    .join('');
  
  productList.innerHTML = productHTML;

  // Hiển thị hiệu ứng cuộn (Reveal on Scroll)
  const cards = document.querySelectorAll('.product-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.replace('hidden', 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}

// Hàm khởi tạo
async function init() {
  const products = await fetchProducts();
  
  // Sử dụng Spread Operator để sao chép và lọc sản phẩm (CLO1, CLO3)
  const filteredProducts = [...products].filter(product => product.price > 50);
  
  displayProducts(filteredProducts);
}

// Chạy ứng dụng
init();
```

### Bước 5: Chạy ứng dụng
1. Đảm bảo JSON Server đang chạy (`pnpm run server`).
2. Mở `index.html` trong trình duyệt (có thể dùng extension như **Live Server** trong VS Code).
3. Trang web sẽ hiển thị danh sách sản phẩm với hiệu ứng cuộn mượt mà.

---

## GitHub Flow

**GitHub Flow** là quy trình quản lý mã nguồn đơn giản, tập trung vào việc sử dụng các nhánh (branches) để phát triển tính năng và hợp nhất mã.

### Bước 1: Tạo repository trên GitHub
1. Truy cập [GitHub](https://github.com) và đăng nhập.
2. Nhấn **New Repository**, đặt tên (ví dụ: `product-list-app`), chọn **Public** hoặc **Private**, và tạo.

### Bước 2: Khởi tạo Git và đẩy mã lên GitHub
Trong thư mục dự án:
```bash
git init
git add .
git commit -m "Khởi tạo dự án danh sách sản phẩm"
git branch -M main
git remote add origin <URL-repository-của-bạn>
git push -u origin main
```

### Bước 3: Quy trình GitHub Flow
1. **Tạo nhánh mới cho tính năng**:
   ```bash
   git checkout -b feature/add-product-filter
   ```
2. **Thực hiện thay đổi**:
   Chỉnh sửa mã (ví dụ: thêm bộ lọc giá trong `script.js`).
3. **Commit thay đổi**:
   ```bash
   git add .
   git commit -m "Thêm bộ lọc giá cho danh sách sản phẩm"
   ```
4. **Đẩy nhánh lên GitHub**:
   ```bash
   git push origin feature/add-product-filter
   ```
5. **Tạo Pull Request (PR)**:
   - Truy cập repository trên GitHub.
   - Chọn nhánh `feature/add-product-filter` và tạo PR.
   - Mô tả chi tiết thay đổi và gửi PR.
6. **Xem xét và hợp nhất**:
   - Kiểm tra mã trong PR.
   - Hợp nhất PR vào nhánh `main` qua giao diện GitHub.
   - Xóa nhánh `feature/add-product-filter` sau khi hợp nhất.
7. **Cập nhật local repository**:
   ```bash
   git checkout main
   git pull origin main
   ```

### Bước 4: Lặp lại quy trình
Tạo nhánh mới cho mỗi tính năng hoặc sửa lỗi, lặp lại các bước trên.

---

## Tài Nguyên
- [Tài liệu pnpm](https://pnpm.io/)[](https://pnpm.io/installation)
- [Tài liệu JSON Server](https://github.com/typicode/json-server)
- [Hướng dẫn GitHub Flow](https://guides.github.com/introduction/flow/)