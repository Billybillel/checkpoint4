let cartItems = [];


// Add new item to cart
function addItemToCart(name, price, image) {
  cartItems.push({ name, price, image, quantity: 1, liked: false });
  updateCart();
}

// Remove item from cart
function removeItemFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Update cart item quantity
function updateQuantity(index, qty) {
  cartItems[index].quantity += qty;
  updateCart();
}

// like/unlike an item
function updateLike(index) {
  cartItems[index].liked = !cartItems[index].liked;
  updateCart();
}



// Update cart display
function updateCart() {
  let cartEl = document.getElementById("cart-items");
 
  cartEl.innerHTML = `<tr class="table-header">
  <th>Product</th>
  <th>Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Remove</th>
  <th>Like</th>
</tr>`;


 
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    total += item.price * item.quantity;

    let itemEl = document.createElement("tr");
    itemEl.classList.add("cart-item");

       // Add item data
       itemEl.innerHTML = `
       <td><img src="${item.image}" alt="${item.name}"></td>
       <td><div class="name">${item.name}</div></td>
       <td><div class="price">$ ${item.price}</div></td>
       <td><div class="quantity-container">
       <button onclick="updateQuantity(${i}, 1)"class="quantity"><i class="fa-solid fa-circle-plus"></i></button>
       <span class="quantity-value">${item.quantity}</span>
       <button onclick="updateQuantity(${i}, -1)"class="quantity"><i class="fa-solid fa-circle-minus"></i></button>
       </div></td>
       <td> <button onclick="removeItemFromCart(${i})"><i class="fa-solid fa-trash"></i></button></td>
       <td> <button><span onclick="updateLike(${i})" class="heart${item.liked ? ' liked':''}"><i class="fa-solid fa-heart"></i></span></button></td>
       
     `;
 
     cartEl.appendChild(itemEl);
   }
 
   // Update total
   document.getElementById("tot").innerHTML = `$${total}`;
 }
 

 // some product preselected 

 addItemToCart('Puma Rs',72,'./image/P1.jpg') 
 addItemToCart('Puma R7',65,'./image/P2.jpg') 
 addItemToCart('Puma Sn',83,'./image/P3.jpg') 
 addItemToCart('Puma Cl',41,'./image/P4.jpg') 
 