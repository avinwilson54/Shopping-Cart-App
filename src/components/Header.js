import React, { useState } from "react";
import $ from "jquery";
import products from "../products";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import Table from "./Table";

export default function Header(props) {
  $(document).ready(function () {
    $("#filter").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });

  function onFilter(e) {
    props.filterValue(e.target.value);
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <form class="d-flex">
              <select name="Cloth" class="custom-select mr-2">
                <option selected>Hoodies</option>
              </select>

              {/* <Filter /> */}

              <select
                id="sizeOption"
                name="size"
                onChange={onFilter}
                className="custom-select mr-2"
              >
                <option selected>Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </form>
            <li>
              <a class="btn" href="/">
                <i class="fa fa-solid fa-rotate-left mr-2"></i>
                Reset
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              id="filter"
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <Link to="/" type="button" class="btn btn-info">
          Add To Cart
        </Link>
      </nav>
    </>
  );
}
