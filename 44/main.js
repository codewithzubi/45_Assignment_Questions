function makeSandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Sandwiches With the following Items");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("Now Enjoy SandWhiche\n");
}
makeSandwiches("Chicken", "Cheese", "Egg", "Mayo ");
makeSandwiches("batter", "Bread");
makeSandwiches("Chicken", "Cheese", "Egg", "Mayo", "batter", "Bread");
