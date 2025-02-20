import React from "react";

/* PASS IN PROPS FROM PARENT SHOPPINGLIST. */
function Filter({ onCategoryChange, onSearchChange, search }) {
  /* EVENT LISTENER. CALL SEARCH SET STATE. */
  function handleSearchChange(event) {
    // CALL SEARCH SET STATE IN PARENT.
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..." 
      /* Search event listener. */
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
