function WelcomePage({ employees }) {
    const totalEmployees = employees.length;
  
    console.log("Employees Data:", employees);
  
    const totalLeaveApplications = employees.reduce(
      (total, emp) => total + emp.leaveHistory.length,
      0
    );
  
    return (
      <div className="p-4 text-center ">
        <h1 className="text-3xl font-bold mt-4 bg-light text-info mb-4">
          Welcome to Employee DashBoard
        </h1>
        <h4 className="text-lg mt-5">
          Manage employee details and leave requests efficiently
        </h4>
  
        <div className=" row mt-5">
          <div className="col">
            <div className="p-5 m-5 bg-gray-100 rounded shadow">
              <div className="display-5">👥 </div>
              <h3 className="text-xl font-semibold mt-3">Total Employees</h3>
              <p className="text-lg- font-bold ">{totalEmployees}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-5 m-5 bg-gray-100 rounded shadow">
              <div className="display-5">📅</div>
              <h3 className="text-xl font-semibold mt-3"> Leave Applications</h3>
              <p className="text-lg font-bold">{totalLeaveApplications}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default WelcomePage;