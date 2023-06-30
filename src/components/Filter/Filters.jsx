import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ categoryList, setCategoryList }) => {
  const [filters, setFilters] = useState({
    rum: true,
    vodka: true,
    gin: true,
  });

  const onHandleCheck = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const selectedCategories = Object.entries(filters)
      .filter(([_, isChecked]) => isChecked)
      .map(([category]) => category);
    setCategoryList(selectedCategories);
  };

  return (
    <form className="Filters" onSubmit={onHandleSubmit}>
      <label htmlFor="rum">Rum</label>
      <input
        type="checkbox"
        name="rum"
        checked={filters.rum}
        onChange={onHandleCheck}
      />

      <label htmlFor="vodka">Vodka</label>
      <input
        type="checkbox"
        name="vodka"
        checked={filters.vodka}
        onChange={onHandleCheck}
      />

      <label htmlFor="gin">Gin</label>
      <input
        type="checkbox"
        name="gin"
        checked={filters.gin}
        onChange={onHandleCheck}
      />

      <input type="submit" value="Apply" />
    </form>
  );
};

export default Filters;