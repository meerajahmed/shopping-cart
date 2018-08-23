import React from "react"

const Button = (props) =>
  <button className="btn btn-light" onClick={props.onClickCb}>{props.label}</button>;

export default Button;