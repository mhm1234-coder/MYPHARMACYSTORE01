console.log("Pharmacy project running");

/* ================= CATEGORY FUNCTION ================= */

function filterCategory(category) {
  let items = document.querySelectorAll(".product");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else {
      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}
/* ================= CART FUNCTION ================= */

// Array to store cart items
let cart = [];

/**
 * Add item to shopping cart
 */
function addItem(itemName, price) {
  if (!itemName || !price) {
    alert("Item name and price is necessasry!");
    return false;
  }

  let item = {
    name: itemName,
    price: price
  };

  cart.push(item);

  alert(itemName + " added to cart!");
  console.log(cart);

  return true;
}

/**
 * Show all cart items
 */
function showCart() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let message = "Cart Items:\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - $${item.price}\n`;
  });

  alert(message);
}


/* ================= LOGIN FUNCTION ================= */

function loginUser(email, password) {
  if (!email || !password) {
    alert("Email aur password required !");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid email format!");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
  }

  alert("Login successful!");
  return true;
}


/* ================= SIGNUP FUNCTION ================= */

function signupUser(name, email, password) {
  if (!name || !email || !password) {
    alert("Please fill all fields!");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid email format!");
    return false;
  }

  alert("Signup successful!");
  return true;
}


/* ================= CONTACT FORM ================= */

function submitContact(message) {
  if (!message) {
    alert("Message is empty!");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}