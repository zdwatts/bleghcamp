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
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink activeClassName="is-active" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-items">
          <li>
            <NavLink activeClassName="is-active" exact to="/">
              Home
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
