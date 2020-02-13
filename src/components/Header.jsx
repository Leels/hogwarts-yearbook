import React from "react";
import './Header.css';
import './fonts/Griffy-Regular.ttf';

function Header(){
  var headerStyles = {
    backgroundImage: "url('Moon.jpg')",
        height: "500px",
        backgroundAttachment: "fixed",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        padding: "32px 0px",
        marginBottom: "32px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "#ffdb4d",
        textAlign: "center"
      }
  return (
    <div style={headerStyles}>
      <h1>Hogwarts</h1>
      <h2>class of '98</h2>
    </div>
  );
}

export default Header;
