import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeView({ employees }) {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return (
      <div className="mt-4">
        <h2 style={{ textAlign: "center" }}>Employee not found</h2>

        <Link
          to="/employee-details"
          className="btn btn-primary ms-3 mt-3 ps-4 pe-4"
        >
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
    <div className="d-flex w-100 vh-50  row justify-content-center align-items-center mt-5">
      <div className="w-100 border bg-white shadow px-5 pt-4 pb-5  mb-5rounded responsive-sm">
        
          <div className="col-12 col-md-6 col-lg-4">
           

              
        <h2 className="text-2xl font-bold mb-4 text-center text-info">
          {employee.name}'s Details
        </h2>
        <h5 className="mb-4">
          <strong>ID :</strong> {employee.id}
        </h5>
        <h5 className="mb-4">
          <strong>Email :</strong> {employee.email}
        </h5>
        <h5 className="mb-4">
          <strong>Phone :</strong> {employee.phone}
        </h5>
        <h5 className="mb-4">
          <strong>Department :</strong> {employee.role}
        </h5>

        
        <h4 className="mb-4 text-danger">
          <strong>Remaining Leaves:</strong> {employee.remainingLeaves}
        </h4>


        <h5>
          {employee.leaveHistory?.length > 0 ? (
            employee.leaveHistory.map((leave, index) => (
            <h5 className="text-info " key={index}>
              <strong>Leave Taken: </strong>
            
             {leave.startDate}  to  {leave.endDate}  
              
            
             <p className="mb-0 mt-4 text-success">
            <strong>No. of Leave: </strong> <strong >{leave.days}</strong> Days Leave
           </p>
           </h5>
            

          ))):(
            <h4 className="text-success mt-3 text-center font-bold"><strong>Leave Taken:</strong>No leave history available</h4>
          )
        }
        </h5>

        
        <Link
          to="/employee-details"
          className="btn btn-primary ms-3 mt-4 ps-4 pe-4 text-center"
          style={{ textAlign: "center" }}
        >
          Back to Employee Details
        </Link>
      </div>
    </div>
    </div>

           
        </div>
  );
}

export default EmployeeView;
