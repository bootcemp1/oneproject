import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <div className="place-card">
      <img src={place.image} alt={place.name} className="place-image" />
      <h3>{place.name}</h3>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceCard;
