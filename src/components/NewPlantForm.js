import React from "react";
import {v4 as uuid} from 'uuid';

function NewPlantForm({ onNewPlant }) {

  function formSubmit(event) {
    event.preventDefault();

    const newPlant = {
      id: uuid(),
      name: event.target['name'].value,
      image: event.target['image'].value,
      price: event.target['price'].value,
    };

    onNewPlant(newPlant);
    event.reset();
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={formSubmit}>
        <input type="text" name="name" placeholder="Plant name"/>
        <input type="text" name="image" placeholder="Image URL"/>
        <input type="number" name="price" step="0.01" placeholder="Price"/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
