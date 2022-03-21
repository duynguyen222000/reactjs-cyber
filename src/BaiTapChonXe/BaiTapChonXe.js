import React, { Component } from "react";

class BaiTapChonXe extends Component {
  state = {
    imgSrc: require("../assets/products/black-car.jpg"),
  };
  renderCar = (imgNewProd) => {
    // tạo một state mới
    // set lại state và render lại UI
    this.setState({ imgSrc: imgNewProd });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              className="img-fluid"
              src={this.state.imgSrc}
              alt="black_car"
            />
          </div>
          <div className="col-5">
            <div className="card ">
              <div className="card-header">Exterior Color</div>
              <div className="card-body">
                <div
                  className="row border border-light pt-2 pb-2  "
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.renderCar(require("../assets/products/black-car.jpg"));
                  }}
                >
                  <img
                    className="col-3 img-fluid"
                    src={require("../assets/icons/icon-black.jpg")}
                    alt=""
                  />
                  <div className="col-9">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div
                  className="row border border-light pt-2 pb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.renderCar(require("../assets/products/steel-car.jpg"));
                  }}
                >
                  <img
                    className="col-3 img-fluid"
                    src={require("../assets/icons/icon-steel.jpg")}
                    alt=""
                  />
                  <div className="col-9">
                    <h3>Modern Steel</h3>
                    <p>Metallic</p>
                  </div>
                </div>
                <div
                  className="row border border-light pt-2 pb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.renderCar(
                      require("../assets/products/silver-car.jpg")
                    );
                  }}
                >
                  <img
                    className="col-3 img-fluid"
                    src={require("../assets/icons/icon-silver.jpg")}
                    alt=""
                  />
                  <div className="col-9">
                    <h3>Lunar Silver</h3>
                    <p>Metallic</p>
                  </div>
                </div>
                <div
                  className="row border border-light pt-2 pb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.renderCar(require("../assets/products/red-car.jpg"));
                  }}
                >
                  <img
                    className="col-3 img-fluid"
                    src={require("../assets/icons/icon-red.jpg")}
                    alt=""
                  />
                  <div className="col-9">
                    <h3>Rallye Red</h3>
                    <p>Metallic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapChonXe;
