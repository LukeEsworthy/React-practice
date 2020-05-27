import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Employee:</h3>
        <h4>{props.employee.name}</h4>
        <p>Title: {props.employee.title}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
