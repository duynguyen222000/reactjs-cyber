import React, { Component } from "react";
import DataFilms from "../Data/DataFilms.json";
class BaiTapRenderFilms extends Component {
  state = {
    filmName: "",
  };

  renderFilms = () => {
    return DataFilms.map((film, index) =>
      film.tenPhim.toLowerCase().indexOf(this.state.filmName.toLowerCase()) >
      -1 ? (
        <div key={index} className="col-md-2">
          <div
            className="card "
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <img
              style={{ minHeight: "250px", objectFit: "cover" }}
              className="card-img-top"
              src={film.hinhAnh}
              alt={film.tenPhim}
            />
            <div className="card-body">
              <h5
                style={{
                  height: "50px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="card-title"
              >
                {film.tenPhim}
              </h5>
              <p className="card-text">
                {film.moTa.length > 80 ? (
                  <p>{film.moTa.substring(0, 80)}...</p>
                ) : (
                  film.moTa
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )
    );
  };
  render() {
    return (
      <div
        style={{
          maxWidth: "100vw",
          minHeight: "100vh",
          background: "url(./background/avanger.jpg) no-repeat center/cover",
        }}
      >
        <nav className="navbar navbar-expand-sm navbar-dark ">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "black", background: "white" }}
          >
            Bars
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                onChange={(e) => this.setState({ filmName: e.target.value })}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="container">
          <div className="row">{this.renderFilms()}</div>
        </div>
      </div>
    );
  }
}

export default BaiTapRenderFilms;
