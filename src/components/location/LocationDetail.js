import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocation] = useState({ area: "", address: "" });

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        area: location.area,
        address: location.address,
      });
    });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{location.area}</span>
        </h3>
        <p>Breed: {location.address}</p>
      </div>
    </div>
  );
};

export default LocationDetail;
