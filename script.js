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
// 1. Calculate Estimated Elixir Subtotal (sum of all product prices)
const allProductCards = document.querySelectorAll('.product-card');
let grandTotal = 0;

allProductCards.forEach(card => {
  const price = Number(card.getAttribute('data-price')) || 0;
  grandTotal += price;
});

const subtotalDisplay = document.getElementById('cart-subtotal');
if (subtotalDisplay) {
  subtotalDisplay.textContent = `Estimated Elixir Subtotal: ₱${grandTotal}`;
}

// 2. Dynamic Delivery Info Banner
const deliveryElement = document.getElementById('delivery-info');
const fixedDeliveryFee = 50;

function updateDeliveryBanner(price) {
  if (!deliveryElement) return;
  const total = price + fixedDeliveryFee;
  deliveryElement.textContent = `Order Subtotal: ₱${price} | Delivery Fee: ₱${fixedDeliveryFee} | Final Total: ₱${total}`;
}

// Default display on page load
const initialPrice = allProductCards.length > 0 ? Number(allProductCards[0].getAttribute('data-price')) : 0;
updateDeliveryBanner(initialPrice);

// 3. Hover Event Listeners on Product Cards
allProductCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const productPrice = Number(card.getAttribute('data-price')) || 0;
    updateDeliveryBanner(productPrice);
  });
});
// 3. shop open or closed (boolean + ternary)
const isOpen = true; // change to false to test
const shopStatusElement = document.getElementById('shop-status');

if (shopStatusElement) {
  shopStatusElement.textContent = isOpen ? "Store Status: Open" : "Store Status: Closed today";
}