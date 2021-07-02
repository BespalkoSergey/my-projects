let doc = {
  Header: "",
  Body: "",
  Footer: "",
  Date: "",
  App: {
    Header: "",
    Body: "",
    Footer: "",
    Date: ""
  },
  write() {
    let confirmFlag;
    do {
      let key = prompt(
        'Введите где будет запись:"Header","Body","Footer","Date","App")'
      );
      if (key == "App") {
        key = prompt(
          'Введите где будет запись ("Header","Body","Footer","Date")'
        );
        if (
          key == "Header" ||
          key == "Body" ||
          key == "Footer" ||
          key == "Date"
        ) {
          let value = prompt("Значение которе необходимо записать");
          this.App[`${key}`] = value;
        } else {
          alert("Введенное значение не существует");
        }
      } else if (
        key == "Header" ||
        key == "Body" ||
        key == "Footer" ||
        key == "Date"
      ) {
        let value = prompt("Значение которе необходимо записать");
        this[`${key}`] = value;
      } else {
        alert("Введенное значение не существует");
      }
      confirmFlag = confirm("Продолжить запись?");
    } while (confirmFlag);
  },
  show() {
    let confirmFlag;
    do {
      let key = prompt(
        'Введите что будем показывать:"Header","Body","Footer","Date","App")'
      );
      if (key == "App") {
        key = prompt(
          'Введите что будем показывать:"Header","Body","Footer","Date")'
        );
        if (
          key == "Header" ||
          key == "Body" ||
          key == "Footer" ||
          key == "Date"
        ) {
          alert(`App.${key}:${this.App[`${key}`]}`);
        } else {
          alert("Введенное значение не существует");
        }
      } else if (
        key == "Header" ||
        key == "Body" ||
        key == "Footer" ||
        key == "Date"
      ) {
        alert(`${key}:${this[`${key}`]}`);
      } else {
        alert("Введенное значение не существует");
      }
      confirmFlag = confirm("Продолжить показ?");
    } while (confirmFlag);
  }
};

function operationsOnObjekt() {
  let docFlag;
  do {
    let ask = prompt('Введите действие "Write","Show"');
    if (ask == "Write") {
      doc.write();
    } else if (ask == "Show") {
      doc.show();
    } else {
      alert("Такой операции не существует");
    }
    docFlag = confirm("Выйти из программы?");
  } while (docFlag == false);
  console.log(doc);
}

operationsOnObjekt();