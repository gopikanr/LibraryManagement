
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

      <div className="issued-books-header">
        <div>
          <p className="issued-books-label">
            LIBRARY / ISSUED BOOKS
          </p>
          <h1>Issued Books</h1>
          <p className="page-description">
            Track your borrowed books and their return dates.
          </p>
        </div>

        <div className="issued-books-total">
          <span className="issued-books-total-icon">📚</span>
          <div>
            <h2>{issuedBooks.length}</h2>
            <p>Issued Books</p>
          </div>
        </div>
      </div>

      <div className="issued-books-info">
        <div className="issued-info-icon">📖</div>
        <div>
          <h3>Keep track of your books</h3>
          <p>
            Check the issue date and due date for each borrowed book.
          </p>
        </div>
      </div>

      <div className="issued-books-section">
        <div className="issued-books-section-heading">
          <h2>Currently Borrowed</h2>
          <span>{issuedBooks.length} books</span>
        </div>

        <div className="issued-books-table-card">
          <table className="books-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>BOOK TITLE</th>
                <th>AUTHOR</th>
                <th>ISSUE DATE</th>
                <th>DUE DATE</th>
              </tr>
            </thead>

            <tbody>
              {issuedBooks.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td className="book-title">{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.issueDate}</td>
                  <td>
                    <span className="issued-due-date">
                      {book.dueDate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {issuedBooks.length === 0 && (
          <div className="issued-books-empty">
            <span>📚</span>
            <h3>No Issued Books</h3>
            <p>You don't have any currently issued books.</p>
          </div>
        )}
      </div>

      <p className="issued-books-footer">
        Showing {issuedBooks.length} currently issued books
      </p>
    </div>
  );
}

export default IssuedBooks;
