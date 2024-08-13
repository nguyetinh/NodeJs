document.querySelector("#btcheckout").onclick = function() {
  document.location = "checkout.html";
}



function getCartItemCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.length;
}


function updateCartItemCount() {
  let cartItemCount = getCartItemCount();
  let badgeElement = document.querySelector('#cartItemCount');
  if (badgeElement) {
      badgeElement.textContent = cartItemCount.toString();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartItemCount();
});

function themvaogio(id, ten, hinh, gia) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
      cart = [];
      cart.push({ id: id, name: ten, image: hinh, price: gia, quantity: 1 });
    } else {
      let item = cart.find((item) => item.id === id);
      if (item) item.quantity++;
      else cart.push({ id: id, name: ten, image: hinh, price: gia, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng ')
    updateCartItemCount();
  }
  
  var tt = 0;
  function hiengiohang(){
    cart = JSON.parse(localStorage.getItem("cart"));
    if(cart)
      cart.forEach((pro, index) => {
        var tc = pro.price * pro.quantity;
        tt += tc;
        document.querySelector("#tb_cart").innerHTML += `
          <tr>
                              <td class="align-middle"><img src="http://localhost:3000/images/${pro.img}" alt="" style="width: 50px;">${pro.name}</td>
                              <td class="align-middle">${pro.price}</td>
                              <td class="align-middle">
                                      <input type="number" min = 1 value="${pro.quantity}"
                                      onkeyup = 'tinhTien(${pro.price}, this.value, ${index})'
                                      onchange = 'tinhTien(${pro.price}, this.value, ${index})'>
                              </td>
                              <td class="align-middle">${tc}</td>
                              <td class="align-middle"><button class="btn btn-sm btn-danger" onclick = "xoasanpham(${index})"><i class="fa fa-times"></i></button></td>
                          </tr>
          `;
    document.querySelector(`#tb_cart tr:nth-child(${index + 1}) td:nth-child(4)`).innerHTML = tc;
      });
      tinhTongTien()
  }
  function tinhTien(gia, soLuong, index) {  
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart.length > 0) {
     cart.forEach((item, iIndex) => {   
        if(iIndex === index){
          item.quantity = soLuong;
        }
      })
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    var tc = gia * soLuong;
    var oldTc = document.querySelector(`#tb_cart tr:nth-child(${index + 1}) td:nth-child(4)`).innerHTML;
  oldTc = parseInt(oldTc);
  tt = tt - oldTc + tc;
    document.querySelector(`#tb_cart tr:nth-child(${index + 1}) td:nth-child(4)`).innerHTML = tc;
    tinhTongTien()
  }
  
  function tinhTongTien() {
    
    document.querySelector("#tong_tien").innerHTML = tt;
    document.querySelector("#tong").innerHTML = tt;
  }
  
  hiengiohang();
  
  function xoasanpham(index){
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    window.location.reload();
}
