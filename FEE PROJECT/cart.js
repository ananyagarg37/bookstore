const cartItems = [  
    { id: 1, name: 'Product Name 2', price: 780.00, quantity: 1, image: 'book7.jpg'},  
    { id: 2, name: 'Product Name 3', price: 220.00, quantity: 2, image: 'book4.jpg' },  
    { id: 3, name: 'Product Name 4', price: 125.00, quantity: 1, image: 'book3.jpg' },  
    { id: 4, name: 'Product Name 5', price: 1800.00, quantity: 1, image: 'book17.jpg' },  
    { id: 5, name: 'Product Name 6', price: 960.00, quantity: 4, image: 'book1.jpg' }  
];  

// Function to render cart items  
function renderCartItems() {  
    const cartItemsContainer = document.getElementById('cart-items');  
    let totalPrice = 0;  
    cartItemsContainer.innerHTML = '';  

    cartItems.forEach(item => {  
        const totalItemPrice = item.price * item.quantity;  
        totalPrice += totalItemPrice;  

        const itemDiv = document.createElement('div');  
        itemDiv.className = 'cart-item';  
        itemDiv.innerHTML = `  
            <img src="${item.image}" alt="${item.name}" class="product-image" />  
            <span class="product-name">${item.name}</span>  
            <span class="product-price">$${item.price.toFixed(2)}</span>  
            <div class="quantity-control">  
                <button onclick="changeQuantity(${item.id}, -1)">-</button>  
                <input type="text" value="${item.quantity}" readonly />  
                <button onclick="changeQuantity(${item.id}, 1)">+</button>  
            </div>  
        `;  
        cartItemsContainer.appendChild(itemDiv);  
    });  

    document.getElementById('total').textContent = totalPrice.toFixed(2);  
}  

// Function to change item quantity  
function changeQuantity(itemId, change) {  
    const itemIndex = cartItems.findIndex(item => item.id === itemId);  
    if (itemIndex !== -1) {  
        cartItems[itemIndex].quantity += change; // Change the quantity  

        // Check for quantity and remove the item if it's zero or less  
        if (cartItems[itemIndex].quantity <= 0) {  
            cartItems.splice(itemIndex, 1); // Remove item from array  
        }  

        renderCartItems();  
    }  
}  

// Initial render of cart items  
renderCartItems();