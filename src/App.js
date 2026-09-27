import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstLoginPage from "./frontendpages/FirstLoginPage";
import AdminDashboard from "./frontendpages/AdminDashboard";

function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome to the User Dashboard</p>
    </div>
  );
}

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

        {/* Login */}
        <Route path="/" element={<FirstLoginPage />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Admin Pages */}
        <Route path="/admin/books" element={<BooksPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route
          path="/admin/issue-return"
          element={<IssueReturnPage />}
        />

        {/* User Dashboard */}
        <Route path="/user" element={<UserDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;