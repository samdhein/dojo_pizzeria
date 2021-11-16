/* Create a function called PIzzaOven that returns a pizza object. Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]  */

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
        pizza.crust = crustType,
        pizza.sauce = sauceType,
        pizza.cheese = cheeses,
        pizza.toppings = toppings;
        return pizza;
}

var thisPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

console.log(thisPizza);

/* Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]  */

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
        pizza.crust = crustType,
        pizza.sauce = sauceType,
        pizza.cheese = cheeses,
        pizza.toppings = toppings;
        return pizza;
}

var thisPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

console.log(thisPizza);

/* Create 2 more pizzas with any toppings we like! */

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
        pizza.crust = crustType,
        pizza.sauce = sauceType,
        pizza.cheese = cheeses,
        pizza.toppings = toppings;
        return pizza;
}

var firstPizza = pizzaOven("thick", "pesto", ["asiago", "mozzarella"], ["basil", "arugula", "tomatoes"]);

console.log(firstPizza);

var secondPizza = pizzaOven("thin", "white", "cheddar", "mushrooms");

console.log(secondPizza);

/* Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!  */

function randomPizza(crustType, sauceType, cheeses, toppings) {
    var i = Math.floor(Math.random()*3);
    var pizza = {};
        pizza.crust = crustType[i],
        pizza.sauce = sauceType[i],
        pizza.cheese = cheeses[i],
        pizza.toppings = toppings[i];
        return pizza;
}

var randPizza = randomPizza(["thick", "hand tossed", "thin"], ["marinara", "traditional", "pesto"], ["asiago", "parmesan", "mozzarella"], ["mushrooms", "olives", "onions"]);

console.log(randPizza);