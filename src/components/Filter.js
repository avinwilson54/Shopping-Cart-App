import React from "react";

export default function Filter(props) {
  function onFilter(e) {
    props.filterValue(e.target.value);
  }

  return (
    <div className="size-filter">
      <select
        id="sizeOption"
        onChange={onFilter}
        name="size"
        className="custom-select mr-2"
      >
        <option selected>Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </div>
  );
}
