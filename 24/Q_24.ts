let banana = "banana";
let upercaseApple = "APPLE";
let five = 5;
let ten = 10;
let cars = ["Mehran", "ALTO", "Revo"];
//Test for equality and inequality with string
console.log("\n IS BANANA EQUL TO BANANA");
console.log(banana === "banana");

console.log("\n Is Banana not equal to Banana");
console.log(banana != banana);

//Tests using the lower case function
console.log("\n Is APPLE is equal to apple after converting to lowercase");
console.log(upercaseApple.toLowerCase() == "apple");

console.log("\n Is APPLE is not equal to apple after converting to lowercase");
console.log(upercaseApple.toLowerCase() != "apple");

// Numerical tests
//Equal to
console.log("\n Is Five equal to Ten");
console.log(five == ten);

//Not Equal to
console.log("\n Is Five not equal to Ten");
console.log(five != ten);

//Greater than
console.log("\nTen is greater than to Five");
console.log(ten > five);

//Less than
console.log("\n Ten is Less than five");
console.log(ten < five);

//Greater than equal to
console.log("\n Is Ten Greater equal to five");
console.log(ten >= five);

//Less than equal to
console.log("\n Is Ten Less than equal to five");
console.log(ten <= five);

//Tests using "and" and "or" operators

//Test using &&
console.log("\n Is 5 Equal to 10 and 5 is Not Equal to 5");
console.log(five > 10 && five != 5);

//Test using ||
console.log("\n is 5 less then to 10 OR 5 Equal to 5 ");
console.log(five < 10 || five == 5);

//Test whether an item is in a array

console.log("\n Is VGO Include in my cars arry");
console.log(cars.includes("Mehran"));

console.log("\n Is Revo not Include in my cars arry");
console.log(!cars.includes("Revo"));
