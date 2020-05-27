import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="content">
        <h3>Owned by:</h3>
        <h4>{props.owner.name}</h4>
        <p>Phone number:</p>
        <p>{props.owner.phoneNumber}</p>
      </div>
    </div>
  );
};

export default OwnerCard;
