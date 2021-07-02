const genre__wrapper = document.querySelector(".genre__wrapper");
const showAuthor = document.querySelector(".authorsTabs__content-showAuthor");
const mainWrapper = document.querySelector(".wrapper");
let setOfGenre;
let objOfAuthors = {};

class Book {
  constructor(name, number, genre, id) {
    this.nameOfBook = name;
    this.numberOfPages = number;
    this.genre = genre;
    this.id = id;
  }
}

class Author {
  arrayOfBooks = [];

  constructor(surname, name, patronymic, birthday) {
    this.surname = surname;
    this.name = name;
    if (patronymic) this.patronymic = patronymic;
    this.birthday = new Date(birthday).getTime();
  }

  setBook(name, number, genre) {
    this.arrayOfBooks.push(
      new Book(name, number, genre, this.arrayOfBooks.length)
    );
  }

  deleteBook(name) {
    this.arrayOfBooks = this.arrayOfBooks.filter((value) =>
      value.nameOfBook === name ? false : value
    );
  }
}

if (localStorage.getItem("testApplication")) {
  let tmp = JSON.parse(localStorage.getItem("testApplication"));

  for (let key in tmp.authors) {
    objOfAuthors[tmp.authors[key].surname] = new Author(
      tmp.authors[key].surname,
      tmp.authors[key].name,
      tmp.authors[key].patronymic ? tmp.authors[key].patronymic : false,
      tmp.authors[key].birthday
    );
    for (let value of tmp.authors[key].arrayOfBooks) {
      objOfAuthors[tmp.authors[key].surname].setBook(
        value.nameOfBook,
        value.numberOfPages,
        value.genre
      );
    }
  }
  setOfGenre = new Set(tmp.genres);
} else {
  objOfAuthors["Оруэлл"] = new Author(
    "Оруэлл",
    "Джордж",
    false,
    "25 june 1903"
  );
  objOfAuthors["Оруэлл"].setBook("1984", 192, "Фантастика");
  objOfAuthors["Оруэлл"].setBook("Скотный Двор", 256, "Проза");
  objOfAuthors["Оруэлл"].setBook("Дочь священника", 352, "Проза");
  objOfAuthors["Оруэлл"].setBook("Да здравствует фикус!", 317, "Проза");

  objOfAuthors["Кристи"] = new Author(
    "Кристи",
    "Агата",
    false,
    "15 september 1890"
  );
  objOfAuthors["Кристи"].setBook(
    'Убийство в "Восточном экспрессе"',
    352,
    "Детективы"
  );
  objOfAuthors["Кристи"].setBook("Десять негритят", 320, "Детективы");
  objOfAuthors["Кристи"].setBook("Автобиография", 880, "Автобиография");

  objOfAuthors["Макиавелли"] = new Author(
    "Макиавелли",
    "Никколо",
    false,
    "03 may 1469"
  );
  objOfAuthors["Макиавелли"].setBook("Государь", 320, "Философия");
  objOfAuthors["Макиавелли"].setBook("Искусство войны", 416, "Философия");
  setOfGenre = new Set([
    "Автобиография",
    "Проза",
    "Фантастика",
    "Философия",
    "Детективы",
    "Искусство и Дизайн",
    "Комедия",
  ]);
}

const module__alert = (message) => {
  let div = document.createElement("div");
  div.classList.add("module__alert");
  div.innerHTML = `<p class="module__alert-text">${message}</p>`;
  let btn = document.createElement("button");
  btn.classList.add("module__alert-btn");
  btn.innerHTML = "&#10008;";
  btn.addEventListener("click", () => div.remove());
  div.prepend(btn);
  mainWrapper.prepend(div);
};

