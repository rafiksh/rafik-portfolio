import React from "react";
import { Frame } from "framer";

import { ReactComponent as RLogo } from "../../assets/images/r-logo.svg";

import "./loader.css";

const Loader = () => (
  <div className="loader-bg">
    <Frame
      animate={{ rotate: 360 }}
      transition={{ duration: 1.5 }}
      background={"#000"}
      radius={30}
    >
      <RLogo />
    </Frame>
  </div>
);

export { Loader };
