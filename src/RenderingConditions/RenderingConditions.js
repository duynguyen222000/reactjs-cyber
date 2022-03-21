import React, { Component } from "react";

class RenderingConditions extends Component {
  login = true;
  useName = "Nguyễn Đức Duy";
  renderContent = () => {
    if (this.login) {
      return <p> Hello {this.useName}</p>;
    }
    return <button>Đăng Nhập</button>;
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default RenderingConditions;
