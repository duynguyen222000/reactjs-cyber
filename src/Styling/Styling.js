import React, { Component } from "react";
import "./Styling.css";
import style from "./Styling.module.css";
class Styling extends Component {
  render() {
    return (
      <div>
        <p className="txt">Hello world!!!</p>
        <p className={style.txtStyle}>Hello Duy</p>
      </div>
    );
  }
}

export default Styling;
