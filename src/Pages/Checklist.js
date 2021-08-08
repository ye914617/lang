import React from "react";
import { useGlobalContext } from "../Global/GlobalContext";
import "./Checklist.css";
import { FaTrash } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Checklist = () => {
  const { totalState, delFromTotal, clearAll } = useGlobalContext();
  const totalPrice = totalState
    .map((item) => {
      return parseFloat(item.price);
    })
    .reduce((acc, cur) => {
      return (acc += cur);
    }, 0);
  return (
    <>
      <h4 className="checklist-title">捐贈清單</h4>
      {totalState.length > 0 ? (
        <div className="checklist-form-container">
          <div className="checklist-form">
            <div className="checklist-container">
              {totalState.map((item) => {
                const { name, price, count, id, path } = item;
                return (
                  <div className="checklist" key={id}>
                    <div className="checklist-info">
                      <img
                        src={path}
                        alt={name}
                        className="checklist-image info-item"
                      />

                      <div className="checklist-item info-item">{name}</div>
                      <div className="checklist-count info-item">{count}</div>
                      <div className="checklist-price info-item">${price}</div>

                      <button
                        className="checklist-btn"
                        onClick={() => delFromTotal(id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {totalState.length > 0 && (
              <div className="checklist-total-container">
                <span className="checklist-total">Total: ${totalPrice}</span>
              </div>
            )}

            {totalState.length > 0 && (
              <button className="checklist-allclear-btn" onClick={clearAll}>
                全部清除
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="no-donate">
          <p>您目前還沒有任何捐贈</p>
          <Link to="/donate">
            <button>
              到物資捐贈頁面
              <CgArrowLongRight className="no-donate-arrow" />
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Checklist;
