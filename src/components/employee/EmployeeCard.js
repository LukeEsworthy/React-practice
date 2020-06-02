import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Employee:</h3>
        <h4>{props.employee.name}</h4>
        <p>Title: {props.employee.title}</p>
        <button
          type="button"
          onClick={() => props.deleteEmployee(props.employee.id)}
        >
          FIRE
        </button>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/employees/${props.employee.id}/edit`)
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
