import React, { CSSProperties } from "react";

const navCss: CSSProperties = {
  background: "black",
  color: "white",
};

export const Header = () => {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>

      <div style={navCss}>Daejeo Camping</div>
    </>
  );
};

export default Header;
