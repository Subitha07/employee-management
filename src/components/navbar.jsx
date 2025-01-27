import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 ">
      <Link className="navbar-brand text-primary " to="/">
        HR MANAGEMENT
      </Link>
      <button
        className="navbar-toggler btn btn-info mb-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto bg-light">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              DashBoard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employee-details">
              Employee Details
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/leave-section">
              Leave Application
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-employee">
              Create Employee
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    
    </>
   
    
  );
};

export default Navbar;