import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "../Components/Intro";
import ApplyForm from "../Components/Form";
import Admin from "../Components/Admin"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/form" element={<ApplyForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
