// Замыкания

const count = (function () {
    let counter = 0;
    return function () {
      return ++counter;
    };
  })();