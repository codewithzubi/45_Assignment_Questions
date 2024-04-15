let gestes = ["Sir Zia","Sir Syed Hamzah","Ali Raza","Aqib Ali"];

gestes.forEach(guest => console.log(`Hello Salam ${guest} whould you like to dinner with me?`));
console.log("\n");

let notCome = gestes[0];
console.log(notCome, "nhii Ah Saka?");

gestes.splice(0, 1, "Zubair Ahmed");
 gestes.forEach(come => console.log(`Hello ${come} whould you like to dinner with me?`))
