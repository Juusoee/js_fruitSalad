// Read existing items from LocalStorage
const itemList = getSavedItems();
// Generate the DOM structure for a items
renderItems(itemList);

// Listener for adding new item to list
document.querySelector("#new-fruit").addEventListener("submit", function (ev) {
  ev.preventDefault();
  // Push item to list
  itemList.push({
    ingredient: ev.target.elements.fruit.value,
    price: ev.target.elements.price.value,
  });
  // Display Highest and Lowest
  lowhigh();
  // Push item to localStorage function
  pushLocal(itemList);
  // Render new item to DOM
  renderItems(itemList);
  // Clear form input fields
  ev.target.elements.fruit.value = "";
  ev.target.elements.price.value = "";
});

// Listener for Clear all, both localStorage & DOM
document.querySelector("#clear-list").addEventListener("click", function (ev) {
  ev.preventDefault();
  clearItems();
});

// Listener for Sort by ascending order
document.querySelector("#ascending").addEventListener("click", function (ev) {
  ev.preventDefault();
  ascending();
});

// Listener for Sort by descending order
document.querySelector("#descending").addEventListener("click", function (ev) {
  ev.preventDefault();
  descending();
});
