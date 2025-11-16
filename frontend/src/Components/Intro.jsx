import React from "react";
import { useNavigate } from "react-router-dom";


export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="intro-wrapper">
      <div className="intro-card">
        <h1 className="ministry-title">
          Glorious Anchor of Life Ministry – Ghana
        </h1>

        <h2 className="sub-title">Logos Assembly Presents</h2>

        <h3 className="retreat-title">5 Days Powerful Retreat</h3>

        <p className="location">At Atwea Mountain</p>

        <p className="theme">
          <strong>Theme:</strong> The Mountain Top – <span>Isaiah 2:25</span>
        </p>

        <h3 className="guest-header">Featuring Ministers</h3>

        <ul className="guests">
          <li>Rev. Abdul Razark</li>
          <li>Prophet Godwin Edusie</li>
          <li>Pastor Eben</li>
          <li>Awusi Pjhilemon</li>
        </ul>

        <button className="interest-btn" onClick={() => navigate("/form")}>
          Yes, I'm Interested
        </button>
      </div>
    </div>
  );
}
