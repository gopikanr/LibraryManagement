
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();

  const dashboardItems = [
    {
      title: "Browse Books",
      description: "Explore and search books in the library.",
      icon: "📚",
      path: "/browse-books",
      color: "blue",
    },
    {
      title: "My Books",
      description: "View your personal book collection.",
      icon: "📖",
      path: "/my-books",
      color: "purple",
    },
    {
      title: "Issued Books",
      description: "Check your currently issued books.",
      icon: "📕",
      path: "/issued-books",
      color: "orange",
    },
    {
      title: "Returned Books",
      description: "Review your previously returned books.",
      icon: "📗",
      path: "/returned-books",
      color: "green",
    },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <span className="brand-icon">📚</span>
          <span>Library Management System</span>
        </div>

        <span className="user-badge">User Portal</span>
      </header>

      <main className="dashboard-main">
        <section className="welcome-banner">
          <div>
            <span className="welcome-label">YOUR PERSONAL LIBRARY</span>

            <h1>Welcome to Your Dashboard!</h1>

            <p>
              Discover books, manage your borrowed books, and
              keep track of your reading journey.
            </p>
          </div>

          <div className="welcome-illustration">📚</div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <h2>Explore Your Library</h2>
              <p>Choose an option to get started.</p>
            </div>
          </div>

          <div className="dashboard-grid">
            {dashboardItems.map((item) => (
              <button
                key={item.title}
                className={`dashboard-card ${item.color}`}
                onClick={() => navigate(item.path)}
              >
                <span className="card-icon">{item.icon}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="card-link">
                  Open section <span>→</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <footer className="dashboard-footer">
          <p>Library Management System · Your journey starts with a book.</p>
        </footer>
      </main>
    </div>
  );
}

export default UserDashboard;