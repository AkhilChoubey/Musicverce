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
            backgroundColor: "#030303",
          }}
        >
          <li>Musicverse</li>
          <li>
            <input
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
              }}
              placeholder="Search"
            />{" "}
          </li>
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
