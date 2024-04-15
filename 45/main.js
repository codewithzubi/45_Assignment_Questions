"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let my_car = create_car("Toyota", "corrolla", "color:Black", "sunroof:True");
console.log(my_car);
