import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOulineClose } from "react-icons/ai";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <h2 className={classes.header_content_logo}>navbar</h2>
        <nav className={classes.header_content_nav}>
          <ul>
            <li>
              <a href="/">Page One</a>
            </li>
            <li>
              <a href="/">Page Two</a>
            </li>
            <li>
              <a href="/">Page Three</a>
            </li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header_content_toggle}>
          <BiMenuAltRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
