// Read existing items from LocalStorage
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

  const summary = document.createElement("p");
  summary.textContent = `Amount of items on your list ${itemList.length}.`;
  document.querySelector("#fruits").appendChild(summary);

  itemList.forEach(function (item) {
    const p = document.createElement("ul");
    let price = parseFloat(item.price)
    p.textContent = item.ingredient + " " + price.toFixed(2) + " €";
    document.querySelector("#fruits").appendChild(p);
  });
};

// Push item to LocalStorage
const pushLocal = function (itemList) {
  localStorage.setItem("itemList", JSON.stringify(itemList));
  
};

// Clear DOM and localStorage
const clearItems = function () {
  const items = document.querySelectorAll("fruits");
  items.forEach(function (p) {
    p.remove();
  });
  while (itemList.length > 0) {
    itemList.pop();
  }
  localStorage.clear();
  renderItems(itemList);
};

// Sort Low to High
const ascending = function () {
  let ascending = itemList.sort(
    (a, b) => parseFloat(a.price) - parseFloat(b.price)
  );
  const p = document.querySelectorAll("p");
  ascending.forEach(function (item) {
    p.textContent = item.ingredient + " " + item.price + " €";
  });
  renderItems(itemList);
};

// Sort High to Low
const descending = function () {
  let descending = itemList.sort(
    (a, b) => parseFloat(b.price) - parseFloat(a.price)
  );
  const p = document.querySelectorAll("p");
  descending.forEach(function (item) {
    p.textContent = item.ingredient + " " + item.price + " €";
  });
  renderItems(itemList);
};
