import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import CreateEmployee from "./components/createEmployee";
import EmployeeDetails from "./components/employeeDetails";
import LeaveSection from "./components/leaveSection";
import WelcomePage from "./components/dashBoard";
import EmployeeView from "./components/read";
import UpdateEmployee from "./components/update";
import './App.css'




function App() {
  const [employees, setEmployees] = useState([
    {
      name: "John Doe",
      id: "1",
      email: "john8@gmail.com",
      phone: 345673456,
      role: "Developer",
      remainingLeaves: 10,
      leaveHistory: [],
    },
    {
      name: "Jane Smith",
      id: "2",
      email: "smith09@gmail.com",
      phone: 9456327896,
      role: "Desiner",
      remainingLeaves: 8,
      leaveHistory: [],
    },
    {
      name: "Alice Brown",
      id: "3",
      email: "alice45@gmail.com",
      phone: 9560346706,
      role: "Accounts",
      remainingLeaves: 5,
      leaveHistory: [],
    },
  ]);

  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (name, id, email, phone, role) => {
    const newEmployee = {
      name,
      id,
      email,
      phone,
      role,
      remainingLeaves: 10,
      leaveHistory: [],
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleUpdate = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  const applyLeave = (name, days, leaveType, startDate, endDate ) => {
    // const start = new Date(startDate);
    // const end = new Date(endDate);
   
    if (days <= 0) {
      alert("Invalid Date.");
      return;
    }

    const updatedEmployees = employees.map((emp) => {
      if (emp.name === name) {
        if (emp.remainingLeaves >= days) {
          setRecentActivities([
            ...recentActivities,
            `${emp.name} applied for ${days} days leave.`,
          ]);
          return {
            ...emp,
            remainingLeaves: emp.remainingLeaves - days,
            leaveHistory: [
              ...emp.leaveHistory,
              { startDate, endDate, days, leaveType },
            ],
          };
        } else {
          alert("Not enough leave days available.");
        }
      }
      return emp;
    });

    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <Router>
        <div className="p-4">
          <Navbar />
          
          

          <Routes>

         
          

            <Route
              path="/"
              element={<WelcomePage employees={employees} />}
            />
            <Route
              path="/employee-details"
              element={
                <EmployeeDetails
                  employees={employees}
                  setEmployees={setEmployees}
                />
              }
            />
            <Route
              path="/leave-section"
              element={
                <LeaveSection employees={employees} applyLeave={applyLeave} />
              }
            />
            <Route
              path="/create-employee"
              element={<CreateEmployee addEmployee={addEmployee} />}
            />
            <Route
              path="/employee/:id"
              element={<EmployeeView employees={employees} />}
            />
            <Route
              path="/update-employee/:id"
              element={<UpdateEmployee handleUpdate={handleUpdate} />}
            />
            
           
           
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

