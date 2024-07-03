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
      title: "Matthew",
      number: 2,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Matthew_1_1410x2000.jpg",
      summary:
        "Matthew  highlights Christ's teachings, particularly in the Sermon on the Mount, where He outlines the values of God's kingdom. Through parables and miracles, Christ demonstrates His divine authority and compassion. Matthew's Gospel climaxes with Christ's sacrificial death on the cross and His triumphant resurrection, securing salvation for all who believe. Then ends with the Great Commission, Christ's charge to His followers to make disciples of all nations.",
    },
    {
      title: "Mark",
      number: 3,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Mark_1_optimized.png",
      summary:
        "Mark's Gospel is a fast-paced, action-oriented account of Christ's ministry. It's the shortest of the four Gospels, focusing on Christ's miracles more than His extended teachings. It begins with John the Baptist preparing the way for Christ, followed quickly by His baptism and temptation. Mark then dives into Christ's public ministry in Galilee, highlighting His authority through powerful teachings and miracles.",
    },
    {
      title: "Romans",
      number: 4,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Romans_1410x2000.jpg",
      summary:
        "The Book of Romans is the Apostle Paul's magnum opus, a comprehensive explanation of the gospel and its implications for both Jews and Gentiles. It's often considered the most systematic presentation of Christian doctrine in the New Testament. Paul begins by establishing the universal need for salvation, showing that all have sinned and fall short of God's glory. He then introduces the good news: justification by faith in Christ, available to all who believe.",
    },
    {
      title: "Numbers",
      number: 5,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/numbers_11_2000x1500.jpg",
      summary:
        "The Book of Numbers, the fourth book of the Pentateuch, covers Israel's journey from Mount Sinai to the borders of the Promised Land. Its name comes from the censuses taken of the Israelites. It begins with God organizing the Israelites for their journey. Then details the arrangement of the tribes, the duties of the Levites, and various laws and regulations for the community. A significant portion of Numbers recounts Israel's struggles in the wilderness. Despite God's provision (including manna and water), the people frequently complain and rebel. ",
    },
    {
      title: "Hebrews",
      number: 6,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Hebrews_optimized.png",
      summary:
        "Hebrews presents Christ as the supreme and final revelation of God. It demonstrates Christ's superiority over angels, Moses, and the Old Testament priesthood. Paul encourages Jewish Christians to persevere in faith, warning against falling away. The book emphasizes Christ's perfect sacrifice, which replaces the old covenant system. It ends with practical exhortations for Christian living and a call to endure in faith.",
    },
    {
      title: "Proverbs",
      number: 7,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/Proverbs_1410x2000.jpg",
      summary:
        "Proverbs is a collection of wisdom literature, primarily attributed to King Solomon. It offers practical guidance for godly living in areas such as speech, relationships, work, and finances. The book emphasizes that true wisdom begins with reverence or deep respect for the Lord. It contrasts the paths of wisdom and folly, encouraging readers to choose wisdom for a life of blessing and success in God's eyes.",
    },
    {
      title: "Jonah",
      number: 8,
      imageUrl:
        "https://www.simpleimageresizer.com/_uploads/photos/ac79dfcc/jonah_1410x2000.jpg",
      summary:
        "Jonah tells the story of a prophet who initially refuses God's call to preach to Nineveh, Israel's enemy. After being swallowed by a great fish and then delivered, Jonah reluctantly obeys. To his surprise, Nineveh repents. The book reveals God's concern for all nations and His willingness to forgive. It challenges readers to examine their own hearts regarding God's mercy and their attitudes toward those different from themselves.",
    },
    {
      title: "Psalms",
      number: 9,
      imageUrl: "Assets/psalms.png",
      summary:
        "Psalms is the Bible's songbook, containing 150 poetic compositions expressing a wide range of human emotions and experiences in relation to God. It includes praise, lament, thanksgiving, and wisdom psalms. The Psalms teach us how to worship, pray, and process our feelings before God. They point to the coming Messiah and have been a source of comfort and inspiration for believers throughout history.",
    },
    {
      title: "Kings 1 And 2",
      number: 10,
      imageUrl: "Assets/book-of-kings.png",
      summary:
        "These books trace the history of Israel's monarchy from Solomon's reign through the divided kingdom to the fall of Israel and Judah. They demonstrate how the nation's faithfulness or unfaithfulness to God directly impacted its fortunes. The books highlight the ministries of prophets like Elijah and Elisha. Throughout, we see God's patience with His people, His judgment on sin, and His faithfulness to His covenant promises. The books teach valuable lessons about leadership, obedience, and the consequences of turning away from God.",
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
