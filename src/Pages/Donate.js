import React from "react";
import DonateList from "../components/DonateComponents/DonateMaterial/DonateList";
import { FaShoppingBasket } from "react-icons/fa";
import "./Donate.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Global/GlobalContext";

const Donate = () => {
  const { addToTotal } = useGlobalContext();
  return (
    <div>
      <DonateList />

      <Link to="/checklist">
        <button className="donate-bill" onClick={addToTotal}>
          <FaShoppingBasket className="donate-bill-icon" />
        </button>
      </Link>
    </div>
  );
};

export default Donate;
