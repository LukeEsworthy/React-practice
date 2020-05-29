import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{props.location.area}</h3>
        <p>Address:</p>
        <p>{props.location.address}</p>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.location.id)}
        >
          Close Location
        </button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
