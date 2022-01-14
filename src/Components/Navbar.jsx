import React from "react";
import { GiMusicalNotes } from "react-icons/gi";
const Navbar = () => {
  const handleSearch = (e) => {
    e.preventDefault();

    console.log(e.target[0].value);
  };

  return (
    <>
      <div>
        <ul
          style={{
            display: "flex",
            textDecoration: "none",
            listStyleType: "none",
            justifyContent: "space-between",
            backgroundColor: "#030303",
            margin: "0",
            paddingBottom: "0.8rem",
            height: "3.5rem",
            color: "white",
          }}
        >
          <li style={{ marginTop: "1rem" }}>
            <GiMusicalNotes /> Musicverse
          </li>
          <li style={{ width: "40%" }}>
            <form onSubmit={handleSearch} style={{ height: "100%" }}>
              <input
                name="search_input"
                style={{
                  backgroundColor: "#313131",
                  color: "white",
                  height: "100%",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontSmoothing: "antialiased",
                  border: "none",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  marginTop: "0.35rem",
                  width: "100%",
                }}
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
            <li>Love</li>
            <li>Profile</li>
            <li>thmode</li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
