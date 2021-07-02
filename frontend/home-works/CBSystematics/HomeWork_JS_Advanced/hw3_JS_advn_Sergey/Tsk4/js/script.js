window.onload = function() {
  let a = document.getElementsByTagName("a");
  let arrayFlagStandard = ["close", "close", "close"];
  let arrayFlag = ["close", "close", "close"];
  let def;

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = arr1.length; i--; ) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  function writeDefault(array) {
    let index;
    for (item in array) {
      if (array[item] == "open") {
        index = item;
      }
    }
    a[index].textContent = def;
  }

  a[0].onclick = function() {
    function open() {
      arrayFlag = ["open", "close", "close"];
      w = window.open(
        "lesson1.html",
        "Window Name",
        "width=400,height=400,status=yes,resizable=no"
      );
      a[0].textContent = "JS Урок №1 (открыт)";
    }
    function close() {
      arrayFlag = ["close", "close", "close"];
      w.close();
    }
    if (arraysEqual(arrayFlag, arrayFlagStandard)) {
      open();
    } else if (arrayFlag[0] == "open") {
      def = "JS Урок №1";
      writeDefault(arrayFlag);
      close();
    }
  };
  a[1].onclick = function() {
    function open() {
      arrayFlag = ["close", "open", "close"];
      w = window.open(
        "lesson2.html",
        "Window Name",
        "width=400,height=400,status=yes,resizable=no"
      );
      a[1].textContent = "JS Урок №2 (открыт)";
    }
    function close() {
      arrayFlag = ["close", "close", "close"];
      w.close();
    }
    if (arraysEqual(arrayFlag, arrayFlagStandard)) {
      open();
    } else if (arrayFlag[1] == "open") {
      def = "JS Урок №2";
      writeDefault(arrayFlag);
      close();
    }
  };
  a[2].onclick = function() {
    function open() {
      arrayFlag = ["close", "close", "open"];
      w = window.open(
        "lesson3.html",
        "Window Name",
        "width=400,height=400,status=yes,resizable=no"
      );
      a[2].textContent = "JS Урок №3 (открыт)";
    }
    function close() {
      arrayFlag = ["close", "close", "close"];
      w.close();
    }
    if (arraysEqual(arrayFlag, arrayFlagStandard)) {
      open();
    } else if (arrayFlag[2] == "open") {
      def = "JS Урок №3";
      writeDefault(arrayFlag);

      close();
    }
  };
};
