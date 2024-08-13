let cart = JSON.parse(localStorage.getItem("cart"));
document.querySelector("#btdathang").onclick = function () {
  var firstName = document.querySelector("#firstName").value.trim();
  var lastName = document.querySelector("#lastName").value.trim();
  var email = document.querySelector("#email").value.trim();
  var phone = document.querySelector("#phone").value.trim();
  var add = document.querySelector("#add").value.trim();

  // Validate form fields
  if (firstName == "" && lastName == "") {
    alert("Chua nhap ho ten");
    return;
  }

  if (email == "") {
    alert("Chua nhap email");
    return;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
  alert("Email không hợp lệ");
  return;
}
  if (phone == "") {
    alert("Chua nhap dien thoai");
    return;
  }
  var phoneRegex = /^\d{10}$/; // Định dạng: 10 chữ số
  if (!phoneRegex.test(phone.trim())) {
  alert("Số điện thoại không hợp lệ");
  return;
}

  if (add == "") {
    alert("Chua nhap dia chi giao hang");
    return;
  }

  // Create a new order
  var donHang = {
    customer_name: lastName + " " + firstName,
    customer_address: add,
    customer_email: email,
    customer_phone_number: phone,
    created_date: new Date().toISOString().slice(0, 10),
    status: "cho duyet",
  };

  // Send the order to the server
  let url = "http://localhost:3000/orders";
  let option = {
    method: "post",
    body: JSON.stringify(donHang),
    headers: { "Content-Type": "application/json" },
  };

  fetch(url, option)
    .then((res) => res.json())
    .then((data) => {
      order_id = data.id;
      chiTietDonHang(order_id);
    });
};

// Create order details
function chiTietDonHang(order_id) {
  let objsp = {
    id: order_id,
    sp: cart,
  };
  // Send order details to the server
  let url = "http://localhost:3000/order_details";
  let option = {
    method: "post",
    body: JSON.stringify(objsp),
    headers: { "Content-Type": "application/json" },
  };
  fetch(url, option)
    .then((res) => res.json())
    .then(() => {
      // Clear the cart
      localStorage.removeItem("cart");
      alert("Đặt hàng thành công");
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
//         // Call the function to create order details
//         chiTietDonHang(order_id);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

document.getElementById("tt").innerHTML = cart
  .map((item) => `
                                                              <div class="d-flex justify-content-between">
                                                              <p>${item.name}</p>
                                                              <p>${item.price}</p>
                                                              </div>`
  ).join("");

let total = cart.reduce((value, item) => {
  let price = item.quantity * item.price;
  return value + price;
}, 0);

document.getElementById("sum1").innerText = total;

document.getElementById("sum2").innerText = total;
