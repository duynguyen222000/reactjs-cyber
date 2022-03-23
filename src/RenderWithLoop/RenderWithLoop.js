import React, { Component } from "react";

class RenderWithLoop extends Component {
  productList = [
    {
      id: 1,
      name: "black-car",
      price: 1000,
      img: "./carbasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "red-car",
      price: 1000,
      img: "./carbasic/products/red-car.jpg",
    },
    {
      id: 3,
      name: "silver-car",
      price: 1000,
      img: "./carbasic/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel-car",
      price: 1000,
      img: "./carbasic/products/steel-car.jpg",
    },
  ];
  renderList = () => {
    return this.productList.map((item, index) => (
      <tr key={index}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {" "}
          <img style={{ width: "100px" }} src={item.img} alt="" />{" "}
        </td>
      </tr>
    ));
    // Loop for
    // for (let i = 0; i < this.productList.length; i++) {
    //   let product = (
    //     <tr key={i}>
    //       <th scope="row">{this.productList[i].id}</th>
    //       <td>{this.productList[i].name}</td>
    //       <td>{this.productList[i].price}</td>
    //       <td>
    //         {" "}
    //         <img
    //           style={{ width: "100px" }}
    //           src={this.productList[i].img}
    //           alt=""
    //         />{" "}
    //       </td>
    //     </tr>
    //   );
    //   arrProduct.push(product);
    // }
  };
  render() {
    return (
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID Car</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

export default RenderWithLoop;
