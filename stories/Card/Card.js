import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";

import "./Card.css";
import classNames from "classnames";

  export const Card = ({
   children = "I am a Card",
    color  = "primary", 
    size = "sm"
   }) => {
  return <div className={classNames("card",{   
    [`color-${color}`]: color,
    [`size-${size}`]: size,
  })}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
};

export default Card;
