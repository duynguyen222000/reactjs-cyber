import React, { Component } from "react";

class StateDemo extends Component {
  // state là thược tính có sẵn của thuộc tính react class component giúp định nghĩa những nội dung có khả năng thay đổikhi người dùng thao tác sự kiện
  state = {
    status: false,
  };
  //   setState là phương thức có sẵn của react class component giúp thay đổi giá trị state và render lại giao diện
  //   setState = () => {};
  userLogin = {
    name: "Duy Nguyễn",
    age: 22,
  };
  login = () => {
    // this.state.status = true; Không set giá trị trực tiếp trên state mà phải set thông qua phương thức setState
    let newState = {
      status: true,
    };
    // Gọi phương thức setState => truyền vào state mới
    // setState là phương thức bất đòng bộ
    this.setState(newState);
  };
  renderUserLogin = () => {
    if (this.state.status) {
      return <div className="text-center">{this.userLogin.name}</div>;
    }
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        Login
      </button>
    );
  };
  render() {
    return <div>{this.renderUserLogin()}</div>;
  }
}

export default StateDemo;
