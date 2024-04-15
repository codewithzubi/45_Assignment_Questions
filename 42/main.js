function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Zubair Ahmed", "Ali Raza", "Abid"];
//let names = show_magicians(magicians_names);
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
