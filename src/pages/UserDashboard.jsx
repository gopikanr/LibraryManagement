import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>

      <p>Welcome to the Library Management System!</p>

      <div className="dashboard-buttons">
        <button onClick={() => navigate("/browse-books")}>
          Browse Books
        </button>

        <button onClick={() => navigate("/my-books")}>
          My Books
        </button>

        <button onClick={() => navigate("/issued-books")}>
          Issued Books
        </button>

        <button onClick={() => navigate("/returned-books")}>
          Returned Books
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;