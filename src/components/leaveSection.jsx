import { useState } from "react";
import { Link } from "react-router-dom";


function LeaveSection({ employees, applyLeave }) {
  const [selectedEmployeeName, setSelectedEmployeeName] = useState("");
  const [selectedEmployeeRole, setSelectedEmployeeRole] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedEmployeeName || !leaveType || !startDate || !endDate) {
      alert("Please fill all required fields!");
      return;
    }
    const days = Math.ceil(
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1
    );
    applyLeave(selectedEmployeeName, days, leaveType, startDate, endDate);
    setSelectedEmployeeName("");
  setSelectedEmployeeRole("");
  setLeaveType("");
  setStartDate("");
  setEndDate("");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Leave Application</h1>
      <div className="card shadow p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeName" className="form-label">
              Employee Name
            </label>
            <select
              id="employeeName"
              className="form-select"
              value={selectedEmployeeName}
              onChange={(e) => setSelectedEmployeeName(e.target.value)}
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.name}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Employee Role
            </label>
            <select
              id="department"
              className="form-select"
              value={selectedEmployeeRole}
              onChange={(e) => setSelectedEmployeeRole(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Development">Developer</option>
              <option value="Sales">Designer</option>
              <option value="Sales">Accounting</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="leaveType" className="form-label">
              Leave Type
            </label>
            <select
              id="leaveType"
              className="form-select"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
            >
              <option value="">Select Leave Type</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Earned Leave">Earned Leave</option>
              <option value="Earned Leave">Emergency Leave</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success mt-3">
            Apply
          </button>

          <Link
            to="/employee-details"
            className="btn btn-primary ms-3 mt-3 ps-4 pe-4"
          >
            {" "}
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LeaveSection;