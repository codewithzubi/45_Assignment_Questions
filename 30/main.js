"use strict";
//Creating Arry
let userName = ["Aqib", "Umaid", "Admin", "Zeeshan", "Amir"];
//using ForEach Loop on Arry.
userName.forEach((onlyOne) => {
    if (onlyOne === "Admin") {
        console.log(`Hello ${onlyOne}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${onlyOne},thank you for logging in again.`);
    }
});
