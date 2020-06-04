import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="content">
        <h3>Owned by: {props.owner.name}</h3>
        <p>Phone number: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>
          Remove
        </button>
        <button
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;
