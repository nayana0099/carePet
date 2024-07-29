// src/components/PetList.js
import React from 'react';
import PetItem from './PetItem';
import './PetList.css';

const PetList = ({ pets }) => {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;
