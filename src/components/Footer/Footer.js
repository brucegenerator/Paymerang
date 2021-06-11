import React from "react";

const Footer = (props) => {
  return (
    <footer className="blockquote-footer">
      {props.children}
    </footer>
  );
};

export default Footer;
