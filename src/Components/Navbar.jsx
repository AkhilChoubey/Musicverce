import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <ul
          style={{
            display: "flex",
            textDecoration: "none",
            listStyleType: "none",
            justifyContent: "space-between",
          }}
        >
          <li>Musicverse</li>
          <li>Search</li>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "20%",
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
