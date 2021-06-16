import React from "react";
import Menu from "antd/lib/menu";

import "./menu.css";

const StyledMenu = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>;
};
export { StyledMenu };
