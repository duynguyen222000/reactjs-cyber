import React, { Component } from "react";
import BannerLayout from "./BannerLayout";
import ItemLayout from "./ItemLayout";

class BodyLayout extends Component {
  render() {
    return (
      <div className="container px-lg-5">
        <BannerLayout></BannerLayout>
        <div className="row">
          <div className="col-4 mb-5 ">
            <ItemLayout></ItemLayout>
          </div>
          <div className="col-4 mb-5 ">
            <ItemLayout></ItemLayout>
          </div>
          <div className="col-4 mb-5 ">
            <ItemLayout></ItemLayout>
          </div>
          <div className="col-4 mb-5 ">
            <ItemLayout></ItemLayout>
          </div>
          <div className="col-4 mb-5 ">
            <ItemLayout></ItemLayout>
          </div>
          <div className="col-4 mb-5 ">
            <ItemLayout></ItemLayout>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyLayout;
