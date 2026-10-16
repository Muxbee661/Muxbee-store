import { allProducts } from './products.js';

export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

let orderSuccess = false;

// Render cart products
function renderCart() {
  const container = document.querySelector('.cart');
  const summary = document.querySelector('.cart-summary');

  if (!container) return;

  // Empty cart design
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛍️</div>

        <h2>
          ${orderSuccess
            ? 'Order placed successfully!'
            : 'Your cart is empty'}
        </h2>

        <p>
          ${orderSuccess
            ? 'Thank you for shopping with MUXBEE & CO.'
            : 'Looks like you haven’t found your favourites yet.'}
        </p>

        <a href="index.html" class="continue-shopping">
          Continue Shopping
        </a>
      </div>
    `;

    if (summary) {
      summary.style.display = 'none';
    }

    return;
  }

  if (summary) {
    summary.style.display = '';
  }

  let cartHTML = '';

  cart.forEach((cartItem) => {
    const product = allProducts.find((item) => {
      return item.id === cartItem.productId;
    });

    if (!product) return;

    cartHTML += `
      <div class="cart-card">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

        <div class="cart-info">

          <h3>${product.name}</h3>

          <p class="item-price">
            ₦${product.price.toLocaleString()}
          </p>

          <div class="quantity-controls">

            <button
              class="quantity-btn"
              data-action="decrease"
              data-product-id="${product.id}"
              aria-label="Decrease quantity"
            >−</button>

            <span class="item-qty">
              ${cartItem.quantity}
            </span>

            <button
              class="quantity-btn"
              data-action="increase"
              data-product-id="${product.id}"
              aria-label="Increase quantity"
            >+</button>

          </div>

          <button
            class="delete-btn"
            data-product-id="${product.id}"
          >
            Delete
          </button>

        </div>

      </div>
    `;
  });

  container.innerHTML = cartHTML;

  // Quantity controls
  document.querySelectorAll('.quantity-btn')
    .forEach((button) => {

      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const action = button.dataset.action;

        const matchingItem = cart.find((item) => {
          return item.productId === productId;
        });

        if (!matchingItem) return;

        if (action === 'increase') {
          matchingItem.quantity += 1;
        }

        if (action === 'decrease') {
          matchingItem.quantity -= 1;

          // Remove the product if quantity reaches zero
          if (matchingItem.quantity <= 0) {
            cart = cart.filter((item) => {
              return item.productId !== productId;
            });
          }
        }

        saveCart();
        renderCart();
        updateSummary();
        updateBadge();
      });

    });

  // Delete products
  document.querySelectorAll('.delete-btn')
    .forEach((button) => {

      button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        cart = cart.filter((item) => {
          return item.productId !== productId;
        });

        saveCart();
        renderCart();
        updateSummary();
        updateBadge();
      });

    });
}

// Calculate order summary
function updateSummary() {
  let totalQuantity = 0;
  let subtotal = 0;

  cart.forEach((cartItem) => {
    const product = allProducts.find((item) => {
      return item.id === cartItem.productId;
    });

    if (!product) return;

    totalQuantity += cartItem.quantity;
    subtotal += product.price * cartItem.quantity;
  });

  const quantityElement =
    document.querySelector('.summary-quantity');

  const subtotalElement =
    document.querySelector('.summary-subtotal');

  const totalElement =
    document.querySelector('.summary-total-price');

  if (quantityElement) {
    quantityElement.textContent = totalQuantity;
  }

  if (subtotalElement) {
    subtotalElement.textContent =
      `₦${subtotal.toLocaleString()}`;
  }

  if (totalElement) {
    totalElement.textContent =
      `₦${subtotal.toLocaleString()}`;
  }
}

// Update cart badge
function updateBadge() {
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  document.querySelectorAll('.cart-badge')
    .forEach((badge) => {

      badge.textContent = totalQuantity;

      if (totalQuantity > 0) {
        badge.classList.add('show');
      } else {
        badge.classList.remove('show');
      }

    });
}

// Place order
const orderButton =
  document.querySelector('.place-order-btn');

if (orderButton) {
  orderButton.addEventListener('click', () => {

    const orderMessage =
      document.querySelector('.order-message');

    if (cart.length === 0) {
      if (orderMessage) {
        orderMessage.textContent = 'Your cart is empty.';
      }

      return;
    }

    orderButton.disabled = true;
    orderButton.textContent = 'Processing your order...';

    if (orderMessage) {
      orderMessage.textContent = '';
    }

    setTimeout(() => {
      cart = [];
      orderSuccess = true;

      saveCart();
      renderCart();
      updateSummary();
      updateBadge();

      orderButton.disabled = false;
      orderButton.textContent = 'Place Order';

    }, 2000);

  });
}

// Initial rendering
renderCart();
updateSummary();
updateBadge();