let addAthor_dirAuthor;
const addAuthor = (value) => {
  let div = document.createElement("div");
  div.classList.add("showAuthor__item");
  div.innerHTML = `
<div class="showAuthor-author">
  <h5>Автор:</h5>
  <p>${value.surname} ${value.name ? value.name.slice(0, 1) + "." : ""}${
    value.patronymic ? value.patronymic.slice(0, 1) + "." : ""
  }</p>
</div>
<div class="showAuthor-books">
  <h5>Книг:</h5>
  <p>${value.arrayOfBooks.length}</p>
</div>
<button class="editAthor">Редактировать</button>
<button class="deleteAuthor">Удалить</button>
<button class="showAuthorBtn">Детали</button>`;
  showAuthor.prepend(div);
  addAthor_dirAuthor = div;
};

for (let author in objOfAuthors) {
  addAuthor(objOfAuthors[author]);
}

const renderingGenre = (value) => {
  let div = document.createElement("div");
  div.classList.add("genre__item");
  div.innerHTML = `<p class="genre__text">${value}</p>`;
  div.innerHTML += '<button class="genre__deleteBtn">Удалить</button>';
  genre__wrapper.appendChild(div);
};

setOfGenre.forEach((v) => renderingGenre(v));

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  localStorage.setItem(
    "testApplication",
    JSON.stringify({
      genres: Array.from(setOfGenre),
      authors: objOfAuthors,
    })
  );
});

const validationGenre = (inputValue) => {
  let permission = true;
  if (setOfGenre.has(inputValue) || /[\d_]/.test(inputValue)) {
    permission = false;
  } else {
    for (let value of setOfGenre) {
      if (
        value.toLowerCase().includes(inputValue.toLowerCase()) ||
        inputValue.toLowerCase().includes(value.toLowerCase())
      ) {
        permission = false;
        break;
      }
    }
  }
  return permission;
};

genre__wrapper.addEventListener("click", (event) => {
  let addInput = document.querySelector("#add-1");
  if (event.target.classList.contains("genre__deleteBtn")) {
    let item = event.target.parentNode;
    setOfGenre.delete(item.childNodes[0].textContent);
    item.remove();
  }
  if (event.target.classList.contains("add__btn")) {
    if (validationGenre(addInput.value)) {
      renderingGenre(addInput.value);
      setOfGenre.add(addInput.value);
      addInput.value = "";
    } else {
      module__alert("Такой жанр уже существует, либо вы ввели неправильно");
    }
  }
});

let editAthor_author;
const addBook = (elem, books, index, author) => {
  let book = document.createElement("div");
  book.classList.add(`book-${index}`);
  book.innerHTML += `
  <h5>Название</h5>
  <input data-value="nameOfBook" type="text" value="${elem.nameOfBook}"/>
  <h5>Кол-во страниц</h5>
  <input data-value="numberOfPages" type="number" value="${elem.numberOfPages}"/>
  <h5>Жанр</h5>
  `;

  let btnSave = document.createElement("button");
  btnSave.classList.add("module__btn-save");
  btnSave.textContent = "Сохранить";

  let btnDel = document.createElement("button");
  btnDel.classList.add("module__btn");
  btnDel.textContent = "Удалить";
  btnDel.addEventListener("click", (event) => {
    objOfAuthors[author.surname].deleteBook(
      event.target.parentElement.children[1].defaultValue
    );
    event.target.parentElement.remove();
    addAuthor(objOfAuthors[author.surname]);

    showAuthor.removeChild(
      returnAuthorContains(addAthor_dirAuthor, editAthor_dirAuthor)
    );
  });

  let select = document.createElement("select");
  select.classList.add("module__window-select");
  select.dataset.value = "genre";
  setOfGenre.forEach(function (value) {
    let tmp = document.createElement("option");
    tmp.setAttribute("value", `${value}`);
    if (value === elem.genre) tmp.setAttribute("selected", "selected");
    tmp.textContent = value;
    select.appendChild(tmp);
  });
  book.append(select);
  book.append(btnSave);
  book.append(btnDel);
  books.prepend(book);
};

const addModule = () => {
  let moduleWindow = document.createElement("div");
  moduleWindow.classList.add("module__window");
  moduleWindow.innerHTML = `<button class="module__btn-close">Затрыть</button>`;
  mainWrapper.appendChild(moduleWindow);
  return moduleWindow;
};

