import { useNavigate } from "react-router-dom";

function MyBooks() {
  const navigate = useNavigate();

  const myBooks = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      status: "Issued",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
      status: "Issued",
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
      status: "Returned",
    },
  ];

  return (
    <div className="my-books-container">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Dashboard
      </button>

      <h1>My Books</h1>

      <p className="page-description">
        View the books you have borrowed from the library.
      </p>

      <div className="my-books-card">
        <table className="books-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {myBooks.map((book) => (
              <tr key={book.id}>
                <td className="book-title">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default MyBooks;