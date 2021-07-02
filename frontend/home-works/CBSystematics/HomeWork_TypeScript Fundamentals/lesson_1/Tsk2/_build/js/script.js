var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Big"] = 25] = "Big";
})(Size || (Size = {}));
var Adds;
(function (Adds) {
    Adds[Adds["chocolate"] = 5] = "chocolate";
    Adds[Adds["caramel"] = 6] = "caramel";
    Adds[Adds["berries"] = 10] = "berries";
})(Adds || (Adds = {}));
var marshmallows = 5;
var main = function () {
    var ask = prompt("Hello! What size of ice cream do you want?\nWrite down\nSmall or Big", "Big");
    switch (ask) {
        case "Small":
            alert("It`s cost " + Size.Small + " hrivnas");
            break;
        case "Big":
            var tmp = Size.Big;
            var ask2 = prompt("You must add something to big, we have:\nchocolate, caramel, berries", "berries");
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
            var ask3 = confirm("If you want you can add marshmallows?");
            ask3 ? (tmp += marshmallows) : null;
            alert("Price of your ice cream " + tmp + " hrivnas\n Have a nice day!");
            break;
        default:
            alert("Wrong Answer!");
            break;
    }
};
main();
//# sourceMappingURL=script.js.map