const sortSelect = (options, place) => {
  let select__sort = document.createElement("select");
  select__sort.classList.add(`select__sort-${place}`);
  const addOption = (value) => {
    let option = document.createElement("option");
    option.setAttribute("value", `${value}`);
    option.textContent = value;
    select__sort.append(option);
    return option;
  };
  addOption("Сортировать").setAttribute("selected", "selected");
  options.forEach((val) => addOption(val));
  return select__sort;
};

const cleanAndSortModule = (arr, methodSort) => {
  let books = document.querySelectorAll(
    '.module__window > div.module__books > [class^="book"]'
  );
  if (books) {
    for (let item of books) {
      item.remove();
    }
  }

  let sortArr;
  switch (methodSort) {
    case "Название":
      sortArr = arr.sort(function (a, b) {
        if (a.nameOfBook > b.nameOfBook) {
          return 1;
        }
        if (a.nameOfBook < b.nameOfBook) {
          return -1;
        }
        return 0;
      });
      break;
    case "Кол-во страниц":
      sortArr = arr.sort(function (a, b) {
        if (a.numberOfPages > b.numberOfPages) {
          return -1;
        }
        if (a.numberOfPages < b.numberOfPages) {
          return 1;
        }
        return 0;
      });
      break;
    case "Жанр":
      sortArr = arr.sort(function (a, b) {
        if (a.genre > b.genre) {
          return 1;
        }
        if (a.genre < b.genre) {
          return -1;
        }
        return 0;
      });
      break;
    default:
      sortArr = arr;
      break;
  }
  return sortArr;
};

const searchBookInEditAuthor = (author, module_books, searchStr) => {
  let arrBks = Array.from(author.arrayOfBooks).filter((v) => {
    return v.nameOfBook.toLowerCase().includes(searchStr.toLowerCase())
      ? v
      : false;
  });

  let sortArr = cleanAndSortModule(arrBks, "Название");
  for (let index = sortArr.length - 1; index >= 0; index--) {
    addBook(sortArr[index], module_books, sortArr[index].id, author);
  }
};

const addSearch = (author, module_books, fnct, placeForBooks) => {
  let search = document.createElement("input");
  search.classList.add("search");
  search.setAttribute("placeholder", "Поиск");
  search.addEventListener("keyup", () => {
    fnct(author, module_books, search.value, placeForBooks);
  });
  return search;
};

const renderingEditAuthorBooks = (author, module_books, methodSort) => {
  let sortArr = cleanAndSortModule(Array.from(author.arrayOfBooks), methodSort);
  for (let index = sortArr.length - 1; index >= 0; index--) {
    addBook(sortArr[index], module_books, sortArr[index].id, author);
  }
};

const editAthor = (author) => {
  editAthor_author = author;
  let div = addModule();
  let date = "";
  if (author.birthday) {
    date = new Date(author.birthday);
    date = `${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}.${
      date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()
    }.${date.getFullYear()}`;
  }

  let books = document.createElement("div");
  books.classList.add("module__books");
  renderingEditAuthorBooks(author, books, "default");

  let addBookBtn = document.createElement("button");
  addBookBtn.classList.add("module__btn-addBookBtn");
  addBookBtn.textContent = "Добавить Книгу";

  let h5Book = document.createElement("div");
  h5Book.classList.add("module__window-h5Book");
  h5Book.innerHTML = "<h5>Книги</h5>";

  addBookBtn.addEventListener("click", (event) => {
    let actualeNumberOfBook =
      event.target.offsetParent.children[12].children.length;
    if (actualeNumberOfBook === author.arrayOfBooks.length) {
      addBook(
        new Book("", 0, "", 0),
        books,
        author.arrayOfBooks.length,
        author
      );
    } else {
      module__alert("Сперва сохраните книгу, потом добавляйте новую");
    }
  });

  div.innerHTML += `
  <h5>Фамилия</h5>
  <input data-value="surname" type="text" value="${author.surname}"/>
  <h5>Имя</h5>
  <input data-value="name" type="text" value="${author.name}"/>
  <h5>Отчество</h5>
  <input data-value="patronymic" type="text" value="${
    author.patronymic ? author.patronymic : ""
  }"/>
  <h5>Дата рождения</h5>
  <input data-value="birthday" type="text" value="${date}"/><br/>
  <button class="module__btn-save">Сохранить</button>
  `;
  h5Book.append(addSearch(author, books, searchBookInEditAuthor));
  h5Book.append(
    sortSelect(["Название", "Кол-во страниц", "Жанр"], "editAuthor")
  );
  h5Book.append(addBookBtn);
  div.append(h5Book);
  div.append(books);

  document
    .querySelector(".select__sort-editAuthor")
    .addEventListener("change", (event) =>
      renderingEditAuthorBooks(author, books, event.target.value)
    );
};

