import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BrowseBooks() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const books = [
    { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction" },
    { title: "Atomic Habits", author: "James Clear", category: "Self Help" },
    { title: "Wings of Fire", author: "A. P. J. Abdul Kalam", category: "Biography" },
    { title: "Clean Code", author: "Robert C. Martin", category: "Programming" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling", category: "Fantasy" },
    { title: "Harry Potter and the Chamber of Secrets", author: "J. K. Rowling", category: "Fantasy" },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J. K. Rowling", category: "Fantasy" },
    { title: "Harry Potter and the Goblet of Fire", author: "J. K. Rowling", category: "Fantasy" },
    { title: "Harry Potter and the Order of the Phoenix", author: "J. K. Rowling", category: "Fantasy" },
    { title: "Harry Potter and the Half-Blood Prince", author: "J. K. Rowling", category: "Fantasy" },
    { title: "Harry Potter and the Deathly Hallows", author: "J. K. Rowling", category: "Fantasy" },
    { title: "The Hobbit", author: "J. R. R. Tolkien", category: "Fantasy" },
    { title: "The Lord of the Rings", author: "J. R. R. Tolkien", category: "Fantasy" },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "Classic" },
    { title: "Jane Eyre", author: "Charlotte Bronte", category: "Classic" },
    { title: "Little Women", author: "Louisa May Alcott", category: "Classic" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic" },
    { title: "1984", author: "George Orwell", category: "Dystopian" },
    { title: "Animal Farm", author: "George Orwell", category: "Political Fiction" },
    { title: "The Kite Runner", author: "Khaled Hosseini", category: "Fiction" },
    { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", category: "Fiction" },
    { title: "The Book Thief", author: "Markus Zusak", category: "Historical Fiction" },
    { title: "The Fault in Our Stars", author: "John Green", category: "Young Adult" },
    { title: "The Hunger Games", author: "Suzanne Collins", category: "Dystopian" },
    { title: "Catching Fire", author: "Suzanne Collins", category: "Dystopian" },
    { title: "Mockingjay", author: "Suzanne Collins", category: "Dystopian" },
    { title: "The Da Vinci Code", author: "Dan Brown", category: "Mystery" },
    { title: "Angels & Demons", author: "Dan Brown", category: "Mystery" },
    { title: "The Silent Patient", author: "Alex Michaelides", category: "Thriller" },
    { title: "Gone Girl", author: "Gillian Flynn", category: "Thriller" },
    { title: "The Girl on the Train", author: "Paula Hawkins", category: "Thriller" },
    { title: "The Psychology of Money", author: "Morgan Housel", category: "Finance" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance" },
    { title: "Think and Grow Rich", author: "Napoleon Hill", category: "Self Help" },
    { title: "How to Win Friends and Influence People", author: "Dale Carnegie", category: "Self Help" },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", category: "Self Help" },
    { title: "Deep Work", author: "Cal Newport", category: "Productivity" },
    { title: "The Power of Habit", author: "Charles Duhigg", category: "Self Help" },
    { title: "Ikigai", author: "Hector Garcia", category: "Self Help" },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "History" },
    { title: "Homo Deus", author: "Yuval Noah Harari", category: "History" },
    { title: "A Brief History of Time", author: "Stephen Hawking", category: "Science" },
    { title: "The Theory of Everything", author: "Stephen Hawking", category: "Science" },
    { title: "The Origin of Species", author: "Charles Darwin", category: "Science" },
    { title: "Cosmos", author: "Carl Sagan", category: "Science" },
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Computer Science" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming" },
    { title: "You Don't Know JS", author: "Kyle Simpson", category: "Programming" },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Programming" },
    { title: "Java: The Complete Reference", author: "Herbert Schildt", category: "Programming" },
    { title: "Python Crash Course", author: "Eric Matthes", category: "Programming" },
    { title: "Hands-On Machine Learning", author: "Aurélien Géron", category: "Machine Learning" },
    { title: "Deep Learning", author: "Ian Goodfellow", category: "Machine Learning" },
    { title: "Artificial Intelligence", author: "Stuart Russell", category: "Artificial Intelligence" },
    { title: "Data Science from Scratch", author: "Joel Grus", category: "Data Science" },
    { title: "The Data Warehouse Toolkit", author: "Ralph Kimball", category: "Data Science" },
    { title: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Networking" },
    { title: "Operating System Concepts", author: "Abraham Silberschatz", category: "Operating Systems" },
    { title: "Database System Concepts", author: "Abraham Silberschatz", category: "Database" },
    { title: "Computer Organization and Design", author: "David Patterson", category: "Computer Science" },
    { title: "Engineering Mathematics", author: "B. S. Grewal", category: "Mathematics" },
    { title: "The Power of Now", author: "Eckhart Tolle", category: "Self Help" },
    { title: "Man's Search for Meaning", author: "Viktor Frankl", category: "Psychology" },
    { title: "The Secret", author: "Rhonda Byrne", category: "Self Help" },
    { title: "The Monk Who Sold His Ferrari", author: "Robin Sharma", category: "Self Help" },
    { title: "Who Moved My Cheese?", author: "Spencer Johnson", category: "Self Help" },

    // Business, productivity and psychology
    { title: "The Lean Startup", author: "Eric Ries", category: "Business" },
    { title: "Start with Why", author: "Simon Sinek", category: "Business" },
    { title: "Good to Great", author: "Jim Collins", category: "Business" },
    { title: "The 4-Hour Workweek", author: "Timothy Ferriss", category: "Productivity" },
    { title: "The E-Myth Revisited", author: "Michael E. Gerber", category: "Business" },
    { title: "Zero to One", author: "Peter Thiel", category: "Business" },
    { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", category: "Business" },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology" },
    { title: "Mindset", author: "Carol S. Dweck", category: "Psychology" },
    { title: "Grit", author: "Angela Duckworth", category: "Psychology" },
    { title: "Emotional Intelligence", author: "Daniel Goleman", category: "Psychology" },
    { title: "Quiet", author: "Susan Cain", category: "Psychology" },
    { title: "The Happiness Project", author: "Gretchen Rubin", category: "Self Help" },
    { title: "Essentialism", author: "Greg McKeown", category: "Productivity" },
    { title: "Make Time", author: "Jake Knapp", category: "Productivity" },
    { title: "Getting Things Done", author: "David Allen", category: "Productivity" },
    { title: "The One Thing", author: "Gary Keller", category: "Productivity" },

    // Biography and nonfiction
    { title: "Can't Hurt Me", author: "David Goggins", category: "Biography" },
    { title: "Educated", author: "Tara Westover", category: "Memoir" },
    { title: "Becoming", author: "Michelle Obama", category: "Memoir" },
    { title: "Long Walk to Freedom", author: "Nelson Mandela", category: "Biography" },
    { title: "Steve Jobs", author: "Walter Isaacson", category: "Biography" },
    { title: "Einstein: His Life and Universe", author: "Walter Isaacson", category: "Biography" },
    { title: "The Diary of a Young Girl", author: "Anne Frank", category: "Memoir" },
    { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", category: "Science" },
    { title: "Bad Blood", author: "John Carreyrou", category: "Nonfiction" },
    { title: "Into the Wild", author: "Jon Krakauer", category: "Adventure" },

    // Classic books
    { title: "The Old Man and the Sea", author: "Ernest Hemingway", category: "Classic" },
    { title: "Wuthering Heights", author: "Emily Bronte", category: "Classic" },
    { title: "Frankenstein", author: "Mary Shelley", category: "Classic" },
    { title: "Dracula", author: "Bram Stoker", category: "Classic" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", category: "Classic" },
    { title: "The Catcher in the Rye", author: "J. D. Salinger", category: "Classic" },
    { title: "Of Mice and Men", author: "John Steinbeck", category: "Classic" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", category: "Dystopian" },
    { title: "Brave New World", author: "Aldous Huxley", category: "Dystopian" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", category: "Dystopian" },

    // Fantasy and young adult
    { title: "The Maze Runner", author: "James Dashner", category: "Young Adult" },
    { title: "Divergent", author: "Veronica Roth", category: "Young Adult" },
    { title: "Percy Jackson and the Lightning Thief", author: "Rick Riordan", category: "Fantasy" },
    { title: "The Chronicles of Narnia", author: "C. S. Lewis", category: "Fantasy" },
    { title: "A Game of Thrones", author: "George R. R. Martin", category: "Fantasy" },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", category: "Fantasy" },
    { title: "The Midnight Library", author: "Matt Haig", category: "Fiction" },
    { title: "Where the Crawdads Sing", author: "Delia Owens", category: "Mystery" },

    // Mystery, thriller and horror
    { title: "The Thursday Murder Club", author: "Richard Osman", category: "Mystery" },
    { title: "Murder on the Orient Express", author: "Agatha Christie", category: "Mystery" },
    { title: "And Then There Were None", author: "Agatha Christie", category: "Mystery" },
    { title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", category: "Mystery" },
    { title: "Rebecca", author: "Daphne du Maurier", category: "Gothic Fiction" },
    { title: "The Shining", author: "Stephen King", category: "Horror" },
    { title: "It", author: "Stephen King", category: "Horror" },
    { title: "The Ocean at the End of the Lane", author: "Neil Gaiman", category: "Fantasy" },
    { title: "Neverwhere", author: "Neil Gaiman", category: "Fantasy" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupery", category: "Classic" },
    { title: "The Secret Garden", author: "Frances Hodgson Burnett", category: "Classic" },
    { title: "Anne of Green Gables", author: "L. M. Montgomery", category: "Classic" },
    { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", category: "Mystery" },

    // Science fiction and science
    { title: "The Three-Body Problem", author: "Liu Cixin", category: "Science Fiction" },
    { title: "Dune", author: "Frank Herbert", category: "Science Fiction" },
    { title: "Ender's Game", author: "Orson Scott Card", category: "Science Fiction" },
    { title: "The Martian", author: "Andy Weir", category: "Science Fiction" },
    { title: "Project Hail Mary", author: "Andy Weir", category: "Science Fiction" },
    { title: "The Selfish Gene", author: "Richard Dawkins", category: "Science" },
    { title: "The Gene", author: "Siddhartha Mukherjee", category: "Science" },
    { title: "The Body", author: "Bill Bryson", category: "Science" },
    { title: "The Code Book", author: "Simon Singh", category: "Technology" },
    { title: "The Information", author: "James Gleick", category: "Technology" },

    // Programming and computer science
    { title: "Clean Architecture", author: "Robert C. Martin", category: "Programming" },
    { title: "Refactoring", author: "Martin Fowler", category: "Programming" },
    { title: "Design Patterns", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", category: "Programming" },
    { title: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell", category: "Computer Science" },
    { title: "Grokking Algorithms", author: "Aditya Bhargava", category: "Computer Science" },
    { title: "The C Programming Language", author: "Brian W. Kernighan and Dennis M. Ritchie", category: "Programming" },
    { title: "Effective Java", author: "Joshua Bloch", category: "Programming" },
    { title: "Head First Java", author: "Kathy Sierra and Bert Bates", category: "Programming" },
    { title: "Learning Python", author: "Mark Lutz", category: "Programming" },
    { title: "Fluent Python", author: "Luciano Ramalho", category: "Programming" },
    { title: "Practical Statistics for Data Scientists", author: "Peter Bruce, Andrew Bruce, and Peter Gedeck", category: "Data Science" },
    { title: "Python for Data Analysis", author: "Wes McKinney", category: "Data Science" },
    { title: "The Hundred-Page Machine Learning Book", author: "Andriy Burkov", category: "Machine Learning" },
    { title: "Pattern Recognition and Machine Learning", author: "Christopher M. Bishop", category: "Machine Learning" },
    { title: "Deep Learning with Python", author: "Francois Chollet", category: "Machine Learning" },
    { title: "The Art of Statistics", author: "David Spiegelhalter", category: "Statistics" },
    { title: "Naked Statistics", author: "Charles Wheelan", category: "Statistics" },
    { title: "The Intelligent Investor", author: "Benjamin Graham", category: "Finance" },
  ];

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const booksPerPage = 10;
  const totalBooks = books.length;
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;

  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + booksPerPage
  );

  return (
    <div className="browse-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Dashboard
      </button>

      <div className="browse-heading">
        <div>
          <span className="browse-label">YOUR DIGITAL LIBRARY</span>
          <h1>Explore Our Books</h1>
          <p className="page-description">
            Discover your next favorite book from our collection.
          </p>
        </div>

        <div className="book-count-card">
          <span className="book-count-icon">📚</span>
          <div>
            <strong>{totalBooks}</strong>
            <span>Total Books</span>
          </div>
        </div>
      </div>

      <div className="browse-toolbar">
        <div className="search-wrapper">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search by title, author, or category..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="search-box"
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => {
                setSearch("");
                setCurrentPage(1);
              }}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <span className="results-count">
          {filteredBooks.length} books found
        </span>
      </div>

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
            {currentBooks.length > 0 ? (
              currentBooks.map((book, index) => (
                <tr key={book.title}>
                  <td className="serial-number">
                    {startIndex + index + 1}
                  </td>
                  <td className="book-title">{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <span className="category">{book.category}</span>
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
                      View Details <span>→</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-books">
                  <span className="no-books-icon">📚</span>
                  <strong>No books found</strong>
                  <p>Try another title, author, or category.</p>
                  <button
                    className="details-button"
                    onClick={() => {
                      setSearch("");
                      setCurrentPage(1);
                    }}
                  >
                    Show All Books
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filteredBooks.length > 0 && (
        <div className="pagination">
          <span className="pagination-info">
            Showing {startIndex + 1}–
            {Math.min(startIndex + booksPerPage, filteredBooks.length)} of{" "}
            {filteredBooks.length}
          </span>

          <div className="pagination-controls">
            <button
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
              disabled={currentPage === 1}
              className="page-button"
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
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
            ))}

            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
              className="page-button"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BrowseBooks;