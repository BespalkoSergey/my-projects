// Замыкания

const count = (() => {
  let counter = 0;
  return () => ++counter
})();