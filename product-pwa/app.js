const products = [
    { image: 'images/book.jpg', name: 'Product A', price: '$10', quantity: 'In stock' },
    { image: 'images/book.jpg', name: 'Product B', price: '$20', quantity: 'Out of stock' },
    { image: 'images/book.jpg', name: 'Product C', price: '$15', quantity: 'In stock' },
    { image: 'images/book.jpg', name: 'Product D', price: '$25', quantity: 'Limited stock' }
  ];
  
  const productList = document.getElementById('productList');
  products.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <strong>${product.name}</strong><br>
          Price: ${product.price}<br>
          Quantity: ${product.quantity}
        </div>
      </div>
    `;
  });
  