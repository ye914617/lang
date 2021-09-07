import React, { useState } from "react";
import "./Pets.css";
import { BsDot } from "react-icons/bs";
import { useGlobalContext } from "../../../Global/GlobalContext";

const Pets = () => {
  //new
  const { petState, adopt } = useGlobalContext();
  const { petData, loading } = petState;

  //For infinite scroll
  const petToShow = petData;
  const [numOfPetToShow, setNumOfPetToShow] = useState(4);

  const loadImage = () => {
    if (numOfPetToShow < petToShow.length) {
      setNumOfPetToShow((prev) => prev + 1);
    }
  };

  const handleScroll = (event) => {
    //可以改善成scroll動作結束才算一次scroll
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      loadImage();
    }
  };

  window.addEventListener("scroll", handleScroll);
  //For infinite scroll

  return (
    <div>
      {loading ? (
        <>
          <h5 className="search-not-found">Loading...</h5>
        </>
      ) : (
        <>
          {petData.length > 0 ? (
            <div className="pet-info">
              {petToShow.slice(0, numOfPetToShow).map((item, index) => {
                return (
                  <div className="pet-container" key={item.animal_id}>
                    <h5>{index + 1}</h5>
                    <div id={item.animal_id} className="pets">
                      <img
                        src={item.album_file}
                        alt="Sorry, no img provided."
                      />
                      <p>
                        <span className="pet-dot">
                          <BsDot />
                        </span>
                        類別：
                        {item.animal_kind}
                      </p>
                      <p>
                        <span className="pet-dot">
                          <BsDot />
                        </span>
                        顏色：{item.animal_colour}
                      </p>
                      <p>
                        <span className="pet-dot">
                          <BsDot />
                        </span>
                        性別：{item.animal_sex}
                      </p>
                      <button className="pet-btn" onClick={() => adopt(item)}>
                        我要領養
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {" "}
              {/*If nothing match search query*/}
              <h5 className="search-not-found">Nothing matched your search.</h5>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Pets;
