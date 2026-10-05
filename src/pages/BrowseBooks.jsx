import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BrowseBooks() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
    },
    {
      title: "Wings of Fire",
      author: "A. P. J. Abdul Kalam",
      category: "Biography",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
    },

    // 60 more books

    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      category: "Fantasy",
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J. K. Rowling",
      category: "Fantasy",
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      category: "Fantasy",
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      author: "J. K. Rowling",
      category: "Fantasy",
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      author: "J. K. Rowling",
      category: "Fantasy",
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      author: "J. K. Rowling",
      category: "Fantasy",
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      author: "J. K. Rowling",
      category: "Fantasy",
    },
    {
      title: "The Hobbit",
      author: "J. R. R. Tolkien",
      category: "Fantasy",
    },
    {
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      category: "Fantasy",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Classic",
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Bronte",
      category: "Classic",
    },
    {
      title: "Little Women",
      author: "Louisa May Alcott",
      category: "Classic",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Classic",
    },
    {
      title: "1984",
      author: "George Orwell",
      category: "Dystopian",
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      category: "Political Fiction",
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      category: "Fiction",
    },
    {
      title: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      category: "Fiction",
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      category: "Historical Fiction",
    },
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      category: "Young Adult",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      category: "Dystopian",
    },
    {
      title: "Catching Fire",
      author: "Suzanne Collins",
      category: "Dystopian",
    },
    {
      title: "Mockingjay",
      author: "Suzanne Collins",
      category: "Dystopian",
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      category: "Mystery",
    },
    {
      title: "Angels & Demons",
      author: "Dan Brown",
      category: "Mystery",
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      category: "Thriller",
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      category: "Thriller",
    },
    {
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      category: "Thriller",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      category: "Self Help",
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      category: "Self Help",
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen Covey",
      category: "Self Help",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      category: "Productivity",
    },
    {
      title: "The Power of Habit",
      author: "Charles Duhigg",
      category: "Self Help",
    },
    {
      title: "Ikigai",
      author: "Hector Garcia",
      category: "Self Help",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "History",
    },
    {
      title: "Homo Deus",
      author: "Yuval Noah Harari",
      category: "History",
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Science",
    },
    {
      title: "The Theory of Everything",
      author: "Stephen Hawking",
      category: "Science",
    },
    {
      title: "The Origin of Species",
      author: "Charles Darwin",
      category: "Science",
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      category: "Science",
    },
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      category: "Computer Science",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      category: "Programming",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      category: "Programming",
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      category: "Programming",
    },
    {
      title: "Java: The Complete Reference",
      author: "Herbert Schildt",
      category: "Programming",
    },
    {
      title: "Python Crash Course",
      author: "Eric Matthes",
      category: "Programming",
    },
    {
      title: "Hands-On Machine Learning",
      author: "Aurélien Géron",
      category: "Machine Learning",
    },
    {
      title: "Deep Learning",
      author: "Ian Goodfellow",
      category: "Machine Learning",
    },
    {
      title: "Artificial Intelligence",
      author: "Stuart Russell",
      category: "Artificial Intelligence",
    },
    {
      title: "Data Science from Scratch",
      author: "Joel Grus",
      category: "Data Science",
    },
    {
      title: "The Data Warehouse Toolkit",
      author: "Ralph Kimball",
      category: "Data Science",
    },
    {
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      category: "Networking",
    },
    {
      title: "Operating System Concepts",
      author: "Abraham Silberschatz",
      category: "Operating Systems",
    },
    {
      title: "Database System Concepts",
      author: "Abraham Silberschatz",
      category: "Database",
    },
    {
      title: "Computer Organization and Design",
      author: "David Patterson",
      category: "Computer Science",
    },
    {
      title: "Engineering Mathematics",
      author: "B. S. Grewal",
      category: "Mathematics",
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      category: "Self Help",
    },
    {
      title: "Man's Search for Meaning",
      author: "Viktor Frankl",
      category: "Psychology",
    },
    {
      title: "The Secret",
      author: "Rhonda Byrne",
      category: "Self Help",
    },
    {
      title: "The Monk Who Sold His Ferrari",
      author: "Robin Sharma",
      category: "Self Help",
    },
    {
      title: "Who Moved My Cheese?",
      author: "Spencer Johnson",
      category: "Self Help",
    },
  ];

  // Search books
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const booksPerPage = 10;

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const startIndex = (currentPage - 1) * booksPerPage;

  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + booksPerPage
  );

  return (
    <div className="browse-container">

      {/* Dashboard Button */}
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Dashboard
      </button>

      <h1>Browse Books</h1>

      <p className="page-description">
        Search and explore books available in the library.
      </p>

      {/* Search Box */}
      <input
        type="text"
        placeholder="🔍 Search books..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="search-box"
      />

      {/* Books Table */}
      <div className="table-container">
        <table className="books-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentBooks.map((book, index) => (
              <tr key={index}>
                <td>{startIndex + index + 1}</td>

                <td className="book-title">
                  {book.title}
                </td>

                <td>{book.author}</td>

                <td>
                  <span className="category">
                    {book.category}
                  </span>
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-button"
        >
          Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={
                currentPage === index + 1
                  ? "page-button active"
                  : "page-button"
              }
            >
              {index + 1}
            </button>
          )
        )}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page-button"
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default BrowseBooks;