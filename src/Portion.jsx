import React from "react";
import { useParams } from "react-router-dom";
import "./portion.css";

const portions = {
  cse: {
    ds: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs",
    os: "Process Management, Memory Management, File Systems, Synchronization",
    algo: "Sorting, Searching, Dynamic Programming, Greedy Algorithms",
    dbms: "SQL, Normalization, Transactions, Indexing, NoSQL Databases",
    cn: "OSI Model, TCP/IP, Routing Algorithms, Network Security",
  },
  mech: {
    thermo: "Laws of Thermodynamics, Heat Transfer, Refrigeration",
    fluid: "Fluid Properties, Bernoulli’s Equation, Pipe Flow, Turbulence",
    machine: "Stress Analysis, Gears, Bearings, Design Considerations",
    eng_mech: "Statics, Dynamics, Force Systems, Friction",
    manufacturing: "Casting, Welding, Machining, Additive Manufacturing",
  },
  eee: {
    circuit: "Ohm’s Law, Kirchhoff’s Laws, Thevenin’s Theorem, AC Circuits",
    power: "Generation, Transmission, Distribution, Fault Analysis",
    em: "Electrostatics, Magnetostatics, Maxwell’s Equations",
    machines: "Transformers, DC Motors, Induction Motors, Synchronous Machines",
    control: "Transfer Functions, Stability, PID Controllers, State Space Analysis",
  },
  civil: {
    structure: "Trusses, Beams, Bending Moment, Shear Force",
    concrete: "Cement Composition, Mix Design, Strength Tests",
    survey: "Leveling, Contouring, GPS Surveying, Total Station",
    geotech: "Soil Mechanics, Foundations, Bearing Capacity",
    transport: "Highway Design, Traffic Engineering, Pavement Materials",
  },
};

function SubjectPortion() {
  const { department, subject } = useParams();

  const portion = portions[department]?.[subject] || "No portion available";

  return (
    <div className="portionbox">
      <h2>{subject.replace(/-/g, " ").toUpperCase()} Portion</h2>
      <p>{portion}</p>
    </div>
  );
}

export default SubjectPortion;
