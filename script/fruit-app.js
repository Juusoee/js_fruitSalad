const itemList = getSavedItems();
renderItems(itemList);

document.querySelector("#new-fruit").addEventListener("submit", function (ev) {
  ev.preventDefault();
  itemList.push({
    ingredient: ev.target.elements.fruit.value,
    price: ev.target.elements.price.value,
  });
  pushLocal();
  renderItems(itemList);
  ev.target.elements.fruit.value = "";
  ev.target.elements.price.value = "";
});

document.querySelector("#clear-list").addEventListener("click", function (ev) {
  ev.preventDefault();
  clearItems();
});

document.querySelector("#filter-by").addEventListener("change", function (ev) {
  console.log(ev.target.value);
});
