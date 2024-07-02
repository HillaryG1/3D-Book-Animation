document.addEventListener("DOMContentLoaded", function () {
  const bookGrid = document.querySelector(".book-grid");
  const bookCount = 10; // Number of books to display

  // Array of book data with titles, numbers, and image URLs
  const booksData = [
    {
      title: "James",
      number: 1,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/James_1410x2000.jpg",
      summary:
        "Faith is forged in adversity, revealed through action, and refined by self-discipline. James challenges believers to master their speech, reject worldly wisdom, and find strength in community. At its core, it's a call to align beliefs with behavior, arguing that faith without deeds is meaningless. ",
    },
    {
      title: "Exodus",
      number: 2,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Matthew_1_1410x2000.jpg",
      summary: "Summary",
    },
    {
      title: "Leviticus",
      number: 3,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Mark_1_optimized.png",
      summary: "Summary for Leviticus",
    },
    {
      title: "Book 4 Title",
      number: 4,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Romans_1410x2000.jpg",
      summary: "Summary for Book 4",
    },
    {
      title: "Book 5 Title",
      number: 5,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/numbers_11_2000x1500.jpg",
      summary: "Summary for Book 5",
    },
    {
      title: "Book 6 Title",
      number: 6,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Hebrews_optimized.png",
      summary: "Summary for Book 6",
    },
    {
      title: "Book 7 Title",
      number: 7,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Proverbs_1410x2000.jpg",
      summary: "Summary for Book 7",
    },
    {
      title: "Book 8 Title",
      number: 8,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/jonah_1410x2000.jpg",
      summary: "Summary for Book 8",
    },
    {
      title: "Book 9 Title",
      number: 9,
      imageUrl: "Assets/psalms.png",
      summary: "Summary for Book 9",
    },
    {
      title: "Book 10 Title",
      number: 10,
      imageUrl: "Assets/book-of-kings.png",
      summary: "Summary for Book 10",
    },
    // Add more books as needed
  ];

  const booksPerRow = 4; // Number of books per row

  for (let i = 0; i < bookCount; i++) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    const book = document.createElement("div");
    book.classList.add("book");

    const img = document.createElement("img");
    img.src = booksData[i % booksData.length].imageUrl; // Use modulus to cycle through book images

    // Optionally, include title and number (for server-side tracking)
    const title = booksData[i % booksData.length].title;
    const number = booksData[i % booksData.length].number;
    const summary = booksData[i % booksData.length].summary;

    book.appendChild(img);
    bookContainer.appendChild(book);
    bookGrid.appendChild(bookContainer);

    // Add click event to show modal with summary
    bookContainer.addEventListener("click", function () {
      document.getElementById("modal-title").textContent = title;
      document.getElementById("modal-summary").textContent = summary;
      document.getElementById("modal").style.display = "flex";
    });

    // Add line break if it's the last book in the row
    if ((i + 1) % booksPerRow === 0) {
      bookContainer.style.clear = "both"; // Clear float for the next row
    }
  }

  // Close the modal when the close button is clicked
  document.getElementById("close").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
