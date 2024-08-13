    var url = "http://localhost:3000/api/categories";
fetch(url)
  .then((data) => data.json())
  .then((categories) => {
    cat_arr = categories.map((cat) => {
      return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a class="text-decoration-none" href="">
                        <div class="cat-item d-flex align-items-center mb-4">
                            <div class="overflow-hidden" style="width: 100px; height: 100px;">
                                <img class="img-fluid" src="http://localhost:3000/images/${cat.img}" alt="${cat.name}">
                            </div>
                            <div class="flex-fill pl-3">
                            <a href="#" class="nav-item nav-link text-dark" onclick="showProductsByCategory(${cat.id})">${cat.name}</a>
                                <small class="text-body">50 sản phẩm</small>
                            </div>
                        </div>
                    </a>
                </div>`;
    });
    document.querySelector("#loadmd").innerHTML += cat_arr.join('');
  });

  function showProductsByCategory(categoryId) {
    var url = `http://localhost:3000/api/products/categoryId/${categoryId}`;
    fetch(url).then(data => data.json())
    .then(products => {
        let pro_arr = products.map(pro => {
            return `
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="http://localhost:3000/images/${pro.img}" alt="${pro.name}">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" href="#" onclick = "themvaogio(${pro.id},'${pro.name}','${pro.img}',${pro.price})"><i class="fa fa-shopping-cart"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                        <a class="btn btn-outline-dark btn-square" href="detail.html" onclick = "arr_Detail(${pro.id})"><i class="fa fa-search"></i></a>
                    </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" href="detail.html?id=${pro.id}">${pro.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>${pro.price} vnd</h5><h6 class="text-muted ml-2"><del>${pro.price * 1.2} vnd</del></h6>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small>(99)</small>
                    </div>
                </div>
            </div>
        </div>`; 
        });
        document.querySelector("#loadspCt").innerHTML = pro_arr.join('');
    }).catch(err => console.error("Lỗi khi tải sản phẩm theo danh mục:", err));
}


function arr_Detail(id){
  sessionStorage.setItem('id_Detail', id);
  window.location.href = "detail.html";
}

var url = "http://localhost:3000/api/products/hot";
fetch(url,{
    headers:{
        'Authorization': 'Bearer '+localStorage.getItem('token')
    }
})
  .then((data) => data.json())
  .then((products) => {
    pro_arr = products.map((pro) => {
      return `<div class="col-lg-3 col-md-6 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="http://localhost:3000/images/${pro.img}" alt="${pro.name}">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href="#" onclick = "themvaogio(${pro.id},'${pro.name}','${pro.image}',${pro.price})">
                            <i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href="detail.html" onclick = "arr_Detail(${pro.id})"><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${pro.name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>${pro.price} vnd</h5>
                            <h6 class="text-muted ml-2"><del>${pro.price * 0.9} vnd</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
    </div>`;
    });
    document.querySelector("#loadspHot").innerHTML += pro_arr.join('');
  });

  var url = "http://localhost:3000/api/products";
fetch(url)
  .then((data) => data.json())
  .then((products) => {
    pro_arr = products.slice(5,13).map((pro) => {
      return `<div class="col-lg-3 col-md-6 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="http://localhost:3000/images/${pro.img}" alt="${pro.name}">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href="#" onclick = "themvaogio(${pro.id},'${pro.name}','${pro.image}',${pro.price})">
                            <i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href="detail.html" onclick = "arr_Detail(${pro.id})"><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${pro.name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>${pro.price} vnd</h5>
                            <h6 class="text-muted ml-2"><del>${pro.price * 0.9} vnd</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
    </div>`;
    });
    document.querySelector("#loadspNew").innerHTML += pro_arr.join('');
  });


  var url= "http://localhost:3000/api/categories";
  fetch(url).then(data => data.json())
  .then (categories =>{
      cat_arr = categories.map(cate => {
          return `<div class="navbar-nav w-100">
                      <a class="text-decoration-none" href="">
                      <div class="cat-item d-flex align-items-center mb-4">
                          <div class="overflow-hidden" style="width: 100px; height: 100px; ">
                              <img class="img-fluid"  src="http://localhost:3000/images/${cate.img}" alt="${cate.name}">
                          </div>           
                          <a href="" class="nav-item nav-link" onclick="showProductsByCategory(${cate.id})">${cate.name}</a>
                  </div>`;
      })
      document.querySelector("#dm").innerHTML+=cat_arr.join('');
  });


  var url = "http://localhost:3000/api/products";
fetch(url)
  .then((data) => data.json())
  .then((products) => {
    pro_arr = products.slice(3, 7).map((shop) => {
      return `<div class="col-lg-3 col-md-6 col-sm-6 pb-1">
      <div class="product-item bg-light mb-4">
          <div class="product-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="http://localhost:3000/images/${shop.img}" alt="">
              <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                  <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                  <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                  <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
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
