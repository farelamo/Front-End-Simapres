import React from "react";
import { string } from "prop-types";
import "./status.scss";

const bgColor = {
  primary: "rgba(0, 171, 189, 0.2)",
  primaryLabel: "rgba(0, 171, 189, 1)",
  danger: "rgba(225, 87, 86, 0.2)",
  dangerLabel: "rgba(225, 87, 86, 1)",
};

function TableStatusComponent(props) {
  const { status, style, color, toggle, leftIcon, rightIcon } = props;
  return (
    <div
      style={{
        backgroundColor: bgColor[color],
        color: bgColor[color + "Label"],
        ...style,
      }}
      className="status"
      onClick={toggle}
    >
      {leftIcon && (
        <span className="material-icons-round left-icon">{leftIcon}</span>
      )}   

      <span>{status}</span>

      {rightIcon && (
        <span className="material-icons-round right-icon">{rightIcon}</span>
      )}
    </div>
  );
}

TableStatusComponent.propTypes = {
  name: string,
};

export default TableStatusComponent;
