import React from "react";
import Pets from "../components/PetComponents/Pets/Pets";
import SearchBar from "../components/PetComponents/SearchBar/SearchBar";

const PetPage = () => {
  return (
    <>
      <SearchBar />
      <Pets />
    </>
  );
};

export default PetPage;
