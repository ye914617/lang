import React from "react";
import { useGlobalContext } from "../Global/GlobalContext";
import "./Adopt.css";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const Adopt = () => {
  const { adoptState, cancelAdopt } = useGlobalContext();
  console.log(adoptState);
  return (
    <div>
      <h4 className="adopt-title">領養專區</h4>
      {adoptState.length === 0 ? (
        <div className="no-adopt">
          <p>您目前還沒有領養浪浪</p>
          <Link to="/cutepets">
            <button>
              去看可愛毛孩
              <CgArrowLongRight className="no-adopt-arrow" />
            </button>
          </Link>
        </div>
      ) : (
        <div className="adopt-info">
          {adoptState.map((item, index) => {
            return (
              <div className="adopt-container" key={item.id}>
                <h5>{index + 1}</h5>
                <div id={item.id} className="adopts">
                  <img src={item.image} alt="Img not provided" />
                  <p>
                    <span className="adopt-dot">
                      <BsDot />
                    </span>
                    類別：
                    {item.kind}
                  </p>
                  <p>
                    <span className="adopt-dot">
                      <BsDot />
                    </span>
                    顏色：{item.colour}
                  </p>
                  <p>
                    <span className="adopt-dot">
                      <BsDot />
                    </span>
                    性別：{item.sex}
                  </p>
                  <button
                    className="adopt-btn"
                    onClick={() => cancelAdopt(item)}
                  >
                    重新考慮
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Adopt;
