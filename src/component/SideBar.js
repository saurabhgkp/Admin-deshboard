import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="list-group m-2 mt-4">
        <NavLink to="/" className="list-group-item">
          Dashbord
        </NavLink>
        <NavLink to="/users" className="list-group-item">
          Users
        </NavLink>
        <NavLink to="/posts" className="list-group-item">
          Posts
        </NavLink>
        
      </div>
    </>
  );
};

export default SideBar;
