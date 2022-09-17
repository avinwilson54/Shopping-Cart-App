import React, { useState } from "react";
import products from "../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

export default function Table(props) {
  const tableData = products.map((item) => {
    return (
      <tr id="tableRow" className="">
        <td>
          <img className="hoodie-img" src={item.img} alt="hoodie-img"></img>
        </td>
        <td>{item.name}</td>
        <td>{item.color}</td>
        <td className="text-green">
          <FontAwesomeIcon icon={faFaceSmile} />
          <span className="mx-1"></span>
          {item.stock}
        </td>
        <td>${item.price}</td>
        <td className="d-flex align-items-center">
          <div className="box text-center bordered bg-light mr-2">1</div>
          <button id="buyBtn" type="button" className="btn btn-dark mr-2">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <input id="check" type="checkbox"></input>
        </td>
      </tr>
    );
  });

  const [data, setData] = useState(tableData);
  const [value, updateValue] = useState(tableData);

  return (
    <>
      <table className="table table-hover">
        <thead className="bg-light">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Color</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody id="myTable">{data}</tbody>
      </table>
    </>
  );
}