const contentAuthors = document.querySelector("div.tabs__content-authors");
let contentAuthors_searchAndSelect = document.createElement("div");
contentAuthors_searchAndSelect.classList.add("searchAndSelect-main");
contentAuthors_searchAndSelect.prepend(
  sortSelect(["Автор", "Книг"], "tabAuthor")
);
contentAuthors.prepend(contentAuthors_searchAndSelect);

const renderingBook = (arr, placeForBook, methodSort, placeForBooks) => {
  let sortArr = cleanAndSortModule(Array.from(arr), methodSort);
  for (let index = sortArr.length - 1; index >= 0; index--) {
    let book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `
      <h5>Название</h5>
      <p>${sortArr[index].nameOfBook}</p>
      <h5>Кол-во страниц</h5>
      <p>${sortArr[index].numberOfPages}</p>
      <h5>Жанр</h5>
      <p>${sortArr[index].genre}</p>
      `;
    placeForBook.prepend(book);
  }
  placeForBooks.append(placeForBook);
};

const searchBookInshowAuthor = (
  author,
  module_books,
  searchStr,
  placeForBooks
) => {
  let arrBks = Array.from(author.arrayOfBooks).filter((v) => {
    return v.nameOfBook.toLowerCase().includes(searchStr.toLowerCase())
      ? v
      : false;
  });
  let sortArr = cleanAndSortModule(arrBks, "Название");
  for (let index = sortArr.length - 1; index >= 0; index--) {
    let book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `
      <h5>Название</h5>
      <p>${sortArr[index].nameOfBook}</p>
      <h5>Кол-во страниц</h5>
      <p>${sortArr[index].numberOfPages}</p>
      <h5>Жанр</h5>
      <p>${sortArr[index].genre}</p>
      `;
    module_books.prepend(book);
  }
  placeForBooks.append(module_books);
};

let editAthor_dirAuthor;
showAuthor.addEventListener("click", (event) => {
  let author;
  if (event.target.parentNode.childNodes[1].children[1]) {
    author = event.target.parentNode.childNodes[1].children[1].textContent;
    author = author.substr(0, author.search(/\s[a-zA-ZА-Яа-я]\./gm));
    author = objOfAuthors[author];
  }

  if (event.target.classList.contains("editAthor")) {
    editAthor_dirAuthor = event.target.parentElement;
    editAthor(author);
  }
  if (event.target.classList.contains("deleteAuthor")) {
    delete objOfAuthors[author.surname];
    showAuthor.removeChild(event.target.parentNode);
  }
  if (event.target.classList.contains("showAuthorBtn")) {
    let div = addModule();
    let date = new Date(author.birthday);
    date = `${date.getDate()}.${
      date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()
    }.${date.getFullYear()}`;

    div.innerHTML += `
    <h5>Фамилия</h5>
    <p>${author.surname}</p> 
    <h5>Имя</h5>
    <p>${author.name}</p>
    ${author.patronymic ? `<h5>Отчество</h5><p>${author.patronymic}</p>` : ""}
    <h5>Дата рождения</h5>
    <p>${date}</p>`;
    let showAuthorBooks = document.createElement("div");
    showAuthorBooks.classList.add("showAuthor-sort");
    showAuthorBooks.innerHTML = "<h5>Книги</h5>";
    let books = document.createElement("div");
    books.classList.add("module__books");

    showAuthorBooks.append(
      addSearch(author, books, searchBookInshowAuthor, div)
    );
    showAuthorBooks.append(
      sortSelect(["Название", "Кол-во страниц", "Жанр"], "showAuthor")
    );
    div.append(showAuthorBooks);

    renderingBook(author.arrayOfBooks, books, "default", div);

    document
      .querySelector(".select__sort-showAuthor")
      .addEventListener("change", (event) =>
        renderingBook(author.arrayOfBooks, books, event.target.value, div)
      );
  }
});

