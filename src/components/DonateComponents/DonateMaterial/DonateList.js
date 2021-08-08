import React from "react";
import "./DonateList.css";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";
import { useGlobalContext } from "../../../Global/GlobalContext";

const DonateList = () => {
  const { increaseDonate, donateState, decreaseDonate, addToChecklist } =
    useGlobalContext();
  const { donateDatas } = donateState;
  return (
    <div className="donate-container">
      {donateDatas.map((item) => {
        const { name, count, price, path, id } = item;

        return (
          <div className="donate-list" key={id}>
            <img src={path} alt={name} className="donate-image" />
            <div className="donate-info">
              <div className="donate-item">{name}</div>
              <div className="donate-price">單價:${price}</div>
              <div className="donate-count">
                <button
                  className="donate-count-btn"
                  onClick={() => decreaseDonate(item)}
                >
                  <RiArrowLeftSFill />
                </button>
                {count}
                <button
                  className="donate-count-btn"
                  onClick={() => increaseDonate(item)}
                >
                  <RiArrowRightSFill />
                </button>
              </div>
            </div>
            <button className="donate-btn" onClick={() => addToChecklist(item)}>
              <RiAddFill />
              捐贈
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DonateList;
