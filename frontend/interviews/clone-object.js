// Клонировать объект

const object = {
  "a": "a",
  "b": {
    "c": function () {
      return "hello";
    },
    d() {
      return this.c;
    }
  }
}

function makeClone(obj) {
  let clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object")
        clone[key] = makeClone(obj[key]);
      else
        clone[key] = obj[key];
    }
  }
  return clone;
}

const newObj = makeClone(object);

object.b.c = function () {
  return "world";
}

console.log(newObj.b.d()() === object.b.d()());

//------------------------------------------------------

const newObj2 = JSON.parse(JSON.stringify(object));