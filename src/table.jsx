import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";

function Table() {
  const navigate = useNavigate();

  const exams = [
    { date: "20 FEB", day: "Mon", subject: "Mathematics", key: "math" },
    { date: "21 FEB", day: "Tues", subject: "English", key: "english" },
    { date: "23 FEB", day: "Wed", subject: "Science", key: "science" },
    { date: "24 FEB", day: "Thurs", subject: "Social Studies", key: "social" },
    { date: "28 FEB", day: "Fri", subject: "Computer Science", key: "computer" },
  ];

  const [upNext, setUpNext] = useState(null);

  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    }).toUpperCase(); 

    const upcomingExam = exams.find((exam) => exam.date >= formattedToday);
    setUpNext(upcomingExam);
  }, []);

  return (
    <>
      <div className="upnext-container">
        <p>Up Next</p>
        {upNext ? (
          <>
            <div className="upnext-suject">{upNext.subject}</div>
            <div className="upnext-date">
              <div>{upNext.date}</div>
              <div className="upnext-day">{upNext.day}</div>
            </div>
          </>
        ) : (
          <p>No upcoming exams</p>
        )}
      </div>

      {exams.map((exam, index) => (
        <div className="bar" key={index}>
          <div className="dayanddate">
            <span>{exam.subject}</span>
            <div className="date-day">
              {exam.date} {exam.day}
            </div>
          </div>
          <div
            className="details"
            onClick={() => navigate(`/subject/${exam.key}`)} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="44px"
              viewBox="0 -960 960 960"
              width="44px"
              fill="#e8eaed"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              <title>Details</title>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}

export default Table;
