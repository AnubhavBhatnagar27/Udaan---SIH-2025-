import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/StudentCounseling.css";

export default function StudentCounseling() {
  const students = [
    {
      name: "Aadarsh Thakur",
      enrollment: "0105CD231001",
      date: "01/11/2023",
      status: "Done",
    },
    {
      name: "Aadarsh Thakur",
      enrollment: "0105CD231001",
      date: "01/11/2023",
      status: "Pending",
    },
    {
      name: "Aadarsh Thakur",
      enrollment: "0105CD231001",
      date: "01/11/2023",
      status: "Overdue",
    },
  ];

  return (
    <div className="counseling-page">
      <Sidebar />

      <div className="counseling-main">
        <h2>CSE SEM-5 LIST</h2>

        {/* Top Stats */}
        <div className="stats-bar">
          <div className="stat-box">
            <h3>Total Student</h3>
            <p>100</p>
          </div>
          <div className="stat-box">
            <h3>Completed</h3>
            <p>50</p>
          </div>
          <div className="stat-box">
            <h3>Pending</h3>
            <p>40</p>
          </div>
          <div className="stat-box">
            <h3>Overdue</h3>
            <p>10</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <p>Counseling Completed: 40%</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "40%" }}></div>
          </div>
        </div>

        {/* Student Table */}
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
            {students.map((s, index) => (
              <tr key={index}>
                <td>{s.name}</td>
                <td>{s.enrollment}</td>
                <td>{s.date}</td>
                <td>
                  <span className={`status ${s.status.toLowerCase()}`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
