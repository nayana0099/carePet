import React, { useState, useEffect } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch, breeds, locations }) => {
  const [animalType, setAnimalType] = useState('');
  const [breedOptions, setBreedOptions] = useState([]);
  const [breed, setBreed] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (animalType) {
      setBreedOptions(breeds[animalType]);
    } else {
      setBreedOptions([]);
    }
  }, [animalType, breeds]);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch({ animalType, breed, location });
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="form-group">
        <label htmlFor="animalType">Animal Type</label>
        <select
          id="animalType"
          value={animalType}
          onChange={(e) => setAnimalType(e.target.value)}
        >
          <option value="">Select Animal Type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          disabled={!breedOptions.length}
        >
          <option value="">Select Breed</option>
          {breedOptions.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
