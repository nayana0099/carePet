import petsData from '../data/mockData';

export const fetchPets = async () => {
  return petsData.pets;
};

export const fetchPetById = async (id) => {
  return petsData.pets.find(pet => pet.id === id);
};

export const fetchBreeds = async () => {
  return petsData.breeds;
};

export const fetchLocations = async () => {
  return petsData.locations;
};
