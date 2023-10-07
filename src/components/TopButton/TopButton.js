import React, { useEffect } from "react";
import "./TopButton.css";
import { Image } from "react-bootstrap";
import arrowUp from "../../assets/up-arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopButton() {
  // function GoUpEvent() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 30 ||
  //     document.documentElement.scrollTop > 30
  //   ) {
  //     document.getElementById("topButton").style.visibility = "visible";
  //   } else {
  //     document.getElementById("topButton").style.visibility = "hidden";
  //   }
  // }

  // window.onscroll = function () {
  //   scrollFunction();
  // };
  useEffect(() => {
    function scrollFunction() {
      const topButton = document.getElementById("topButton");
      if (topButton) {
        if (
          document.body.scrollTop > 30 ||
          document.documentElement.scrollTop > 30
        ) {
          topButton.style.visibility = "visible";
        } else {
          topButton.style.visibility = "hidden";
        }
      }
    }

    window.onscroll = function () {
      scrollFunction();
    };

    return () => {
      window.onscroll = null; // Remove the event listener when the component is unmounted
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    // arrow.style.color = color;
    // arrow.style.backgroundColor = bgColor;
    arrow.style.color = "#EDF9FE";
    arrow.style.backgroundColor = "#001C55";
  };

  return (
    <div
      // onClick={GoUpEvent}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      id="topButton"
      style={{
        color: "#EDF9FE",
        backgroundColor: "#001C55",
        border: `solid 1px ${"#001C55"}`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter("#001C55", "#EDF9FE")}
      onMouseLeave={() => onMouseLeave("#EDF9FE", "#001C55")}
    >
      {/* <Image id="arrow" src={arrowUp} aria-hidden="true" />
      <i class="fas fa-arrow-up" id="arrow" aria-hidden="true" /> */}
      <FontAwesomeIcon icon="arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
