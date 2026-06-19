let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
  document.getElementById("cart-total").textContent = `Total: $${total}`;
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    product.style.display = name.includes(query) ? "block" : "none";
  });
}

function filterProducts() {
  const category = document.getElementById("category").value;
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thank you for shopping at flipkart! Your total is $${total}.`);
    cart = [];
    total = 0;
    updateCart();
  }
}