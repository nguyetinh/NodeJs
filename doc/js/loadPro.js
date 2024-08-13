var url = "http://localhost:3000/products";
fetch(url)
  .then((data) => data.json())
  .then((products) => {
    pro_arr = products.map((pro) => {
      return `<tr>
      <td width="10"><input type="checkbox" name="check1" value="1"></td>
      <td>${pro.id}</td>
      <td>${pro.name}</td>
      <td><img class="img-fluid w-100" src="../${pro.image}" alt="${pro.name}"></td>
      <td>${pro.quantity}</td>
      <td><span class="badge bg-success">Còn hàng</span></td>
      <td>${pro.price}</td>
      <td>${pro.cate_id}</td>
      <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
      onclick = "deleteProduct(${pro.id})"><i class="fas fa-trash-alt"></i> 
          </button>
          <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal"
data-target="#ModalUP"><i class="fas fa-edit"></i></button>
         
      </td>
  </tr>`;
    });
    document.querySelector("#loadPro").innerHTML += pro_arr.join('');
  });


// Hàm xóa danh mục sản phẩm
function deleteProduct(id) {
  if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      if (data) {
        alert("Xóa sản phẩm thành công");
        window.location.reload();
      } else {
        alert("Xóa sản phẩm thất bại");
      }
    })
    .catch(error => console.error('Error:', error));
  }
}