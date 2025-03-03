import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";

function Table() {
  const navigate = useNavigate();


  const department = ["CSE", "MECH", "EEE", "CIVIL"];


  const subj = department;
  return (
    <>
      {subj.map((exam, index) => (
        <div className="bar" key={index}>
          <div className="dayanddate">
            <span>{exam}</span>

          </div>
          <div
            className="details"
            onClick={() => navigate(`/timetable/${(exam.toLowerCase())}`)}
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
