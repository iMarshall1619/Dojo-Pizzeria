function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.Crust = crust;
    pizza.Sauce = sauce;
    pizza.Cheese = cheese;
    pizza.Toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven('deep dish', 'traditional', 'mozzarella', 'pepperoni, sausage');
var p2 = pizzaOven('hand tossed', 'marinara', 'mozzarella, feta', 'mushrooms, olives, onions');
var p3 = pizzaOven('original pan', 'alfredo', 'mozzarella, provolone', 'pepperoni, chicken, bacon')
var p4 = pizzaOven('thin crust', 'bbq', 'mozzarella, monterey jack', 'chicken, onions, spinach')
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);



function randomPizza() {
    var crustO = ['deep dish', 'hand tossed', 'original pan', 'thin crust'];
    var sauceO = ['traditional', 'marinara', 'alfredo', 'bbq'];
    var cheeseO = ['mozzarella', 'feta', 'provolone', 'monterey jack'];
    var toppingsO = ['pepperoni', 'sausage', 'chicken', 'bacon', 'mushrooms', 'olives', 'onions', 'spinach'];
    var pizza = {};
    pizza.Crust = crust();
    pizza.Sauce = sauce();
    pizza.Cheese = cheese();
    pizza.Toppings = toppings();
    return pizza;

    function crust() {
        var roll = Math.random() * crustO.length;
        roll = Math.floor(roll);
        if(roll == 0){
        roll++;
        }
        return crustO[roll];
    }
    
    function sauce() {
        var roll = Math.random() * sauceO.length;
        roll = Math.floor(roll);
        if(roll == 0){
        roll++;
        }
        return sauceO[roll];
    }
    
    function cheese() {
        var roll = Math.random() * cheeseO.length;
        roll = Math.floor(roll);
        if(roll == 0){
        roll++;
        }
        return cheeseO[roll];
    }

    function toppings() {
        var roll = Math.random() * toppingsO.length;
        roll = Math.floor(roll);
        if(roll == 0){
        roll++;
        }
        return toppingsO[roll];
    }
}
var result = randomPizza();
console.log(result)