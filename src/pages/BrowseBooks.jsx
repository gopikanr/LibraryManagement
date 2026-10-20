import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BrowseBooks() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
    },
    {
      id: 4,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
    },
    {
      id: 6,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      category: "Self Help",
    },
    {
      id: 7,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      category: "Programming",
    },
    {
      id: 8,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      category: "Programming",
    },
    {
      id: 9,
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Fantasy",
    },
    {
      id: 10,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
    },
    {
      id: 11,
      title: "1984",
      author: "George Orwell",
      category: "Fiction",
    },
    {
      id: 12,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
    },
    {
      id: 13,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
    },
    {
      id: 14,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
    },
    {
      id: 15,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      category: "Self Help",
    },
    {
      id: 16,
      title: "Deep Work",
      author: "Cal Newport",
      category: "Productivity",
    },
    {
      id: 17,
      title: "Zero to One",
      author: "Peter Thiel",
      category: "Business",
    },
    {
      id: 18,
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business",
    },
    {
      id: 19,
      title: "Start With Why",
      author: "Simon Sinek",
      category: "Business",
    },
    {
      id: 20,
      title: "Ikigai",
      author: "Hector Garcia",
      category: "Self Help",
    },
  ];

  const filteredBooks = books.filter((book) => {
    const search = searchTerm.toLowerCase();

    return (
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search) ||
      book.category.toLowerCase().includes(search)
    );
  });

  const booksPerPage = 10;

  const totalPages = Math.ceil(
    filteredBooks.length / booksPerPage
  );

  const startIndex = (currentPage - 1) * booksPerPage;

  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + booksPerPage
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="browse-container">

      <button
        className="back-button"
        onClick={() => navigate("/user")}
      >
        ← Dashboard
      </button>

      <h1>Browse Books</h1>

      <p className="page-description">
        Search and explore books available in the library.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by title, author or category..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="table-container">
        <table className="books-table">

          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentBooks.length > 0 ? (
              currentBooks.map((book) => (
                <tr key={book.id}>

                  <td className="book-title">
                    {book.title}
                  </td>

                  <td>
                    {book.author}
                  </td>

                  <td className="category">
                    {book.category}
                  </td>

                  <td>
                    <button
                      className="details-button"
                      onClick={() =>
                        navigate("/book-details", {
                          state: { book },
                        })
                      }
                    >
                      View Details
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {totalPages > 0 && (
        <div className="pagination">

          <button
            className="page-button"
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              className={`page-button ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="page-button"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
}

export default BrowseBooks;