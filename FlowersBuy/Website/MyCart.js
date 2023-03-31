let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCart();
  alert("Product added to cart");
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  let total = 0;
  cartItems.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = item.image;
    let h3 = document.createElement("h3");
    h3.innerText = item.name;
    let p = document.createElement("p");
    p.innerText = "$" + item.price.toFixed(2);
    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);
    cartItems.appendChild(li);
    total += item.price;
  }
  cartTotal.innerText = total.toFixed(2);
}

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let product = buttons[i].parentNode;
    addToCart(product);
  });
}

let checkoutButton = document.getElementById("checkout-button");

checkoutButton.addEventListener("click", function() {
  // Redirect to checkout page or handle checkout process here
});
