import React, { Component } from "react";
import BodyLayout from "./BodyLayout";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <BodyLayout></BodyLayout>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default BaiTapThucHanhLayout;
