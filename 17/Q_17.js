"use strict";
let gestes2 = ["Sir Zia", "Sir Syed Hamzah", "Ali Raza", "Aqib Ali"];
gestes2.forEach(guest => console.log(`Hello Salam ${guest} whould you like to dinner with me?`));
console.log("\n");
let notcome2 = gestes2[0];
console.log(notcome2, "nhii Ah Saka?");
gestes2.splice(0, 1, "Zubair Ahmed");
console.log(gestes2);
gestes2.forEach(come => console.log(`Hello ${come} whould you like to dinner with me?`));
console.log("\n");
console.log("I have found a bigger dinner table.");
gestes2.unshift("Muneeb");
gestes2.splice(2, 0, "Amir");
//            index, remove elements or not, replace this element.
gestes2.push("awais");
console.log(gestes2);
gestes2.forEach(newguest => console.log(`Hello ${newguest} whould you like to dinner with me?`));
console.log("\n");
console.log("I can invite only two people for dinner");
console.log("\n");
while (gestes2.length > 2) {
    let remove = gestes2.pop();
    console.log(`Sorry ${remove}, i can't invite you on dinner.`);
}
console.log("\n");
gestes2.forEach(twoguest => console.log(`hellow dear ${twoguest}, you are still invited for the dinner`));
console.log("\n");
gestes2.pop();
gestes2.pop();
console.log("finally empty list", gestes2);
