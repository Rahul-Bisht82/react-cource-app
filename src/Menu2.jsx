import React from "react";
import { NavLink } from "react-router-dom";
const Menu2 = () => {
  return (
    <>
      <div className="list-group nav-fill mx-3 d-block d-md-none ">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <NavLink
              exact
              to="/"
              className="list-group-item list-group-item-action"
            >
              <i class="fas fa-user mr-1 "></i>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              to="/addcources"
              className="list-group-item list-group-item-action"
            >
              <i class="fas fa-user-plus"></i>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              to="/allcource"
              className="list-group-item list-group-item-action"
            >
              <i class="fas fa-address-book"></i>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              to="/about"
              className="list-group-item list-group-item-action"
            >
              <i class="fas fa-address-card"></i>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              to="/contact"
              className="list-group-item list-group-item-action"
            >
              <i class="fas fa-id-card-alt"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu2;
