import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormPage";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <li>
        <NavLink className="nav-links" activeClassName="is-active" to="/artists">
            Browse Artists
        </NavLink>
        </li>
      <li>
        <ProfileButton user={sessionUser} />
      </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <LoginFormModal />
        </li>
        <li>
          <NavLink className="nav-links" activeClassName="is-active" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <header className="header">
      <nav className="nav">
        <NavLink exact to="/">
          <img className="logo" alt={""} src={"/images/logo.png"}/>
        </NavLink>
        <ul className="nav-items">
          <li>
          </li>
          {isLoaded && sessionLinks}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
