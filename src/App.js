import { BrowserRouter, Routes, Route } from "react-router-dom";

// Gopi pages
import FirstLoginPage from "./frontendpages/FirstLoginPage";
import AdminDashboard from "./frontendpages/AdminDashboard";

// Lisha user pages
import UserDashboard from "./pages/UserDashboard";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import MyBooks from "./pages/MyBooks";
import IssuedBooks from "./pages/IssuedBooks";
import ReturnedBooks from "./pages/ReturnedBooks";

// Temporary Admin pages
function BooksPage() {
  return (
    <div>
      <h1>Books Management</h1>
      <p>Subi will build this page.</p>
    </div>
  );
}

function UsersPage() {
  return (
    <div>
      <h1>Users Management</h1>
      <p>Subi will build this page.</p>
    </div>
  );
}

function IssueReturnPage() {
  return (
    <div>
      <h1>Issue / Return</h1>
      <p>This page will be developed later.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= LOGIN ================= */}

        <Route
          path="/"
          element={<FirstLoginPage />}
        />


        {/* ================= ADMIN ================= */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/books"
          element={<BooksPage />}
        />

        <Route
          path="/admin/users"
          element={<UsersPage />}
        />

        <Route
          path="/admin/issue-return"
          element={<IssueReturnPage />}
        />


        {/* ================= USER ================= */}

        <Route
          path="/user"
          element={<UserDashboard />}
        />

        <Route
          path="/browse-books"
          element={<BrowseBooks />}
        />

        {/* Book Details */}
        <Route
          path="/book-details"
          element={<BookDetails />}
        />

        <Route
          path="/my-books"
          element={<MyBooks />}
        />

        <Route
          path="/issued-books"
          element={<IssuedBooks />}
        />

        <Route
          path="/returned-books"
          element={<ReturnedBooks />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;