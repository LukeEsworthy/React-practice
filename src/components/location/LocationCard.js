import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{props.location.area}</h3>
        <p>Address:</p>
        <p>{props.location.address}</p>
      </div>
    </div>
  );
};

export default LocationCard;
