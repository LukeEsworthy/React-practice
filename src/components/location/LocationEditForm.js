import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

const LocationEditForm = (props) => {
  const [location, setLocations] = useState({ area: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocations(stateToChange);
  };

  const updateExistingLocation = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locationId,
      area: location.area,
      address: location.address,
    };

    LocationManager.update(editedLocation).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    LocationManager.get(props.match.params.locationId).then((location) => {
      setLocations(location);
      setIsLoading(false);
    });
  }, [props.match.params.locationId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="area"
              value={location.area}
            />
            <label htmlFor="area">Location area</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={location.address}
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationEditForm;
