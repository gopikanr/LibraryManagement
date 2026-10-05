import { useNavigate } from "react-router-dom";

function IssuedBooks() {
  const navigate = useNavigate();

  const issuedBooks = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      issueDate: "25-09-2026",
      dueDate: "09-10-2026",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      issueDate: "27-09-2026",
      dueDate: "11-10-2026",
    },
  ];

  return (
    <div className="issued-books-container">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Dashboard
      </button>

      <h1>Issued Books</h1>

      <p className="page-description">
        View the books currently issued to you.
      </p>

      <div className="table-container">
        <table className="books-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Issue Date</th>
              <th>Due Date</th>
            </tr>
          </thead>

          <tbody>
            {issuedBooks.map((book) => (
              <tr key={book.id}>
                <td className="book-title">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.issueDate}</td>
                <td>{book.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default IssuedBooks;