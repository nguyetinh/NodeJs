function arr_Detail(id){
    sessionStorage.setItem('id_Detail', id);
    window.location.href = "detail.html";
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
    event.preventDefault();
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
var url = "http://localhost:3000/api/products";
fetch(url)
  .then((data) => data.json())
  .then((products) => {
    pro_arr = products.map((shop) => {
      return `<div class="col-lg-3 col-md-6 col-sm-6 pb-1">
      <div class="product-item bg-light mb-4">
          <div class="product-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="http://localhost:3000/images/${shop.img}" alt="">
              <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="" onclick = "themvaogio(${shop.id},'${shop.name}','${shop.image}',${shop.price})"><i class="fa fa-shopping-cart"></i></a>
                  <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                  <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                  <a class="btn btn-outline-dark btn-square" href="detail.html" onclick = "arr_Detail(${shop.id})"><i class="fa fa-search"></i></a>
              </div>
          </div>
          <div class="text-center py-4">
              <a class="h6 text-decoration-none text-truncate" href="">${shop.name}</a>
              <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>${shop.price}</h5><h6 class="text-muted ml-2"><del>${shop.price * 1.2} vnd</del></h6>
              </div>
              <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="far fa-star text-primary mr-1"></small>
                  <small class="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
              </div>
          </div>
      </div>
  </div>
                `;
    });
    document.querySelector("#shop").innerHTML += pro_arr.join("");
  });


  