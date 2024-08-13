function hienThi() {
var url = "http://localhost:3000/categories";
fetch(url).then(data => data.json())
.then (categories =>{
  cat_arr = categories.map(cate =>{
    return`<tr>
        <th scope="row">${cate.id}</th>
        <td>${cate.name}</td>
        <td><img src="${cate.image}" alt="Hình Ảnh" width="50"></td>
        <td>
          <button type="button" class="btn btn-primary">Sửa</button>
          <button type="button" class="btn btn-danger" onclick="deleteCategory(${cate.id})">Xóa</button>
        </td>
      </tr>
    `;
  })
  document.querySelector("#qldmsp").innerHTML=cat_arr.join('');
})
}
hienThi();
// Hàm thêm danh mục sản phẩm

const formElement = document.getElementById('addCategory')
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
  const url = "http://localhost:3000/categories";
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

// // Hàm sửa danh mục sản phẩm
// function editCategory(id, name, image) {
//   const url = `http://localhost:3000/categoies/${id}`;
//   const data = {
//     name: name,
//     image: image
//   };

//   fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(result => {
//     console.log('Sửa danh mục sản phẩm thành công:', result);
//     // Gọi lại hàm để cập nhật danh sách DMSP sau khi sửa
//     fetchCategories();
//   })
//   .catch(error => {
//     console.error('Lỗi khi sửa danh mục sản phẩm:', error);
//   });
// }

// Hàm xóa danh mục sản phẩm
function deleteCategory(id) {
  if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
    fetch(`http://localhost:3000/categoies/${id}`, {
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
