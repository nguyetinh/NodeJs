function arr_Detail(id){
  sessionStorage.setItem('id_Detail', id);
  window.location.href = "detail.html";
}

var url = "http://localhost:3000/api/products";
fetch(url)
  .then((data) => data.json())
  .then((products) => {
    pro_arr = products.slice(4,8).map((detail) => {
      return `          
      <div class="col-lg-3 col-md-6 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="http://localhost:3000/images/${detail.img}" alt="${detail.name}">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href="#" onclick = "themvaogio(${detail.id},'${detail.name}','${detail.image}',${detail.price})">
                            <i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href="detail.html" onclick = "arr_Detail(${detail.id})"><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${detail.name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>${detail.price} vnd</h5>
                            <h6 class="text-muted ml-2"><del>${detail.price * 0.9} vnd</del></h6>
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
    </div>

      `;
    });
    document.querySelector("#detail").innerHTML += pro_arr.join('');
  });
