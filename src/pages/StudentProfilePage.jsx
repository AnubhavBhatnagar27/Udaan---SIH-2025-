import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/StudentProfilePage.css";

export default function StudentProfilePage() {
  const student = {
    name: "Aadarsh thakur",
    semester: "5th",
    branch: "CSE",
    batch: "2023-2027",
    enrollment: "0105CS231001",
    email: "Aadarshthakur56@gmail.com",
    dob: "04 September 2004",
    guardian: { name: "Sumit Thakur", mobile: "79856*****" },
    risk: "High Risk",
    riskScore: 0.82,
    counseling: {
      mentor: "Prof. Neha Sharma",
      date: "10 Sept 2025",
      time: "3 PM",
    },
    img: "/avatar.png",
  };

  return (
    <div className="profile-page">
      <Sidebar />

      <div className="profile-main">
        {/* Left Profile Card */}
        <div className="profile-card">
          <img src={student.img} alt={student.name} className="profile-avatar" />
          <h2 className="student-name">Name: {student.name}</h2>
          <p>Semester: {student.semester}</p>
          <p>Branch: {student.branch}</p>
          <p>Batch: {student.batch}</p>
          <p>Enrollment No.: {student.enrollment}</p>
          <p>Email ID: {student.email}</p>
          <p>D.O.B: {student.dob}</p>
          <p>Guardian Mobile No: {student.guardian.mobile}</p>
          <p>Guardian Name: {student.guardian.name}</p>
        </div>

        {/* Right Risk Card */}
        <div className="risk-card">
          <h3>
            Risk: <span className="risk-badge">{student.risk}</span>
          </h3>
          <p>
            {student.name} is currently flagged as 🔴 <b>{student.risk}</b> due
            to 72% attendance (below 75%) and a drop in CGPA to 6.8/10 in the
            last semester.
          </p>
          <p>
            The ML risk score is <b>{student.riskScore}</b>, indicating a high
            probability of course backlog if no action is taken.
          </p>
          <p>
            A counseling session is scheduled with <b>{student.counseling.mentor}</b> on{" "}
            {student.counseling.date} at {student.counseling.time}, and alerts
            have already been sent to the mentor and student.
          </p>
          <p>
            It is strongly recommended that {student.name.split(" ")[0]} attends
            all upcoming classes, clears assignment backlogs before 8 Sept, and
            meets the mentor before the next internal exam to reduce academic
            risk.
          </p>
        </div>
      </div>
    </div>
  );
}
