
import { useLocation, useNavigate } from "react-router-dom";

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const book = location.state?.book;

  if (!book) {
    return (
      <div className="book-details-container">
        <button
          className="back-button"
          onClick={() => navigate("/browse-books")}
        >
          ← Back to Books
        </button>

        <div className="details-card not-found-card">
          <div className="details-book-icon">📚</div>
          <h2>Book Not Found</h2>
          <p>
            We couldn't find the selected book. Please return to
            Browse Books and select a book.
          </p>

          <button
            className="details-primary-button"
            onClick={() => navigate("/browse-books")}
          >
            Browse Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="book-details-container">
      <button
        className="back-button"
        onClick={() => navigate("/browse-books")}
      >
        ← Back to Books
      </button>

      <div className="details-page-heading">
        <p className="details-eyebrow">LIBRARY / BOOK DETAILS</p>
        <h1>Book Details</h1>
        <p>Explore the information about your selected book.</p>
      </div>

      <div className="details-card">
        <div className="details-card-banner">
          <div className="details-book-cover">📖</div>
          <div>
            <span className="details-small-label">BOOK INFORMATION</span>
            <h2>{book.title}</h2>
            <p>By {book.author}</p>
          </div>
        </div>

        <div className="details-information">
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
            <strong>
              <span className="details-category">
                {book.category}
              </span>
            </strong>
          </div>

          <div className="detail-row">
            <span>Availability</span>
            <strong>
              <span className="details-availability">
                <span className="details-availability-dot"></span>
                Available
              </span>
            </strong>
          </div>
        </div>

        <div className="details-note">
          <span>ℹ️</span>
          <p>
            This page displays the details of the book you selected.
          </p>
        </div>

        <div className="details-buttons">
          <button
            className="details-primary-button"
            onClick={() => navigate("/browse-books")}
          >
            ← Back to Books
          </button>

          <button
            className="details-secondary-button"
            onClick={() => navigate("/")}
          >
            ← Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
