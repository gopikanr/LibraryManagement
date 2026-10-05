import { useNavigate } from "react-router-dom";

function ReturnedBooks() {
  const navigate = useNavigate();

  const returnedBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      issueDate: "01-09-2026",
      returnDate: "15-09-2026",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      issueDate: "05-09-2026",
      returnDate: "19-09-2026",
    },
  ];

  return (
    <div className="returned-books-container">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Dashboard
      </button>

      <h1>Returned Books</h1>

      <p className="page-description">
        View the books you have previously returned to the library.
      </p>

      <div className="table-container">
        <table className="books-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Issue Date</th>
              <th>Return Date</th>
            </tr>
          </thead>

          <tbody>
            {returnedBooks.map((book) => (
              <tr key={book.id}>
                <td className="book-title">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.issueDate}</td>
                <td>{book.returnDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ReturnedBooks;