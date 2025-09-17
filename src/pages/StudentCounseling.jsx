// src/pages/StudentCounseling.jsx
import React, { useState } from "react";
import "../styles/StudentCounseling.css";

export default function StudentCounseling() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([
    { name: "Aadarsh Thakur", enrollment: "0105CD231001", date: "01/11/2023", status: "Done" },
    { name: "Rahul Sharma", enrollment: "0105CD231011", date: "02/11/2023", status: "Pending" },
    { name: "Sneha Verma", enrollment: "0105CD231021", date: "05/11/2023", status: "Overdue" },
    { name: "Swati Gupta", enrollment: "0105CD231031", date: "06/11/2023", status: "Done" },
    { name: "Umesh Patel", enrollment: "0105CD231041", date: "07/11/2023", status: "Pending" },
  ]);

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.enrollment.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (index) => {
    setStudents((prev) =>
      prev.map((s, i) => {
        if (i === index) {
          if (s.status === "Done") return { ...s, status: "Pending" };
          if (s.status === "Pending") return { ...s, status: "Done" };
        }
        return s;
      })
    );
  };

  return (
    <div className="counseling-page">
      <div className="counseling-main">
        <h2 className="page-title">📚 CSE SEM-5 Counseling Dashboard</h2>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-box">
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>
          <div className="stat-box">
            <h3>✅ Completed</h3>
            <p>{students.filter((s) => s.status === "Done").length}</p>
          </div>
          <div className="stat-box">
            <h3>⏳ Pending</h3>
            <p>{students.filter((s) => s.status === "Pending").length}</p>
          </div>
          <div className="stat-box">
            <h3>⚠️ Overdue</h3>
            <p>{students.filter((s) => s.status === "Overdue").length}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-section">
          <p>
            Counseling Completed:{" "}
            {Math.round(
              (students.filter((s) => s.status === "Done").length / students.length) * 100
            )}
            %
          </p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${
                  (students.filter((s) => s.status === "Done").length / students.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Records */}
        <div className="table-container">
          <div className="table-header">
            <h3>📑 Counseling Records</h3>
            <div className="search-box">
              <input
                type="text"
                placeholder=" Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="table-scroll">
            <table className="student-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Enrollment No.</th>
                  <th>Counseling Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((s, index) => (
                    <tr key={index}>
                      <td>{s.name}</td>
                      <td>{s.enrollment}</td>
                      <td>{s.date}</td>
                      <td>
                        <span
                          className={`status ${s.status.toLowerCase()}`}
                          onClick={() => toggleStatus(index)}
                          style={{ cursor: s.status !== "Overdue" ? "pointer" : "default" }}
                        >
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="no-data">
                      ❌ No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
