function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

function make_great(magicians: string[]) {
  return magicians.map((name) => `The Great ${name}`);
}

let magicians_names = ["Zubair Ahmed", "Ali Raza", "Abid"];

//let names = show_magicians(magicians_names);
let great_magicians = make_great(magicians_names);

show_magicians(great_magicians);
