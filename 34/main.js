var pizzas = ['Pepperoni', 'Margherita', 'Supreme'];
// Print the names of each pizza
console.log("Names of Pizzas:");
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
// Print a sentence for each pizza
console.log("\nStatements about Pizzas:");
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print additional statement about liking pizza
console.log("\nI really love pizza!");
