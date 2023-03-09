import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header-component.style.scss";
//error
// import { ReactComponent as Logo } from "../../assets/crown.svg";

// <Link className="logo-container" to="/">
// <Logo className="logo" />
// </Link>

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/shop">
        shop
      </Link>
      <Link className="option" to="/shop">
        contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
export default Header;
