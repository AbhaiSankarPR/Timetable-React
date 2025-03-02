import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ButtonToGo from './buttonToGo.jsx';
import Header from './header.jsx';
import TablePage from './timetablepage.jsx';
import SubjectPortion from './Portion.jsx';
import './App.css';
import BackButton from './backbutton.jsx';
import LoadingScreen from './LoadingScreen.jsx';
import AdminLogin from './AdminLogin.jsx';
import EditTimeTable from './EditTimeTable.jsx';
import NotFound from './NotFound.jsx';
import CreatenewLogin from './CreatenewLogin.jsx';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBrgdWlI10a2zC6yBRyvw2YttXv81WMFRU",
  authDomain: "timetable-react.firebaseapp.com",
  databaseURL: "https://timetable-react-default-rtdb.firebaseio.com",
  projectId: "timetable-react",
  storageBucket: "timetable-react.firebasestorage.app",
  messagingSenderId: "781063761197",
  appId: "1:781063761197:web:f8f07bf7615f896e0977a4",
  measurementId: "G-SZ9KQHTRXK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        <Route path="/AdminLogin" element={<AdminLogin/>} />
        <Route path="/EditTimeTable" element={<EditTimeTable/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/CreatenewLogin" element={<CreatenewLogin/>} />

      </Routes>
    </>
  );
}

export default App;
