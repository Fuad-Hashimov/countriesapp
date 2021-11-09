import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(true);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setmenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <h2 className={classes.header_content_logo}>navbar</h2>
        <nav
          className={`${classes.header_content_nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
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
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
