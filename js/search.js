let html
const search = document.getElementById('inputSearch');
const search1 = document.getElementById('search-1');
document.getElementById('search').onclick = function (event) {
    event.preventDefault();
    const keyword = search.value
          fetch('http://localhost:3000/products')
          .then(response => response.json())
          .then(data => {
            let kq = data.filter(item => item.name.includes(keyword))
            window.location.href = "search.html";
            html = kq.map(pro =>{
                return`<div class="col-lg-3 col-md-6 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="../Image/${pro.image}" alt="${pro.name}">
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
        </div>
                `;
              })
              search1.innerHTML=html.join('');
          })
          .catch(error => console.error('Error:', error));
        }
    
