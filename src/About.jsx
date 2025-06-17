import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">About This Project</h1>
            <div className="about-content">
                <div className="about-section">
                    <p>
                        The <strong>Timetable Management Web App</strong> is a simple and efficient scheduling tool built using React.
                        It helps users manage their weekly schedules with a clean, structured format, making time management easier.
                        Designed with a modern UI, the app ensures a seamless user experience.
                    </p>
                </div>

                <div className="about-section">
                    <h3>Key Features</h3>
                    <ul className="about-features">
                        <li><strong>Modern & Responsive Design</strong> – Works smoothly on desktops, tablets, and mobile devices.</li>
                        <li><strong>Dynamic Timetable Layout</strong> – Displays schedules in an organized, clear format.</li>
                        <li><strong>Fast & Lightweight</strong> – Built using React for enhanced performance.</li>
                        <li><strong>Simple & Intuitive</strong> – Easy navigation and user-friendly interface.</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h3>Technology Stack</h3>
                    <div className="about-tech">
                        <div className="tech-item"><strong>Frontend:</strong><br />React.js, JavaScript, HTML, CSS</div>
                        <div className="tech-item"><strong>Hosting:</strong><br />Vercel</div>
                    </div>
                </div>

                <div className="about-section">
                    <h3>Purpose & Inspiration</h3>
                    <p>
                        This project was developed as a hands-on learning experience in React development, state management,
                        and frontend design. Future enhancements may include interactive scheduling, reminders, and user authentication.
                    </p>
                </div>

                <div className="about-section">
                    <p className="developer">
                        <strong>
                            Developed by:{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/abhai-sankar-p-r-2410b3296"
                            >
                                Abhai Sankar P R
                            </a>{" "}
                            &{" "}
                            <a  target="_blank"
                                rel="noopener noreferrer" href="https://www.linkedin.com/in/anakhavaishakham/">Anakha S</a>
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
