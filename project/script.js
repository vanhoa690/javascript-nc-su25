console.log("Day file script js");
// Hien thi danh sach
// Call API
async function getProducts() {
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();

  const htmlContent = data
    .map((item) => {
      return `
          <tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>@mdo</td>
        </tr>
      `;
    })
    .join("");
  document.getElementById("list").innerHTML = htmlContent;
}

getProducts();
// Render DOM
// Chuc nang xoa

async function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  const data = {
    name,
    price: Number(price),
  };
  await fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
