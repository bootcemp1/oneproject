
import React, { useState } from "react";
import { places } from "./PlacesData";
import PlaceCard from "./PlaceCard";
import "./TouristPlaces.css";

const categories = ["Barchasi", "Ziyoratgoh", "Dam olish", "Ko‘ngilochar"];

const TouristPlaces = () => {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  const filteredPlaces =
    selectedCategory === "Barchasi"
      ? places
      : places.filter(place => place.category === selectedCategory);

  return (
    <div className="places-container">
      <h1>Namangandagi Turistik Manzillar</h1>

      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="places-list">
        {filteredPlaces.map(place => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default TouristPlaces;
