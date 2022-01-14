import React, { useState } from "react";
import "./navbar.css";
import { GiMusicalNotes } from "react-icons/gi";
import { BsHeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import DarkModeToggle from "react-dark-mode-toggle";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(e.target[0].value);
  };

  return (
    <>
      <div>
        <ul className="nav-root-container">
          <li
            style={{ marginTop: "1rem", fontSize: "1.2rem", fontWeight: "600" }}
          >
            <GiMusicalNotes /> Musicverse
          </li>
          <li style={{ width: "40%" }}>
            <form onSubmit={handleSearch} style={{ height: "100%" }}>
              <input
                name="search_input"
                className="nav-search-input"
                placeholder="Search"
              />
            </form>
          </li>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "20%",
              marginTop: "1rem",
            }}
          >
            <li title="Favorites">
              <BsHeartFill style={{ fontSize: "1.3rem" }} />
            </li>
            <li title="Profile">
              <BsFillPersonFill style={{ fontSize: "1.5rem" }} />
            </li>
            <li>
              <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
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
