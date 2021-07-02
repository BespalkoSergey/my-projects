var selection = {};
selection.size = {};
selection.size.size = "Большая";
selection.size.cost = 359;
selection.ingredients = {
  Сыр: 30,
};
selection.cost = 0;

function setValuesSelection(e) {
  let obj = e.target;
  let name = obj.name;
  let value = parseInt(obj.value);
  let checked = obj.checked;
  let dataName = obj.dataset.name;
  if (name == "size") {
    selection.size.size = dataName;
    selection.size.cost = value;
  }
  if (name == "ingredients") {
    if (checked) {
      selection.ingredients[`${dataName}`] = value;
    }
    if (!checked) {
      delete selection.ingredients[`${dataName}`];
    }
  }
}

document.addEventListener("change", setValuesSelection);
