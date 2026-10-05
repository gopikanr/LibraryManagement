import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import UserDashboard from "./pages/UserDashboard";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import MyBooks from "./pages/MyBooks";
import IssuedBooks from "./pages/IssuedBooks";
import ReturnedBooks from "./pages/ReturnedBooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/browse-books" element={<BrowseBooks />} />
        <Route path="/book-details" element={<BookDetails />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/issued-books" element={<IssuedBooks />} />
        <Route path="/returned-books" element={<ReturnedBooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;