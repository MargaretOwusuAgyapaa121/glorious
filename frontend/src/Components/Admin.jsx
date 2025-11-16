import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Admin() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch all submissions from backend
    axios.get("http://localhost:5000/api/submissions")
      .then((res) => setSubmissions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin-wrapper">
      <div className="admin-card">
        <h2>Camp Registrations</h2>
        <p className="subtitle">List of all applicants</p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan="5">No submissions yet.</td>
                </tr>
              ) : (
                submissions.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
