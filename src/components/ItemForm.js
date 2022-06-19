import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// function ItemForm(props) {
/* PASS IN ITEMS STATE AND SET STATE FROM SHOPPINGLIST. */  
function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

function handleCategory(event) {
    setCategory(event.target.value);
    console.log(event.target.value)
  }

  /*  */
  function handleName(event) {
    setName(event.target.value);
    console.log(event.target.value)
  }

  /* ADD NEW ITEM */
  /* Form onSubmit handler */
  function handleSubmit(event) {
    // Prevent default page reload.
    event.preventDefault();
    console.log("submit")
    if (name.length > 0) {
      onItemFormSubmit(
        {
          id: uuid(),
          name: name,
          category: category
        }
      )
    } else {
      console.log("empty");
    }
  }
  
  return (
    <form 
      className="NewItem" 
      onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleName}
        />
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={category} 
          onChange={handleCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
