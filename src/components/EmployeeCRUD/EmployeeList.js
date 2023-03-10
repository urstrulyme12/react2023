import React from "react";

export default function ListEmployee({ employees,deleteEmp }) {
  return (
    <>
      <h4> Employee Table</h4>
      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>Eid</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, ind) => {
            return (
              <tr key={ind}>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
                <td>
                    <button onClick={()=>deleteEmp(emp.eId)} className="btn btn-danger">Del</button>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
