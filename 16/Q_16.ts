let gestes1 = ["Sir Zia","Sir Syed Hamzah","Ali Raza","Aqib Ali"];

gestes.forEach(guest => console.log(`Hello Salam ${guest} whould you like to dinner with me?`));
console.log("\n");

let notCome1 = gestes[0];
console.log(notCome, "nhii Ah Saka?");

gestes.splice(0, 1, "Zubair Ahmed");
console.log(gestes);

 gestes.forEach(come => console.log(`Hello ${come} whould you like to dinner with me?`));

console.log("\n");

console.log("I have found a bigger dinner table.");

gestes.unshift("Muneeb");
gestes.splice(2, 0, "Amir");
//            index, remove elements or not, replace this element.
gestes.push("awais")

console.log(gestes);

gestes.forEach(newguest => console.log(`Hello ${newguest} whould you like to dinner with me?`));



