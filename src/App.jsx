// src/App.jsx
import React from "react";
import { Search } from "lucide-react";
import "./App.css";
import StudentDataPage from "./pages/StudentDataPage";
import StudentProfilePage from "./pages/StudentProfilePage";
import StudentCounseling from "./pages/StudentCounseling";
import SignInPage from "./pages/SignInPage";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/logo.png" alt="Logo" />
      <nav className="nav-buttons">
        <button>
          <i className="fas fa-home"></i>
        </button>
        <button>
          <i className="fas fa-users"></i>
        </button>
        <button>
          <i className="fas fa-chart-bar"></i>
        </button>
        <button>
          <i className="fas fa-cog"></i>
        </button>
      </nav>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <div>
        <h2>Name: Mohanvi Khanna</h2>
        <p>Roll No: 190032</p>
        <p>Current Branch: ECE</p>
        <p>Current Sem: 5th</p>
      </div>
      <div className="last-login">Last login was 1 day ago</div>
    </div>
  );
}

function RiskAnalysis() {
  const risks = [
    { level: "HIGH", value: 20, color: "bg-red", label: "2 students/month" },
    { level: "MEDIUM", value: 40, color: "bg-blue", label: "4 students/month" },
    { level: "LOW", value: 10, color: "bg-yellow", label: "1 student/month" },
  ];

  return (
    <div className="risk-analysis">
      <h3>Risk Analysis</h3>
      <div className="risk-levels">
        {risks.map((risk) => (
          <div key={risk.level} className="risk-item">
            <div className={`risk-circle ${risk.color}`}>{risk.value}</div>
            <p className="risk-level">{risk.level}</p>
            <p className="risk-label">{risk.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentTable() {
  const students = [
    { name: "RAHUL", email: "rahul.student@college.ac.in", risk: "HIGH", score: 10, img: "/s1.png" },
    { name: "LAMISHA", email: "lamisha.student@college.ac.in", risk: "MEDIUM", score: 12, img: "/s2.png" },
    { name: "DINESH", email: "dinesh.student@college.ac.in", risk: "LOW", score: 7, img: "/s3.png" },
    { name: "SWATI", email: "swati.student@college.ac.in", risk: "HIGH", score: 9, img: "/s4.png" },
  ];

  return (
    <div className="student-table-container">
      <div className="student-table-header">
        <h3>Student Data</h3>
        <div className="search-box">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Risk</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.name}>
              <td className="student-name-cell">
                <img src={s.img} alt={s.name} />
                <span>{s.name}</span>
              </td>
              <td className="email-cell">{s.email}</td>
              <td>{s.risk}</td>
              <td>{s.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div style={{ flex: 1, padding: "2rem" }}>
//         <ProfileCard />
//         <RiskAnalysis />
//         <StudentTable />
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return <StudentDataPage />;
// }

// export default function App() {
//   return <StudentProfilePage />;
// }

// export default function App() {
//   return <StudentCounseling />;
// }

export default function App() {
  return <SignInPage />;
}