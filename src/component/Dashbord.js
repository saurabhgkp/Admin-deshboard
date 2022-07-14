import React from "react";
import MainPage from "./dashbord/MainPage";
import Posts from "./dashbord/Posts";
import Users from "./dashbord/Users";
import { Routes, Route, NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import AddNewPosts from "./dashbord/AddNewPosts";
import LogInPage from "./dashbord/LogInPage";
const Dashbord = () => {
  const Logout = () => {
    window.localStorage.setItem("token", "");
    window.location.reload();
  };
  return (
    <>
      <div className="row">
        <NavLink to="/LogInPage" btn onClick={Logout}>
          Login
        </NavLink>

        <div className="col-2 ">
          <SideBar />
        </div>

        <div className="col-10">
          {" "}
          <div className="">
            <Routes>
              <Route exact path="/" element={<MainPage />}>
                {" "}
              </Route>
              <Route exact path="/posts" element={<Posts />}>
                {"post "}
              </Route>
              <Route exact path="/users" element={<Users />}>
                {"users "}
              </Route>
              <Route exact path="/addNewPosts" element={<AddNewPosts />}>
                {"users "}
              </Route>
              <Route exact path="*" element={<LogInPage />}>
                {"users "}
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
