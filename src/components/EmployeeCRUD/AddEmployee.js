import React, { useState } from "react";

export default function AddEmployee({ addEmp }) {
  const [employeeID, setEmployeeID] = useState(201);
  const [employeeName, setEmployeeName] = useState("rajesh");
  const [employeeSalary, setEmployeeSalary] = useState(100000);

  const changeHandler = (e) => {
    if (e.target.name === "eID") {
      setEmployeeID(e.target.value);
    } else if (e.target.name === "eName") {
      setEmployeeName(e.target.value);
    } else {
      setEmployeeSalary(e.target.value);
    }
  };

  return (
    <>
      <h4>AddEmployee</h4>
      <div className="border p-2">
        <div>
          Eid: <input className="m-2"
          name="eID"
          placeholder="Enter Employee ID"
          onChange={changeHandler}/>
        </div>
        <div
          
        >
          Name <input  className="m-2"
          name="eName"
          placeholder="Enter Employee Name"
          onChange={changeHandler}/>
        </div>
        <div
         
        >
          Salary <input   className="m-2"
          name="eSalary"
          placeholder="Enter Employee Salary"
          onChange={changeHandler}/>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            let emp = {
              eId: employeeID,
              name: employeeName,
              sal: employeeSalary,
            };
            addEmp(emp);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
