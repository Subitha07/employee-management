import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Table } from "react-bootstrap";
function EmployeeDetails({ employees, setEmployees }) {
  const navigate = useNavigate();

  const handleUpdate = (employee) => {
    navigate(`/update-employee/${employee.id}`, { state: { employee } });
  };

  const deleteEmployee = (id) => {
    const confirm = window.confirm(
      "This employee details will be going to Delete ?"
    );
    if (confirm) {
      const updatedEmployees = employees.filter((emp) => emp.id !== id);
      setEmployees(updatedEmployees);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center  vh-75">
      <h1 className=" mt-4 text-center">Employee Details</h1>
      <div className=" w-75   p-4">
        <div className="d-flex justify-content-end ">
          <Link to="/create-employee" className="btn btn-info ps-3 pe-3 mb-3">
            Add
          </Link>
        </div>

        <div className="table-container mt-4">
          <Table className="table  table-striped table-hover table-bordered table-responsive-sm   table-sm">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  ID
                </th>
                <th scope="col" className="text-center">
                  Email
                </th>
                <th scope="col" className="text-center">
                  Phone
                </th>
                <th scope="col" className="text-center">
                  Departments
                </th>
                <th scope="col" className="text-center">
                  Leaves
                </th>
                <th scope="col" className="text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody style={{ verticalAlign: "middle" }}>
              {employees.map((employee) => (
                <tr key={employee.id} className="mb-4">
                  <td className=" text-center">{employee.name}</td>
                  <td className="text-left">{employee.id}</td>
                  <td className="text-center">{employee.email}</td>
                  <td className="text-left">{employee.phone}</td>
                  <td className="text-center">{employee.role}</td>

                  <td>
                    {/* <Link
                      to="/leave-section"
                      className="btn btn-md btn-outline-info ms-3"
                    >
                      {employee.remainingLeaves}/10{" "}
                    </Link> */}

<button
                      className="btn btn-md btn-outline-info ms-3 "
                      onClick={() => navigate(`/employee/${employee.id}`)}
                    >
                         {employee.remainingLeaves}/10{" "}
                      
                    </button>
                  </td>
                  <td className="d-flex justify-content-center flex-column flex-sm-row">
                    <button
                      className="btn btn-md btn-outline-success mb-2 mb-sm-0 me-2 "
                      onClick={() => navigate(`/employee/${employee.id}`)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-md btn-primary mb-2 mb-sm-0 me-2"
                      onClick={() => handleUpdate(employee)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-md btn-outline-danger mb-2 mb-sm-0 me-2"
                      onClick={(e) => deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;