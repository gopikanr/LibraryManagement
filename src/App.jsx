import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserDashboard from "./pages/UserDashboard";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/browse-books" element={<BrowseBooks />} />
        <Route path="/book-details" element={<BookDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;