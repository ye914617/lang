import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FaDog, FaHeart } from "react-icons/fa";
import "./Visitor.css";

const Visitor = () => {
  return (
    <div className="visit">
      <div className="visitcontent">
        <h5>
          <BsPeopleFill />
          瀏覽人數
        </h5>
        <h2 className="visitnumber">7,789</h2>
      </div>
      <div className="visitcontent">
        <h5>
          <FaDog />
          浪子回家
        </h5>
        <h2 className="visitnumber">33</h2>
      </div>
      <div className="visitcontent">
        <h5>
          <FaHeart />
          募款人數
        </h5>
        <h2 className="visitnumber">351</h2>
      </div>
    </div>
  );
};

export default Visitor;
