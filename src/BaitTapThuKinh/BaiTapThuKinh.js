import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
import style from "../BaitTapThuKinh/BaiTapThuKinhStyle.module.css";
class BaiTapThuKinh extends Component {
  state = {
    glassesUrl: "./glassesImage/v1.png",
    glassesName: "GUCCI G8850U",
    glassesDesc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
  };
  renderGlassesList = () => {
    return dataGlasses.map((item, index) => {
      return (
        <div
          key={index}
          className="col-2"
          onClick={() => {
            this.setState({
              glassesUrl: item.url,
              glassesName: item.name,
              glassesDesc: item.desc,
            });
          }}
        >
          <img
            style={{ cursor: "pointer" }}
            className="img-fluid"
            src={item.url}
            alt={item.name}
          />
        </div>
      );
    });
  };
  render() {
    const keyFrame = `@keyframes animationGlasses${Date.now()} {
        from {
          transform: translateY(50px) rotate(${Math.random() * 180}deg);
          opacity: 0;
          
        }
        to {
          transform: translateY(0px) rotate(0);
          opacity: .7;
        }
      }`;

    const styleGlass = {
      width: "155px",
      top: "73px",
      left: "193px",
      opacity: ".7",
      animation: `animationGlasses${Date.now()} 1s`,
    };
    const styleDesc = {
      background: "#2e2d2d4f",
      width: "250px",
      left: "145px",
      bottom: "100px",
      textAlign: "left",
      paddingLeft: "10px",
      height: "100px",
    };

    return (
      <div
        style={{
          background:
            "url(./glassesImage/background.jpg) no-repeat center/cover",
          maxWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <style>{keyFrame}</style>
        <div style={{ backgroundColor: "rgba(0,0,0,.7", minHeight: "100vh" }}>
          <h3
            style={{ backgroundColor: "rgba(0,0,0,.3" }}
            className="text-center text-white p-5 "
          >
            Try Glasses App Online
          </h3>
          <div className="container">
            <div className="row text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    style={styleGlass}
                    className="position-absolute "
                    src={this.state.glassesUrl}
                    alt=""
                  />
                  <img
                    style={{ width: "250px" }}
                    className="img-fluid posotion-absolute"
                    src=".\glassesImage\model.jpg"
                    alt=""
                  />
                  <div
                    style={styleDesc}
                    className="position-relative text-white "
                  >
                    <p>Tên Kính:{this.state.glassesName}</p>
                    <p>
                      Mô tả:{" "}
                      {this.state.glassesDesc.length > 50
                        ? this.state.glassesDesc.substring(0, 50) + "..."
                        : this.state.glassesDesc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  className="img-fluid"
                  src=".\glassesImage\model.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-light p-3">
              <div className="row">{this.renderGlassesList()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapThuKinh;
