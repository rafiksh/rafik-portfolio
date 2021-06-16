import React from "react";
import Particles from "react-particles-js";

import particlesConfig from "../config/particles";

const HeaderComponent = () => {
  return (
    <>
      <Particles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
    </>
  );
};

export { HeaderComponent };
