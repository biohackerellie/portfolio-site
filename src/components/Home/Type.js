import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Systems Administrator",
          "Audio Engineer",
          "Front End Developer",
          "Artist",
          "Musician",
          "Nerd"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
