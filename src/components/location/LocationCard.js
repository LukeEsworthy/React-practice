import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{props.storeLocation.area}</h3>
        <h4>Address:</h4>
        <p>{props.storeLocation.address}</p>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.storeLocation.id)}
        >
          Close Location
        </button>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/locations/${props.storeLocation.id}/edit`)
          }
        >
          Edit
        </button>
        <Link to={`/locations/${props.storeLocation.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
