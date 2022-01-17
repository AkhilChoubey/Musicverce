import React, { useState } from "react";
import "./navbar.css";
import { GiMusicalNotes } from "react-icons/gi";
import { BsHeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useThemeSwitcher } from "react-css-theme-switcher";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const { switcher, themes, currentTheme } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [inputClear, setInputClear] = useState(false);
  const [crossBtn, setCrossBtn] = useState(false);

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

  const handleChange = () => {
    setCrossBtn(true);
  };

  return (
    <>
      <div>
        <ul className="nav-root-container">
          <li className="nav-heading">
            <GiMusicalNotes className="icon-transition" /> Musicverse
          </li>
          <li className="search-input-container">
            <form
              onSubmit={handleSearch}
              // onClick={(e) => {
              //   if (inputClear) {
              //     e.target.value = null;
              //     console.log(e);
              //     setInputClear(false);
              //   }
              //   // console.log(e.target.value);
              // }}
              style={{ height: "100%", display: "flex" }}
            >
              <input
                name="search_input"
                className="nav-search-input"
                placeholder="Search"
                onChange={handleChange}
              />
              {crossBtn && (
                <span
                  style={{ marginLeft: "1%" }}
                  onClick={(e) => {
                    setCrossBtn(false);
                    setInputClear(true);
                    console.log(e.target);
                  }}
                >
                  <IoMdClose
                    // className="nav-heading"
                    style={{
                      fontWeight: 900,
                      fontSize: "2rem",
                      marginTop: "0.8rem",
                    }}
                  />
                </span>
              )}
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
