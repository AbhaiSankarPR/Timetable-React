import React from "react";
import { useParams } from "react-router-dom";
import "./portion.css";

const portions = {
  math: "Algebra, Geometry, Calculus",
  english: "Grammar, Literature, Writing Skills",
  science: "Physics, Chemistry, Biology",
  social: "History, Geography, Civics",
  computer: "Programming, Networking, Cybersecurity",
};

function SubjectPortion() {
  const { subject } = useParams();

  return (
    <div className="portionbox">
      <h2>{subject.replace(/-/g, " ").toUpperCase()} Portion</h2>
      <p>{portions[subject] || "No portion available"}</p>
    </div>
  );
}

export default SubjectPortion;
