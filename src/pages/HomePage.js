import React, { useState } from 'react';
import './HomePage.css';
import SearchForm from '../components/SearchForm';
import PetList from '../components/PetList';
import { pets, breeds, locations } from '../data/mockData';
import heroImage from '../images/hero.jpeg'; // Import the image

const HomePage = () => {
  const [filteredPets, setFilteredPets] = useState(pets);

  const handleSearch = (searchParams) => {
    const { animalType, breed, location } = searchParams;
    const result = pets.filter(pet => {
      return (
        (!animalType || pet.type === animalType) &&
        (!breed || pet.breed === breed) &&
        (!location || pet.location === location)
      );
    });
    setFilteredPets(result);
  };

  const categorizedPets = {
    dog: filteredPets.filter(pet => pet.type === 'dog'),
    cat: filteredPets.filter(pet => pet.type === 'cat'),
    bird: filteredPets.filter(pet => pet.type === 'bird'),
    other: filteredPets.filter(pet => pet.type === 'other'),
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <img
          src={heroImage} // Use the imported image
          alt="Find Your New Best Friend"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Find Your New Best Friend</h1>
          <p>Browse pets from our network of over 14,500 shelters and rescues.</p>
        </div>
      </section>
      <SearchForm
        onSearch={handleSearch}
        breeds={breeds}
        locations={locations}
      />
      <div className="pet-sections">
        {Object.keys(categorizedPets).map((key) => (
          categorizedPets[key].length > 0 && (
            <section key={key} className="pet-section">
              <h2>{key.charAt(0).toUpperCase() + key.slice(1)}s</h2>
              <PetList pets={categorizedPets[key]} />
            </section>
          )
        ))}
      </div>
    </div>
  );
};

export default HomePage;
