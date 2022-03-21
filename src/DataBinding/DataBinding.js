import React, { Component } from "react";

class DataBinding extends Component {
  // tạo 1 thuộc tính, truy xuất đến thuộc tính đối tượng dùng từ khóa THIS
  name = "Nguyễn Đức Duy";
  //   thuộc tính object
  student = {
    name: "Nguyễn Đức Duy",
    age: 20,
  };
  render() {
    return (
      <div>
        <h1>{this.name}</h1>
      </div>
    );
  }
}

export default DataBinding;
