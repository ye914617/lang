import React from "react";
import "./Menu.css";
import data from "./MenuData";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../Global/GlobalContext";

const Menu = () => {
  const { menuState, showMenubar } = useGlobalContext();
  const { showMenu } = menuState;

  return (
    <aside className={showMenu ? "menu active" : "menu"}>
      <ul className="navbar-link-container">
        {data.map((item, index) => {
          return (
            <li className="navbar-link" key={index}>
              <NavLink
                exact
                activeClassName="navlink-active"
                to={item.path}
                onClick={showMenubar}
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button className="close-btn" onClick={showMenubar}>
        <AiOutlineClose className="close-logo" />
      </button>
    </aside>
  );
};

export default Menu;
