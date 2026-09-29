import { useLocation, useNavigate } from "react-router-dom";

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const book = location.state?.book;

  if (!book) {
    return (
      <div className="book-details-container">
        <div className="details-card">
          <h2>Book not found</h2>
          <button
            className="back-button"
            onClick={() => navigate("/browse-books")}
          >
            Back to Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="book-details-container">

      <div className="details-card">

        <h1>Book Details</h1>

        <div className="detail-row">
          <span>Book Title</span>
          <strong>{book.title}</strong>
        </div>

        <div className="detail-row">
          <span>Author</span>
          <strong>{book.author}</strong>
        </div>

        <div className="detail-row">
          <span>Category</span>
          <strong>{book.category}</strong>
        </div>

        <div className="detail-row">
          <span>Availability</span>
          <strong className="available">Available</strong>
        </div>

        <button
          className="back-button"
          onClick={() => navigate("/browse-books")}
        >
          ← Back to Books
        </button>

      </div>

    </div>
  );
}

export default BookDetails;