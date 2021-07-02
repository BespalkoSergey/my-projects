enum Size {
  Small = 10,
  Big = 25,
}
enum Adds {
  chocolate = 5,
  caramel = 6,
  berries = 10,
}
const marshmallows: number = 5;
const main = (): void => {
  let ask: string = prompt(
    "Hello! What size of ice cream do you want?\nWrite down\nSmall or Big",
    "Big"
  );

  switch (ask) {
    case "Small":
      alert(`It\`s cost ${Size.Small} hrivnas`);
      break;
    case "Big":
      let tmp: number = Size.Big;
      let ask2: string = prompt(
        "You must add something to big, we have:\nchocolate, caramel, berries",
        "berries"
      );
      switch (ask2) {
        case "chocolate":
          tmp += Adds.chocolate;
          break;
        case "caramel":
          tmp += Adds.caramel;
          break;
        case "berries":
          tmp += Adds.berries;
          break;
        default:
          alert("Wrong Answer!");
          break;
      }
      let ask3: boolean = confirm("If you want you can add marshmallows?");
      ask3 ? (tmp += marshmallows) : null;
      alert(`Price of your ice cream ${tmp} hrivnas\n Have a nice day!`);
      break;
    default:
      alert("Wrong Answer!");
      break;
  }
};
main();
