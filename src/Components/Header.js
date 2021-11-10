import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { SiGoogleearth } from "react-icons/si";
import classes from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";



const Header = () => {
  const history = useHistory();
  const [menuOpen, setmenuOpen] = useState(false);
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

  const ctaClickHandler = () => {
    history.push("/page-cta");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <Link to="/" className={classes.header_content_logo}>
          <SiGoogleearth />
        </Link>
        <nav
          className={`${classes.header_content_nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link  to="/page-one">
                Page One
              </Link>
            </li>
            <li>
              <Link  to="/page-two">
                Page Two
              </Link>
            </li>
            <li>
              <Link  to="/page-three">
                Page Three
              </Link>
            </li>
          </ul>
          <button onClick={menuToggleHandler} onClick={ctaClickHandler}>
            CTA Page
          </button>
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
