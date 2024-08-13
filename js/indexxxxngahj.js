var url= "http://localhost:3000/api/categories";
fetch(url).then(data => data.json())
.then (categories =>{
    cat_arr = categories.map(cat => {
        return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a class="text-decoration-none" href="">
                        <div class="cat-item d-flex align-items-center mb-4">
                            <div class="overflow-hidden" style="width: 100px; height: 100px;">
                                <img class="img-fluid" src="/img/${cat.img}" alt="${cat.name}">
                            </div>
                            <div class="flex-fill pl-3">
                            <a href="#" class="nav-item nav-link" onclick="showProductsByCategory(${cat.id})">${cat.name}</a>
                                <small class="text-body">Xem chi tiết</small>
                            </div>
                        </div>
                    </a>
                </div>`;
    })
    document.querySelector("#loaddm").innerHTML+=cat_arr.join('');
});

function showProductsByCategory(categoryId) {
    var url = `http://localhost:3000/api/products/categoryid/${categoryId}`;
    fetch(url).then(data => data.json())
    .then(products => {
        let pro_arr = products.map(pro => {
            return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="/img/${pro.img}" alt="${pro.name}">
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
        document.querySelector("#loadsp").innerHTML = pro_arr.join('');
    }).catch(err => console.error("Lỗi khi tải sản phẩm theo danh mục:", err));

}

// function showProductsByCategory(categoryId) {
//     // Chuyển hướng người dùng đến trang shop với categoryId là một tham số truy vấn
//     window.location.href = `shop.html?category=${categoryId}`;
// }

var url= "http://localhost:3000/api/products/hot";
fetch(url).then(data => data.json())
.then (products =>{
    pro_arr = products.map(pro => {
        return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="/img/${pro.img}" alt="${pro.name}">
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
    })
    document.querySelector("#loadsp").innerHTML+=pro_arr.join('');
})



//dm sổ 
var url= "http://localhost:3000/api/categories";
fetch(url).then(data => data.json())
.then (categories =>{
    cat_arr = categories.map(cate => {
        return `<div class="navbar-nav w-100">
                    <a class="text-decoration-none" href="">
                    <div class="cat-item d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style="width: 100px; height: 100px; ">
                            <img class="img-fluid"  src="/img/${cate.img}" alt="${cate.name}">
                        </div>           
                        <a href="" class="nav-item nav-link" onclick="showProductsByCategory(${cate.id})">${cate.name}</a>
                </div>`;
    })
    document.querySelector("#dm").innerHTML+=cat_arr.join('');
})

// serach
function searchProduct(event) {
    event.preventDefault(); // Ngăn chặn form được submit theo cách truyền thống
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput) {
        fetch(`http://localhost:3000/api/products/search/${searchInput}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Xử lý và hiển thị kết quả tìm kiếm tại đây
                // Ví dụ: updateDOM(data);
            })
            .catch(error => console.error('Error:', error));
    } else {
        // Hiển thị thông báo lỗi hoặc cảnh báo khi trường tìm kiếm trống
        console.log('Vui lòng nhập tên sản phẩm cần tìm');
    }
}
