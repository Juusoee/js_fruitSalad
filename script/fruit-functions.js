// Read existing items from LocalStorage
const getSavedItems = function () {
  const itemsJSON = localStorage.getItem("itemList");

  // Read localStorage if !== null, return empty Array
  if (itemsJSON !== null) {
    return JSON.parse(itemsJSON);
  } else {
    return [];
  }
};

// Generate the DOM structure for a items
const renderItems = function (itemList) {
  document.querySelector("#fruits").innerHTML = "";

  // Summary to show amount of items
  const summary = document.createElement("p");
  summary.textContent = `Amount of items on your list ${itemList.length}.`;
  document.querySelector("#fruits").appendChild(summary);

  // Loop through Array to display items
  itemList.forEach(function (item) {
    const ul = document.createElement("ul");
    let price = parseFloat(item.price);
    ul.textContent = item.ingredient + " " + price.toFixed(2) + " €";
    document.querySelector("#fruits").appendChild(ul);
    lowhigh();
  });
};

// Push item to LocalStorage
const pushLocal = function (itemList) {
  localStorage.setItem("itemList", JSON.stringify(itemList));
};

// Clear DOM and localStorage
const clearItems = function () {
  const items = document.querySelectorAll("fruits", "low");
  items.forEach(function (p) {
    p.remove();
  });
  while (itemList.length > 0) {
    itemList.pop();
  }
  localStorage.clear();
  renderItems(itemList);
  // Clear high and low innerHTML
  (document.getElementById("high").innerHTML = ""),
    (document.getElementById("low").innerHTML = "");
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

// Display Most affordable and most Expensive, innerHTML
const lowhigh = function () {
  
    let highestPrice = itemList.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    localStorage.setItem("high", JSON.stringify(highestPrice));
    let dfPrice = parseFloat(highestPrice[0].price);
    document.getElementById("high").innerHTML =
      "Most expensive item on your list: " +
      "&nbsp;" +
      highestPrice[0].ingredient +
      " " +
      dfPrice.toFixed(2) +
      " €";

    let lowestPrice = itemList.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    localStorage.setItem("low", JSON.stringify(lowestPrice));
    let dfPriceb = parseFloat(lowestPrice[0].price);
    document.getElementById("low").innerHTML =
      "Most affordable item on your list: " +
      "&nbsp;" +
      lowestPrice[0].ingredient +
      " " +
      dfPriceb.toFixed(2) +
      " €";
  
};
