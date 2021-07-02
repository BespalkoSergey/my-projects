const marshmallows: number = 5;
let order: (number | string)[][] = [];
let price: number = 0;
let consist: string = "";
enum Size {
  Small = 10,
  Big = 25,
}
enum Adds {
  chocolate = 5,
  caramel = 6,
  berries = 10,
}

((): void => {
  switch (
    prompt(
      "Hello! What size of ice cream do you want?\nWrite down\nSmall or Big",
      "Big"
    )
  ) {
    case "Small":
      alert(
        `Price is ${Size.Small} hrivnas of your ice cream ${
          Size[Size.Small]
        }\n Have a nice day!`
      );
      break;
    case "Big":
      order.push([Size.Big, Size[Size.Big]]);

      let adds: string = prompt(
        "You must add something to big, we have:\nchocolate, caramel, berries",
        "berries, caramel"
      );

      if (
        adds.includes("chocolate") ||
        adds.includes("caramel") ||
        adds.includes("berries")
      ) {
        if (adds.includes("chocolate"))
          order.push([Adds.chocolate, Adds[Adds.chocolate]]);
        if (adds.includes("caramel"))
          order.push([Adds.caramel, Adds[Adds.caramel]]);
        if (adds.includes("berries"))
          order.push([Adds.berries, Adds[Adds.berries]]);
      } else {
        alert("You must add something");
        location.reload();
        break;
      }
      confirm("If you want you can add marshmallows?")
        ? order.push([marshmallows, "marshmallows"])
        : null;

      order.forEach((array) => {
        array.forEach((element: any) => {
          Number.isInteger(element)
            ? (price += element)
            : (consist += element + ", ");
        });
      });
      alert(
        `Price is ${price} hrivnas of your ice cream ${consist}\n Have a nice day!`
      );

      break;
    default:
      alert("Wrong Answer!");
      location.reload();
      break;
  }
})();
