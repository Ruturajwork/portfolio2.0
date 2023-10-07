import Header from "./Header";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
function HeaderWithFadeEffect() {
  const [showHeader, setShowHeader] = useState(true);

  const handleLinkClick = () => {
    setShowHeader(false); // Hide the header when a link is clicked
    setTimeout(() => {
      setShowHeader(true); // Show the header after a delay to allow fade out effect
    }, 500); // Adjust the delay as needed

    // You can also perform any additional navigation logic here if necessary
  };

  return (
    <Fade direction="down" visible={showHeader}>
      <Header onLinkClick={handleLinkClick} />
    </Fade>
  );
}

export default HeaderWithFadeEffect;
