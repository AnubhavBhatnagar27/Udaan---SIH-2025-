// src/App.jsx
import React, { useRef, useState } from "react";
import logo from "./assets/logo.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Search, Home, Users, BarChart3, Info, LogOut } from "lucide-react";
import "./App.css";

import SignInPage from "./pages/SignInPage";
import StudentCounseling from "./pages/StudentCounseling";
import StudentDataPage from "./pages/StudentDataPage";
import "../src/styles/StudentProfilePage.css";

function StudentProfilePage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state;

  if (!student) {
    return (
      <Layout>
        <div className="profile-page">
          <p>No student data found. Please go back.</p>
          <button className="back-btn" onClick={() => navigate("/students")}>
            ⬅ Back to Students
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="profile-page">
        <div className="profile-main">
          <div className="profile-card">
            <img
              src={student.img}
              alt={student.name}
              className="profile-avatar"
            />
            <h2 className="student-name">{student.name}</h2>
            <p className="enrollment">Enrollment: {student.enrollment}</p>
            <div className="profile-details">
              <p>
                <strong>Branch:</strong> {student.branch}
              </p>
              <p>
                <strong>Batch:</strong> {student.batch}
              </p>
              <p>
                <strong>Email:</strong> {student.email || "Not Available"}
              </p>
              <p>
                <strong>D.O.B:</strong> {student.dob || "Not Available"}
              </p>
            </div>
            <div className="guardian-section">
              <h4>👨‍👩‍👦 Guardian Info</h4>
              <p>
                <strong>Name:</strong> {student.guardian?.name}
              </p>
              <p>
                <strong>Mobile:</strong> {student.guardian?.mobile}
              </p>
            </div>
          </div>

          <div className="risk-card">
            <h3>
              Risk Status:{" "}
              <span
                className={`risk-badge ${
                  student.risk === "High Risk"
                    ? "risk-high"
                    : student.risk === "Medium Risk"
                    ? "risk-medium"
                    : "risk-low"
                }`}
              >
                {student.risk}
              </span>
            </h3>
            <p>
              {student.name} is currently flagged as <b>{student.risk}</b>. Based
              on attendance & CGPA, ML system predicts possible academic risk.
            </p>
            <p>
              Counseling session will be scheduled with mentor. Alerts are sent
              to student & mentor automatically.
            </p>
            <button className="back-btn" onClick={() => navigate("/students")}>
              ⬅ Back to Students
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const menu = [
    { to: "/dashboard", icon: <Home size={20} />, label: "Dashboard" },
    { to: "/students", icon: <Users size={20} />, label: "Student Data" },
    { to: "/counseling", icon: <BarChart3 size={20} />, label: "Counseling" },
    {
      to: "/about",
      icon: <Info size={20} />,
      label: "About Us",
      download: true,
    },
  ];

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="logo-section">
        <img src={logo} alt="App Logo" className="sidebar-logo" />
        {isExpanded && <span className="logo-text">Udaan</span>}
      </div>

      <nav className="nav-buttons">
        {menu.map((item) =>
          item.download ? (
            <a
              key={item.to}
              href="/about.pdf"
              download="about.pdf"
              className="nav-link"
            >
              {item.icon}
              {isExpanded && <span className="nav-label">{item.label}</span>}
            </a>
          ) : (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${
                location.pathname === item.to ? "active" : ""
              }`}
            >
              {item.icon}
              {isExpanded && <span className="nav-label">{item.label}</span>}
            </Link>
          )
        )}
      </nav>

      <div className="sidebar-bottom">
        <button
          className="logout-btn"
          onClick={() => {
            alert("Logging out...");
            navigate("/");
          }}
        >
          <LogOut size={22} />
          {isExpanded && <span className="nav-label">Logout</span>}
        </button>
      </div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">{children}</div>
    </div>
  );
}

function ProfileSection() {
  const [profileImg, setProfileImg] = useState(null);
  const avatarInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) console.log("Selected file:", file.name);
  };

  return (
    <div className="profile-section">
      <div className="profile-left">
        <div
          className="profile-avatar"
          onClick={() => avatarInputRef.current.click()}
          style={{
            backgroundImage: profileImg ? `url(${profileImg})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <input
          type="file"
          accept="image/*"
          ref={avatarInputRef}
          onChange={handleAvatarChange}
          style={{ display: "none" }}
        />
        <div className="profile-info">
          <h2>Manav Khare</h2>
          <p>ID.No: 9595******</p>
          <p>
            <strong>Branch:</strong> Computer Science
          </p>
          <p>
            <strong>Semester:</strong> 5th
          </p>
        </div>
      </div>

      <div className="profile-right">
        <div className="upload-box">
          <p>
            <strong>Select file or drag & drop</strong>
          </p>
          <small>png, jpg, pdf, docx accepted</small>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <button
            className="upload-btn"
            onClick={() => fileInputRef.current.click()}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

function RiskAnalysis() {
  const risks = [
    { level: "HIGH", value: 20, color: "red", change: "+37.8% this month" },
    { level: "MEDIUM", value: 40, color: "blue", change: "-2% this month" },
    { level: "LOW", value: 10, color: "yellow", change: "+11% this week" },
  ];

  return (
    <div className="risk-analysis">
      <h3 className="risk-title">📊 Risk Analysis</h3>
      <div className="risk-items">
        {risks.map((risk) => (
          <div key={risk.level} className="risk-item">
            <div className={`risk-circle ${risk.color}`}>{risk.value}</div>
            <p className="risk-level">{risk.level}</p>
            <p className="risk-change">{risk.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentTable() {
  const [search, setSearch] = useState("");

  const students = [
    { name: "RAHUL", risk: "HIGH", daysIn: 10 },
    { name: "UMESH", risk: "HIGH", daysIn: 12 },
    { name: "SNEHA", risk: "MEDIUM", daysIn: 7 },
    { name: "SWATI", risk: "LOW", daysIn: 3 },
  ];

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="student-table-container">
      <div className="student-table-header">
        <h3>📑 Student Data</h3>
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>STUDENT NAME</th>
            <th>RISK</th>
            <th>DAYS IN</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((s) => (
              <tr key={s.name}>
                <td className="student-name-cell">
                  <strong>{s.name}</strong>
                  <p>Attendance: 72% this semester</p>
                </td>
                <td>
                  <span className={`badge badge-${s.risk.toLowerCase()}`}>
                    {s.risk}
                  </span>
                </td>
                <td>{s.daysIn}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="no-data">
                ❌ No student found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Dashboard() {
  return (
    <Layout>
      <ProfileSection />
      <RiskAnalysis />
      <StudentTable />
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/students"
          element={
            <Layout>
              <StudentDataPage />
            </Layout>
          }
        />
        <Route path="/students/:id" element={<StudentProfilePage />} />
        <Route
          path="/counseling"
          element={
            <Layout>
              <StudentCounseling />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
