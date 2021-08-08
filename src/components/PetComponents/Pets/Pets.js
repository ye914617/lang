import React from "react";
import "./Pets.css";
import { BsDot } from "react-icons/bs";
import { useGlobalContext } from "../../../Global/GlobalContext";

const Pets = () => {
  //new
  const { petState, adopt } = useGlobalContext();
  const { petData, loading } = petState;

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
              {petData.map((item, index) => {
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
