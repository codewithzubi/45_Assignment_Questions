//Creating Arry
let userName = ["Aqib", "Umaid", "Admin", "Zeeshan", "Amir"];

let userName = [];

if (userName.length === 0) {
  console.log("Your Arry in Empty need to find some user");
} else {
  userName.forEach((onlyOne) => {
    if (onlyOne === "Admin") {
      console.log(`Hello ${onlyOne}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${onlyOne},thank you for logging in again.`);
    }
  });
}
