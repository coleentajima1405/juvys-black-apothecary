// 1. variables & constants
const shopName = "Juvy's Black Apothecary";
const currentYear = new Date().getFullYear();
let cartSubtotal = 0;

// sample calculations (adds a couple of potion prices dynamically)
const crypticColdBrewPrice = 130;
const vampiricVelvetLattePrice = 145;
cartSubtotal = crypticColdBrewPrice + vampiricVelvetLattePrice;

// 2. update page content using ids
// write shop name
const shopTitleElement = document.getElementById("shop-title");
if (shopTitleElement) {
  shopTitleElement.textContent = shopName;
}

// write dynamic copyright line in footer
const copyrightElement = document.getElementById("copyright");
if (copyrightElement) {
  copyrightElement.textContent = `© ${currentYear} ${shopName}. All rights reserved in the shadows.`;
}

// write calculated subtotal onto the page
const subtotalElement = document.getElementById("cart-subtotal");
if (subtotalElement) {
  subtotalElement.textContent = `Estimated Elixir Subtotal: ₱${cartSubtotal}`;
}

// 3. labelled console logs
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Calculated Subtotal:", cartSubtotal);

// dynamic category filter handling
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get('category');

if (selectedCategory) {
  const cards = document.querySelectorAll('.product-card');
  const pageTitle = document.getElementById('page-title');

  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // optional title update
  if (pageTitle) {
    if (selectedCategory === 'cold') pageTitle.textContent = 'Cold Elixirs';
    if (selectedCategory === 'hot') pageTitle.textContent = 'Hot Potions';
    if (selectedCategory === 'desserts') pageTitle.textContent = 'Midnight Desserts';
    if (selectedCategory === 'all') pageTitle.textContent = 'All Products';
    }
}

const productStock = 5; // change value to test (e.g., 15, 5, 0)
const stockElement = document.getElementById('stock-status');
  
if (stockElement) {
  if (productStock > 10) {
    stockElement.textContent = "Status: In stock";
  } else if (productStock >= 1) {
    stockElement.textContent = "Status: Only a few left";
  } else {
    stockElement.textContent = "Status: Sold out";
  }
}
// 2. fee Delivery check (&& operator + ternary)
const rawOrderTotal = "450"; // simulating a value coming from a form or variable
const numericOrderTotal = Number(rawOrderTotal); // ensuring numeric type for arithmetic
const isMember = true; // change to false to test

// free delivery if total is over 300 AND user is a member
const isEligibleForFreeDelivery = numericOrderTotal > 300 && isMember === true;
const deliveryFee = isEligibleForFreeDelivery ? 0 : 150;
const finalTotal = numericOrderTotal + deliveryFee;

const deliveryElement = document.getElementById('delivery-info');
if (deliveryElement) {
  deliveryElement.textContent = `Order Subtotal: ₱${numericOrderTotal} | Delivery Fee: ₱${deliveryFee} | Final Total: ₱${finalTotal}`;
}

// 3. shop open or closed (boolean + ternary)
const isOpen = true; // change to false to test
const shopStatusElement = document.getElementById('shop-status');

if (shopStatusElement) {
  shopStatusElement.textContent = isOpen ? "Store Status: Open" : "Store Status: Closed today";
}