const validateAuthor = (author) => {
  if (/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm.test(author.surname))
    return false;
  if (/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm.test(author.name)) return false;
  if (
    /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm.test(author.patronymic) &&
    author.patronymic.length > 0
  )
    return false;
  if (!/\d\d\.\d\d\.\d\d\d\d/.test(author.birthday)) {
    return false;
  }
  return true;
};

const validateBook = (book) => {
  if (/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm.test(book.nameOfBook))
    return false;
  return true;
};

const returnAuthorContains = (addAthorDir, editAthorDir) => {
  let tmpValue;
  for (let value of showAuthor.children) {
    if (value === editAthorDir) {
      tmpValue = editAthorDir;
      break;
    } else {
      tmpValue = addAthorDir;
    }
  }
  return tmpValue;
};

const checkBook = (book, author, clss) => {
  let tmpVal = true;
  author.arrayOfBooks.forEach((val) => {
    if (val.nameOfBook === book.nameOfBook) tmpVal = false;
  });
  if (+clss.slice(5) < author.arrayOfBooks.length) tmpVal = false;
  return tmpVal;
};

const clearContent = () => {
  for (let item of document.querySelectorAll(".showAuthor__item")) {
    item.remove();
  }
};

const renderingContent = (arr) => {
  for (let index = arr.length - 1; index >= 0; index--) {
    addAuthor(objOfAuthors[arr[index]]);
  }
};

document
  .querySelector(".select__sort-tabAuthor")
  .addEventListener("change", (event) => {
    if (event.target.value === "Сортировать") {
      clearContent();
      renderingContent(Object.keys(objOfAuthors));
    }
    if (event.target.value === "Автор") {
      clearContent();
      renderingContent(Object.keys(objOfAuthors).sort());
    }
    if (event.target.value === "Книг") {
      let sortValues = Object.values(objOfAuthors)
        .sort(function (a, b) {
          if (a.arrayOfBooks.length > b.arrayOfBooks.length) {
            return -1;
          }
          if (a.arrayOfBooks.length < b.arrayOfBooks.length) {
            return 1;
          }
          return 0;
        })
        .map((value) => value.surname);
      clearContent();
      renderingContent(sortValues);
    }
  });

const addSearchAuthor = () => {
  let search = document.createElement("input");
  search.classList.add("search");
  search.setAttribute("placeholder", "Поиск");
  search.addEventListener("keyup", () => {
    let sortValues = Object.values(objOfAuthors)
      .filter((obj) => {
        let result = false;
        for (let value in obj) {
          if (typeof obj[value] === "string") {
            if (obj[value].toLowerCase().includes(search.value.toLowerCase())) {
              result = obj;
            }
            return result;
          }
        }
      })
      .map((value) => value.surname);
    clearContent();
    renderingContent(sortValues);
  });
  return search;
};
contentAuthors_searchAndSelect.prepend(addSearchAuthor());

