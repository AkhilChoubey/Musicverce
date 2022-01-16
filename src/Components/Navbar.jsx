import React, { useState } from "react";
import "./navbar.css";
import { GiMusicalNotes } from "react-icons/gi";
import { BsHeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useThemeSwitcher } from "react-css-theme-switcher";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const { switcher, themes, currentTheme } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((previous) => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(e.target[0].value);
  };

  return (
    <>
      <div>
        <ul className="nav-root-container">
          <li className="nav-heading">
            <GiMusicalNotes className="icon-transition" /> Musicverse
          </li>
          <li className="search-input-container">
            <form onSubmit={handleSearch} style={{ height: "100%" }}>
              <input
                name="search_input"
                className="nav-search-input"
                placeholder="Search"
              />
            </form>
          </li>
          <div className="nav-others-container">
            <li title="Favorites">
              <BsHeartFill
                className="icon-transition"
                style={{ fontSize: "1.3rem" }}
              />
            </li>
            <li title="Profile">
              <BsFillPersonFill
                className="icon-transition"
                style={{ fontSize: "1.5rem" }}
              />
            </li>
            <li>
              <DarkModeToggle
                onChange={toggleDarkMode}
                checked={currentTheme === "dark" ? false : true}
                size={60}
              />
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
