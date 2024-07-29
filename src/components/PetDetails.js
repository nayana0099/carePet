import React from 'react';
import PropTypes from 'prop-types';


const PetDetails = ({ pet }) => {
  return (
    <div className="pet-details">
      <img src={pet.image} alt={pet.name} />
      <h1>{pet.name}</h1>
      <p>{pet.description}</p>
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breed}</p>
    </div>
  );
};

PetDetails.propTypes = {
  pet: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }).isRequired,
};

export default PetDetails;
