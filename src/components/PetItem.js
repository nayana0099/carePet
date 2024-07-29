// src/components/PetItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PetItem.css';

const PetItem = ({ pet }) => {
  return (
    <div className="pet-item">
      <img src={pet.image} alt={pet.name} className="pet-item-image" />
      <h3>{pet.name}</h3>
      <p>{pet.description}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <p>Location: {pet.location}</p>
      <Link to={`/pets/${pet.id}`}>View Details</Link>
    </div>
  );
};

export default PetItem;
