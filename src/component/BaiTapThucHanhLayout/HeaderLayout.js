import React, { Component } from "react";

class HeaderLayout extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo Company
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav ml-auto">
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
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderLayout;
