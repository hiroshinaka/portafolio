import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width <= 1200) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    // initialize once
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar--img" style={{ transform: `scale(${windowWidth <= 500 ? 0.5 : 1})` }}>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <button
        type="button"
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
        aria-controls="primary-navigation"
        aria-expanded={navActive}
        aria-label={navActive ? "Close menu" : "Open menu"}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      <div id="primary-navigation" className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
              tabIndex={0}
            >
              Home
            </Link>
          </li>
          
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
              tabIndex={0}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MySkills"
              className="navbar--content"
              tabIndex={0}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Timeline"
              className="navbar--content"
              tabIndex={0}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
              tabIndex={0}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
        tabIndex={0}
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;