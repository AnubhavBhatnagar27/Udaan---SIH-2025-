import React from "react";
import Sidebar from "../components/Sidebar";
import StudentCard from "../components/StudentCard";
import "../styles/StudentDataPage.css"; // normal css file for this page

export default function StudentDataPage() {
  // Example student data
  const students = [
    {
      name: "Aadarsh thakur",
      branch: "CSE",
      batch: "2023-2027",
      enrollment: "0105CS231001",
      risk: "High Risk",
      guardian: { name: "Sumit Thakur", mobile: "79856*****" },
      img: "/avatar.png",
    },
    {
      name: "Aadarsh thakur",
      branch: "CSE",
      batch: "2023-2027",
      enrollment: "0105CS231001",
      risk: "High Risk",
      guardian: { name: "Sumit Thakur", mobile: "79856*****" },
      img: "/avatar.png",
    },
    {
      name: "Aadarsh thakur",
      branch: "CSE",
      batch: "2023-2027",
      enrollment: "0105CS231001",
      risk: "High Risk",
      guardian: { name: "Sumit Thakur", mobile: "79856*****" },
      img: "/avatar.png",
    },
    {
      name: "Aadarsh thakur",
      branch: "CSE",
      batch: "2023-2027",
      enrollment: "0105CS231001",
      risk: "High Risk",
      guardian: { name: "Sumit Thakur", mobile: "79856*****" },
      img: "/avatar.png",
    },
  ];

  return (
    <div className="student-page">
      <Sidebar />
      <div className="student-page-main">
        <h2 className="student-title">STUDENT DATA</h2>
        <p className="college-name">
          College: Oriental Institute of Science & Technology
        </p>

        <div className="student-grid">
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}
