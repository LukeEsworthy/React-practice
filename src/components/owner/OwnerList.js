import React, { useState, useEffect } from "react";
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

const OwnerList = (props) => {
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    // After the data comes back from the API, we
    //  use the setOwners function to update state
    return OwnerManager.getAll().then((ownersFromAPI) => {
      setOwners(ownersFromAPI);
    });
  };

  // got the owners from the API on the component's first render
  useEffect(() => {
    getOwners();
  }, []);

  const deleteOwner = (id) => {
    OwnerManager.delete(id).then(() => OwnerManager.getAll().then(setOwners));
  };

  // Finally we use map() to "loop over" the owners array to show a list of owner cards
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/owners/new");
          }}
        >
          Add Owner
        </button>
      </section>
      <div className="container-cards">
        {owners.map((owner) => (
          <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner} />
        ))}
      </div>
    </>
  );
};
export default OwnerList;
