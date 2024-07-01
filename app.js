document.addEventListener("DOMContentLoaded", function () {
  const bookGrid = document.querySelector(".book-grid");
  const bookCount = 7; // Number of books to display

  // Array of image URLs for each book (example)
  const bookImages = [
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198",
    "https://media-public.canva.com/Lu0U4/MAFWZ7Lu0U4/1/s.png",
    "https://i.pinimg.com/736x/d8/f1/dc/d8f1dc2b664251b98743388651e6b4ae.jpg",
    "https://marketplace.canva.com/EAFjYY88pEE/1/0/1003w/canva-white%2C-green-and-yellow-minimalist-business-book-cover-cjr8n1BH2lY.jpg",
    "https://marketplace.canva.com/EAGBFf7X-Gk/1/0/1003w/canva-ZNFqcC0gLAw.jpg",
    "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=1380&t=st=1719789663~exp=1719790263~hmac=ad8e592041cdb4d7f98600834b3cafc5308d3484e9d1922e01eb930be4dd7b5d",
  ];

  const booksPerRow = 4; // Number of books per row

  for (let i = 0; i < bookCount; i++) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    const book = document.createElement("div");
    book.classList.add("book");

    const img = document.createElement("img");
    img.src = bookImages[i % bookImages.length]; // Use modulus to cycle through images

    book.appendChild(img);
    bookContainer.appendChild(book);
    bookGrid.appendChild(bookContainer);

    // Add line break if it's the last book in the row
    if ((i + 1) % booksPerRow === 0) {
      bookContainer.style.clear = "both"; // Clear float for the next row
    }
  }
});
