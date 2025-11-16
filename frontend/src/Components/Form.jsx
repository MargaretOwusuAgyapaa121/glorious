import React, { useState } from "react";
import axios from "axios";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/submit", form);

      alert("Form Submitted Successfully!");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        address: ""
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Check console for details.");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Camp Registration Form</h2>
        <p className="subtitle">Please fill out your details below</p>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter your full name"
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Enter your email address"
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          placeholder="Enter your phone number"
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          placeholder="Enter your Address"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
