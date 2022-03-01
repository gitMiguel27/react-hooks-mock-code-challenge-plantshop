import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(plantsData => {
        setPlants(plantsData);
      });
  }, []);

  function handleNewPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    });

    setPlants([...plants, newPlant]);
  }

  function handleSearch(searchText) {
    setFilterText(searchText);
  }
  const plantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
