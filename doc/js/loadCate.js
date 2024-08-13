var url = "http://localhost:3000/categories";
fetch(url)
  .then((data) => data.json())
  .then((categories) => {
    cat_arr = categories.map((dm) => {
      return `<tr>
      <td width="10"><input type="checkbox" name="check1" value="1"></td>
      <td>${dm.id}</td>
      <td>${dm.name}</td>
      <td><img class="img-fluid" src="../${dm.image}" alt="" width="50px"></td>
      <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
      onclick = "deleteDM(${dm.id})"><i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
          data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i>
        </button>
      </td>
      </tr>`;
    });
    document.querySelector("#loadDM").innerHTML += cat_arr.join('');
  });


// Hàm xóa danh mục sản phẩm
function deleteDM(id) {
  if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
    fetch(`http://localhost:3000/categories/${id}`, {
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