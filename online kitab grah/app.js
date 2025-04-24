const books = [
    { image: 'images/book.jpg', name: 'Book One', author: 'Author A', price: '$10' },
    { image: 'images/book.jpg', name: 'Book Two', author: 'Author B', price: '$12' },
    { image: 'images/book.jpg', name: 'Book Three', author: 'Author C', price: '$15' },
    { image: 'images/book.jpg', name: 'Book Four', author: 'Author D', price: '$8' },
    { image: 'images/book.jpg', name: 'Book Five', author: 'Author E', price: '$11' },
    { image: 'images/book.jpg', name: 'Book Six', author: 'Author F', price: '$9' },
  ];
  
  const bookList = document.getElementById('bookList');
  books.forEach(book => {
    bookList.innerHTML += `
      <div class="book">
        <img src="${book.image}" alt="${book.name}">
        <div class="book-info">
          <strong>${book.name}</strong><br>
          ${book.author}<br>
          ${book.price}
        </div>
      </div>
    `;
  });
  