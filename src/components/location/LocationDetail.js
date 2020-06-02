import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocations] = useState({ area: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId).then((location) => {
      setLocations({
        area: location.area,
        address: location.address,
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in LocationDetail and re-direct to the location list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{location.area}</span>
        </h3>
        <p>Breed: {location.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;
