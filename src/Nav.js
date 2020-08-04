import React, { useState, useEffect } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://rdmagazine.files.wordpress.com/2018/10/netflix-logo.jpg"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
      <ul className="tabbed-primary-navigation">
        <li className="navigation-tab">
          <a active="true" href="#Home">
            Home
          </a>
        </li>
        <li className="navigation-tab">
          <a href="#TV Shows">TV Shows</a>
        </li>
        <li className="navigation-tab">
          <a href="#Movies">Movies</a>
        </li>
        <li className="navigation-tab">
          <a href="#Latest">Latest</a>
        </li>
        <li className="navigation-tab">
          <a href="#My List">My List</a>
        </li>
      </ul>
      <ul className="icon">
        <li className="search_icon">
          <SearchIcon />
        </li>
        <li className="gift_icon">
          <CardGiftcardIcon />
        </li>
        <li className="notification_icon">
          <NotificationsNoneIcon />
        </li>
        <li className="arrow_icon">
          <ArrowDropDownIcon />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
