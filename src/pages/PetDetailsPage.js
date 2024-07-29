// src/pages/PetDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { pets } from '../data/mockData';
import './PetDetailsPage.css';

const PetDetailsPage = () => {
  const { id } = useParams();
  const pet = pets.find(p => p.id === id);

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="pet-details-page">
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Location:</strong> {pet.location}</p>
    </div>
  );
};

export default PetDetailsPage;
