/**
 * Exercise!
 *
 * Let's try creating some interfaces and classes!
 * Imagine you are the owner of a pizzaria. You would need to create pizzas!
 * First, create a template for pizzas on the menu. Each pizza should have a name and a list (or array) of toppings!
 *
 * Then, because we are in the future, we can just create a pizza maker!
 * Try creating a class of PizzaMaker which has a list of pizzas on the menu (which we will call menu for short),
 * and a function to create a pizza! This `create` function should have a name as an input
 * and return an object with the name and its toppings as an output.
 */
interface Pizza{
    name: string;
    toppings: string[]
}
// Pizza below is to tell that the datatype is Pizza not 'any'
const hawaiian: Pizza = {
    name: "hawaiian", 
    toppings: ["pineapple", "ham", "cheese"]
}
console.log(`the toppings in ${hawaiian.name} pizza are:`)
for (let topping of hawaiian.toppings){
    console.log(topping)
}



class PizzaMaker{
    constructor(public menu: Pizza[] = []){}
    public makePizza(name: string){
        let foundPizza = this.menu.find((value) => value.name === name)
        if (foundPizza){
            console.log(`here's your ${foundPizza.name} pizza: ${foundPizza.toppings.join(", ")}`)
        }else{
            console.log(`sorry we cannot serve ${name} here`)
        }
    }
}
const meenicha = new PizzaMaker([hawaiian])
meenicha.makePizza(`hawaiian`)
meenicha.makePizza(`fourcheese`)