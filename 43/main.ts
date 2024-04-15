function show_magicians(magicians: string[]) {
    magicians.forEach((name) => console.log(name));
  }
  
  function make_great(magicians: string[]) {
    return magicians.map((name) => `The Great ${name}`);
  }
  
  let magicians_names = ["Zubair Ahmed", "Ali Raza", "Abid"];

 let copy_magicinas_names = magicians_names.slice();

 let copy_great_magicians = make_great(copy_magicinas_names)

 show_magicians(magicians_names);
  show_magicians(copy_great_magicians);
