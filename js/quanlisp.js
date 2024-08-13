
function hienThi() {
var url = "http://localhost:3000/products";
fetch(url).then(data => data.json())
.then (products =>{
  prot_arr = products.map(prot =>{
    return`<tr>
        <th scope="row">${prot.id}</th>
        <td>${prot.name}</td>
        <td>${prot.price}</td>
        <td><img src="${prot.image}" alt="Hình Ảnh" width="50"></td>
        <td>
          <button type="button" class="btn btn-primary">Sửa</button>
          <button type="button" class="btn btn-danger" onclick="deleteCategory(${prot.id})">Xóa</button>
        </td>
      </tr>
    `;
  })
  document.querySelector("#qlsp").innerHTML+=prot_arr.join('');
})
}
hienThi();



const formElement = document.getElementById('addProduct')
formElement.onsubmit = function (event) {

  event.preventDefault();
  const inputs = formElement.querySelectorAll('input[name]')
  console.log(inputs);

  let data = { }
  inputs.forEach(function (input) {
    let value
    if (input.type == 'file') {
      value = URL.createObjectURL(input.files[0])
      console.log(value);
    }else{
      value = input.value;
    }
    data = {
      [input.name]: value,
      ...data
    }
  })
  const url = "http://localhost:3000/products";
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    hienThi();
    alert('Thêm danh mục sản phẩm thành công:', result);
  })
  .catch(error => {
    console.error('Lỗi khi thêm danh mục sản phẩm:', error);
  });
}

// Hàm xóa danh mục sản phẩm
function deleteCategory(id) {
  if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      if (data) {
        alert("Xóa danh mục thành công");
        window.location.reload();
      } else {
        alert("Xóa danh mục thất bại");
      }
    })
    .catch(error => console.error('Error:', error));
  }
}