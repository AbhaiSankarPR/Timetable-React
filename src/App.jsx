import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ButtonToGo from './buttonToGo.jsx';
import Header from './header.jsx';
import TablePage from './timetablepage.jsx';
import SubjectPortion from './Portion.jsx';
import './App.css';
import BackButton from './backbutton.jsx';
import LoadingScreen from './LoadingScreen.jsx';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Header />
      {location.pathname !== "/" && <BackButton />}

      {location.pathname === "/" && (
        <div className="timetable-intro">
          <h1>📅 Plan Smart, Study Smarter!</h1>
          <p>
            Welcome to your <strong>Timetable Hub</strong>! 🎯 Stay on top of your schedule with an organized view of your classes.
            Whether you’re gearing up for the day or revising a subject, this timetable is your go-to guide.
          </p>
          <ul>
            <li>✨ Effortlessly track your subjects & timings</li>
            <li>🔍 Click on subjects for in-depth portion details</li>
            <li>⏳ Stay ahead, stay prepared, stay stress-free!</li>
          </ul>
        </div>
      )}

      <Routes>
        <Route path="/" element={<ButtonToGo />} />
        <Route path="/timetable" element={<TablePage />} />
        <Route path="/subject/:subject" element={<SubjectPortion />} />
      </Routes>
    </>
  );
}

export default App;
