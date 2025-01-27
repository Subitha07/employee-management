import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateEmployee = ({ handleUpdate }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { employee } = state || {};

  const [formData, setFormData] = useState({
    name: employee?.name || "",
    id: employee?.id || "",
    email: employee?.email || "",
    phone: employee?.phone || "",
    role: employee?.role || "",
    remainingLeaves: employee?.remainingLeaves || 0,
    leaveHistory: employee?.leaveHistory || [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.role) {
      handleUpdate(formData);

      navigate("/employee-details");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
           Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Department
          </label>
          <input
            type="text"
            id="role"
            name="role"
            className="form-control"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-3"
          onClick={() => navigate("/employee-details")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;