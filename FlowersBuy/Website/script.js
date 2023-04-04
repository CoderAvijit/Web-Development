
// Get the add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Get the cart items and total
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Initialize the cart
let cart = [];
var list = new Array();

// Handle add-to-cart button clicks
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product name and price
    const productName = button.previousElementSibling.previousElementSibling.textContent;
    list.push(button.parentElement.id);
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Add the product to the cart
    cart.push({ name: productName, price: productPrice, quantity: 1 });

    // Update the cart UI
    updateCartUI();
  });
});

// Update the cart UI
function updateCartUI() {
  // Clear the cart items
  cartItems.innerHTML = '';

  // Calculate the cart total
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  // Update the cart items and total
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="name">${item.name}</span>
      <span class="quantity">${item.quantity}</span>
      <span class="price">Rs.${(item.price * item.quantity).toFixed(2)}</span>
    `;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `RS.${total.toFixed(2)}`;
}

// Handle checkout button click

const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
  // alert(`Total: Rs.${cartTotal.textContent}`);

  for(var i=0; i<list.length; i++){
    const productId = list[i];
    const productCard = document.getElementById(productId);
    productCard.remove();
  }
  
  // Clear the cart array
  cart = [];
  
  // Update the c
});
