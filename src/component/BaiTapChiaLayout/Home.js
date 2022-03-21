import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import HeaderDemo from "./HeaderDemo";
import Navigation from "./Navigation";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <HeaderDemo></HeaderDemo>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Navigation></Navigation>
          </div>
          <div className="col-8">
            <Content></Content>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
