import React from 'react';
import { useNavigate } from 'react-router-dom';
import './buttontogo.css';

function ButtonToGo() {
    const navigate = useNavigate();

    return (
        <button className="btn" onClick={() => navigate("/timetable")}>
            Go to Timetable
        </button>
    );
}

export default ButtonToGo;
