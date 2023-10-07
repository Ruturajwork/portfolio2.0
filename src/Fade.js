import React, { useState, useEffect } from "react";

function Fade({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Set visible to true to trigger the fade-in effect
  }, []);

  return <div className={`fade ${visible ? "show" : ""}`}>{children}</div>;
}

export default Fade;
