let iframeSelection = document.querySelectorAll("iframe")[0];
let iframeAuthor = document.querySelectorAll("iframe")[1];
let outPizza = document.querySelectorAll(".paragraph *")[0];
let outAuthor = document.querySelectorAll(".paragraph *")[1];
let button = document.querySelector("#button");
let objAuthor = {
  name: "",
  address: "",
  phone: "",
};

iframeSelection.contentWindow.addEventListener("change", function () {
  let mainSelections = iframeSelection.contentWindow.selection;
  let strSelections = "";
  let cost = 0;

  for (let key in mainSelections) {
    if (key == "size") {
      strSelections += `Размер: ${mainSelections.size.size}, Ингредиенты: `;
      cost += mainSelections.size.cost;
    }
    if (key == "ingredients") {
      for (let name in mainSelections.ingredients) {
        strSelections += `${name}, `;
        cost += mainSelections.ingredients[`${name}`];
      }
    }
  }
  strSelections += ` Стоимость: ${cost}грн.`;
  outPizza.textContent = strSelections;
});

iframeAuthor.contentWindow.addEventListener("change", function () {
  let mainPerson = iframeAuthor.contentWindow.person;
  let strPerson = "Кому: ";
  objAuthor = mainPerson;
  for (let key in mainPerson) {
    strPerson += `${mainPerson[`${key}`]} `;
  }
  outAuthor.textContent = strPerson;
});

button.addEventListener("click", function () {
  if (
    objAuthor.name.length > 3 &&
    objAuthor.address.length > 4 &&
    objAuthor.phone.length == 10
  ) {
    alert("Наш менеджер свяжеться с вами для уточнения заказа");
  } else {
    alert("Не верно заполнены поля");
  }
});