mainWrapper.addEventListener("click", (event) => {
  if (event.target.classList.contains("authorsTabs__label-addAuthors")) {
    editAthor(new Author("", "", "", ""));
  }
  if (event.target.classList.contains("module__btn-close")) {
    event.target.parentNode.remove();
  }
  if (event.target.classList.contains("module__btn-save")) {
    let inputsArr = document.querySelectorAll(
      `.${event.target.parentNode.className} > input,.${event.target.parentNode.className} > select`
    );

    let tmpAuthor = {};
    let tmpBook = {};

    if (event.target.parentElement.classList.contains("module__window")) {
      inputsArr.forEach((e) => {
        if (e.parentElement.classList.contains("module__window")) {
          tmpAuthor[e.dataset.value] = e.value;
        }
      });

      if (validateAuthor(tmpAuthor)) {
        tmpAuthor.birthday = `${tmpAuthor.birthday.slice(
          6
        )}-${tmpAuthor.birthday.slice(3, 5)}-${tmpAuthor.birthday.slice(0, 2)}`;

        if (editAthor_author.surname.length > 0) {
          objOfAuthors[editAthor_author.surname] = new Author(
            tmpAuthor.surname,
            tmpAuthor.name,
            tmpAuthor.patronymic ? tmpAuthor.patronymic : false,
            tmpAuthor.birthday
          );
          objOfAuthors[tmpAuthor.surname].arrayOfBooks =
            editAthor_author.arrayOfBooks;
          addAuthor(objOfAuthors[tmpAuthor.surname]);

          showAuthor.removeChild(
            returnAuthorContains(addAthor_dirAuthor, editAthor_dirAuthor)
          );
          editAthor_author = objOfAuthors[tmpAuthor.surname];
          module__alert("Автор перезаписан.");
        } else {
          objOfAuthors[tmpAuthor.surname] = new Author(
            tmpAuthor.surname,
            tmpAuthor.name,
            tmpAuthor.patronymic ? tmpAuthor.patronymic : false,
            tmpAuthor.birthday
          );
          addAuthor(objOfAuthors[tmpAuthor.surname]);
          editAthor_author = objOfAuthors[tmpAuthor.surname];
          module__alert("Автор добавлен");
        }
      } else {
        let message = "Не прошёл валидацию автор<br/>";
        message += "Имя,Фамилия - строки, поля обязательные<br/>";
        message += "Отчество - строка, поле не обязательное<br/>";
        message +=
          'Дата рождения - цифры в формате "ДД.ММ.ГГГГ", поле обязательное.';
        module__alert(message);
      }
    }

    let bookClass = event.target.parentElement.classList[0];
    if (bookClass.includes("book")) {
      let author = editAthor_author;

      inputsArr.forEach((e) => {
        if (e.parentElement.classList[0].includes("book")) {
          tmpBook[e.dataset.value] = e.value;
        }
      });
      if (
        objOfAuthors.hasOwnProperty(
          event.target.offsetParent.children[2].value
        ) &&
        validateBook(tmpBook)
      ) {
        if (checkBook(tmpBook, author, bookClass)) {
          objOfAuthors[event.target.offsetParent.children[2].value].setBook(
            tmpBook.nameOfBook,
            +tmpBook.numberOfPages,
            tmpBook.genre
          );
          module__alert("Книга добавлена");
        } else {
          let bk =
            objOfAuthors[event.target.offsetParent.children[2].value]
              .arrayOfBooks[+bookClass.slice(5)];
          bk.nameOfBook = tmpBook.nameOfBook;
          bk.numberOfPages = +tmpBook.numberOfPages;
          bk.genre = tmpBook.genre;
        }
        showAuthor.removeChild(
          returnAuthorContains(addAthor_dirAuthor, editAthor_dirAuthor)
        );
        addAuthor(author);
        module__alert("Книга перезаписанна");
      } else {
        let message = "Автор не сохнанён,<br/>";
        message += "возможен неправильный ввод данных<br/>";
        message += "или книга уже существует.<br/>";
        message += "Формат ввода:<br/>";
        message += "Название книги - строка, поле обязательное<br/>";
        message += "Кол-во страниц - число, поле обязательное<br/>";
        message +=
          "Жанр необходимо выбрать, если же нет нужного жанра то добавте во вкладке жанры.<br/>";
        module__alert(message);
      }
    }
  }
});
