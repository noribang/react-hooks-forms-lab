import React from "react";


function Filter({ onCategoryChange, onSearchChange, search }) {

  /* PASS VALUE TO ONSEARCHCHAANGE PROP BACK TO SHOPPINGLIST PARENT */
  function handleSearchChange(event) {
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" 
      name="search" 
      placeholder="Search..." 
      /* Search event listener. */
      // onChange={onSearchChange}
      onChange={handleSearchChange}
      /* Search state. */
      value={search} 
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
