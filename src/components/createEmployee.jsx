import { useState } from "react";
import { Link } from "react-router-dom";

function CreateEmployee({ addEmployee }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className=" container my-component mt-4 w-100 vh-100  ">
      <h1
        style={{ textAlign: "center" }}
        className="text-2xl font-bold mb-4 rounded ps-3 pe-3"
      >
        Create Employee
      </h1>

      <div className="w-100 border bg-white shadow px-5 pt-3 pb-5 rounded responsive">
        <div className="mb-5 mt-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="ID"
            value={id}
            className="form-control"
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Department"
            value={role}
            className="form-control"
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <button
          onClick={() => {
            addEmployee(name, id, email, phone, role);
            setName("");
            setId("");
            setEmail("");
            setPhone("");
            setRole("");
          }}
          className="btn btn-success "
        >
          Submit
        </button>
        <Link
          to="/employee-details"
          className="btn btn-primary ms-3  ps-4 pe-4"
        >
          {" "}
          Back
        </Link>
      </div>
    </div>
  );
}

export default CreateEmployee;