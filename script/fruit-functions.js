// Read existing notes from LocalStorage
const getSavedItems = function () {
  const itemsJSON = localStorage.getItem("itemList");

  if (itemsJSON !== null) {
    return JSON.parse(itemsJSON);
  } else {
    return [];
  }
};

// Generate the DOM structure for a items
const renderItems = function (itemList) {
  document.querySelector("#fruits").innerHTML = "";

  const summary = document.createElement("h4");
  summary.textContent = `You have ${itemList.length} items on your list.`;
  document.querySelector("#fruits").appendChild(summary);

  itemList.forEach(function (item) {
    const p = document.createElement("p");
    p.textContent = item.ingredient + " " + item.price + " €";
    document.querySelector("#fruits").appendChild(p);
  });
};

// Push item to LocalStorage
const pushLocal = function (itemList) {
  localStorage.setItem("itemList", JSON.stringify(itemList));
};

// Clear DOM and localStorage
const clearItems = function () {
  const items = document.querySelectorAll("p");
  items.forEach(function (p) {
    p.remove();
  });
  while (itemList.length > 0) {
    itemList.pop();
  }
  localStorage.clear();
  renderItems(itemList);
};
