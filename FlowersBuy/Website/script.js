const addProductBtn = document.getElementById('add-product-btn');
const productList = document.getElementById('product-list');
let length = 19;
addProductBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const productImage = document.getElementById('product-image').files[0];
  const productName = document.getElementById('product-name').value;
  const productDetails = document.getElementById('product-details').value;
  const productPrice = document.getElementById('product-price').value;

  const reader = new FileReader();

  reader.addEventListener('load', function() {
    const idName = "product-"+length;
    const product = createProduct(reader.result, productName,productDetails, productPrice,idName);
    productList.appendChild(product);
    length+=1;
  });

  reader.readAsDataURL(productImage);
});

function createProduct(imageUrl, name, details, price,idName) {
  const div = document.createElement('div');
  div.className = 'product';
  div.setAttribute('id',idName);
  const img = document.createElement('img');
  img.src = imageUrl;
  img.width = 200;
  img.alt = name;
  const h2 = document.createElement('h2');
  h2.className = 'name';
  h2.textContent = name;
  const h3 = document.createElement('h3');
  h3.textContent = details;
  const p = document.createElement('p');
  p.className = 'price';
  p.textContent = 'Rs.' + price;
  const button = document.createElement('button');
  button.className = 'add-to-cart';
  button.setAttribute('data-price', price);
  button.textContent = 'Buy';
  button.addEventListener('click', function() {
    const productName = this.parentElement.querySelector('.name').textContent;
    const productPrice = parseFloat(this.getAttribute('data-price'));
    const id_Name = this.parentElement.id;
    cart.push({ name: productName, price: productPrice, quantity: 1,idName: id_Name});
    updateCartUI();
  });

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(button);

  return div;
}

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let cart = [];
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('.name').textContent;
    // list.push(button.parentElement.id);
    // list.push(addToCartButtons.item);
    const id_Name = button.parentElement.id;
    const productPrice = parseFloat(button.getAttribute('data-price'));
    cart.push({ name: productName, price: productPrice, quantity: 1,idName:id_Name });
    updateCartUI();
  });
});
function updateCartUI() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="name">${item.name}</span>
      <span class="price">Rs.${(item.price * item.quantity).toFixed(2)}</span>
    `;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Rs.${total.toFixed(2)}`;
  const checkoutButton = document.getElementById('checkout-button');
  checkoutButton.addEventListener('click', () => {
    for (let i = 0; i < cart.length; i++) {
      const productId = cart[i].idName;
      const productCard = document.getElementById(productId);
      productCard.remove();
    }
    list = [];
    cart = [];
    updateCartUI();
  });
}
