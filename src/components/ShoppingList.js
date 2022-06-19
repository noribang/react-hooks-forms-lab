import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, onItemFormSubmit }) {
  /* Filter by Category state. */
  const [selectedCategory, setSelectedCategory] = useState("All");
  /* Search State for search input. */
  const [search, setSearch] = useState("");
  /* ItemForm itemName state. */
  // const [itemName, setItemName] = useState("");
  /* ItemForm itemCategory */
  // const [itemCategory, setItemCategory] = useState("Produce");
  /* New item array of objects state. */
  // const [submittedData, setSubmittedData] = useState([]);
  /* New item array of objects state. */
  // const [array, setArray] = useState([...items]);

  // let searchActive = false

  /* Copy contents of existing array and
  then append newItem object. */
  // const itemsArray = [...submittedData]
  /* Add items array to state. */
  // setSubmittedData(itemsArray);
  // console.log("items: ", items)

  /* Search Callback event handler. */
  // function handleSearchChange(event) {
  //   setSearch(event.target.value);
  //   // searchActive = true 
  //   // console.log(event.target.value)
  //   // console.log(search);
  //   // console.log(searchActive)
  // }
    
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // /*  */
  // function handleNewItemName(event) {
  //   setItemName(event.target.value);
  //   console.log(event.target.value)
  // }
  // /*  */
  // function handleNewItemCategory (event) {
  //   setItemCategory(event.target.value);
  //   console.log(event.target.value)
  // }
  // /* Add new element to array in state. */
  // function addElement(element) {
  //   setArray([...array, element]);
  // }

  // /* Form onSubmit handler */
  // function onItemFormSubmit(event) {
  //   // Prevent default page reload.
  //   event.preventDefault();
  //   console.log("submit")
  //   if (itemName.length > 0) {
  //     // console.log(itemName);
  //     // Create newItem object's values from state values.
  //     const newItem = {
  //       id: uuid(),
  //       name: itemName,
  //       category: itemCategory
  //     }
  //     console.log(newItem);

  //     addElement(newItem);
  //     console.log("array: ", array)

  //   } else {
  //     console.log("empty");
  //   }
  // }


  // // const itemsToDisplay = items.filter((item) => {
  // const itemsToDisplay = array.filter((item) => {
  //   /* Original code. */ 
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;  
  
  //   if (handleSearchChange) {
  //     if (search === "") {return true;}

  //     return item.name === search;
  //   }
  // });

  // const searchItemsToDisplay = items.filter((item) => {
  //   if (search === "") return true;

  //   return item.name === search;
  // });

  const itemsToDisplay = items
    // category
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    // search term
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="ShoppingList">
      <ItemForm 
      // itemName={itemName} 
      // itemCategory={itemCategory} 
      // handleNewItemName={handleNewItemName}
      // handleNewItemCategory={handleNewItemCategory}
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        /* PASS SEARCH SET STATE. */
        onSearchChange={setSearch} 
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}

      </ul>
    </div>
  );
}

export default ShoppingList;
