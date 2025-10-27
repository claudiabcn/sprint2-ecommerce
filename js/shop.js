import { products } from "./products.js";

const cart = [];
const cartList = document.querySelector('#cart_list');
const totalPrice = document.querySelector('#total_price');
const promoPrice = document.querySelector('#promo_price');
const countProductBadge = document.querySelector('#count_product');

const buy = (productId) => {
    const productInCart = cart.find((product) => product.id === productId);

    if (productInCart) {
        productInCart.quantity++;
    } else {
        const productToAdd = products.find((product) => product.id === productId);
        if (productToAdd) {
            const newProduct = { ...productToAdd, quantity: 1 };
            cart.push(newProduct);
        }
    }
    
    printCart();
    updateProductCount();
};

const removeFromCart = (productId) => {
    const productIndex = cart.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity--;
        } else {
            cart.splice(productIndex, 1);
        }
    }

    printCart();
    updateProductCount();
};

const cleanCart = () => {
    cart.length = 0;
    printCart();
    updateProductCount();
};

const calculateTotal = () => {

    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
};

const applyPromotionsCart = () => {
    const total = calculateTotal();
    let discount = 0;
    
    cart.forEach(product => {
        if (parseInt(product.id) === 1 && product.quantity >= 3) {
            discount += product.price * product.quantity * 0.2;
        }
        if (parseInt(product.id) === 3 && product.quantity >= 10) {
            discount += product.price * product.quantity * 0.3;
        }
    });

    return total - discount;
};

const updateProductCount = () => {

    const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
    countProductBadge.textContent = totalItems;
};

const printCart = () => {
    const emptyCartMessage = document.querySelector('#empty-cart-message');
    const productRows = cartList.querySelectorAll('tr:not(#empty-cart-message)');
    
    productRows.forEach(row => row.remove());

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'table-row';
        totalPrice.textContent = "0.00";
        promoPrice.textContent = "0.00";
    } else {
        emptyCartMessage.style.display = 'none';

        const cartRowsHTML = cart.map(product => {
            const productTotal = (product.price * product.quantity).toFixed(2);
            return `
                <tr>
                    <th scope="row">${product.name}</th>
                    <td>$${product.price}</td>
                    <td>${product.quantity}</td>
                    <td>$${productTotal}</td>
                    <td>
                    <button class="btn btn-danger btn-sm remove-from-cart" data-product-id="${product.id}">
                            -
                        </button>
                    </td>
                </tr>
            `;
        });
        
        cartList.innerHTML += cartRowsHTML.join('');
        
        const total = calculateTotal();
        const finalTotal = applyPromotionsCart();

        totalPrice.textContent = total.toFixed(2);
        promoPrice.textContent = finalTotal.toFixed(2);
    }
};

document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
        const productId = parseInt(btn.dataset.productId);
        buy(productId);
    });
});

const cleanCartBtn = document.querySelector("#clean-cart");
if (cleanCartBtn) {
    cleanCartBtn.addEventListener("click", cleanCart);
}
cartList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(event.target.dataset.productId);
        removeFromCart(productId);
    }
});