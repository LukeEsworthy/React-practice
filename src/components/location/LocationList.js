import React, { useState, useEffect } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = (props) => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocation function to update state
    return LocationManager.getAll().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  const deleteLocation = (id) => {
    LocationManager.delete(id).then(() =>
      LocationManager.getAll().then(setLocations)
    );
  };

  // Finally we use map() to "loop over" the locations array to show a list of location cards
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/locations/new");
          }}
        >
          Add Location
        </button>
      </section>
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            storeLocation={location}
            deleteLocation={deleteLocation}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default LocationList;
