function make_shirt(size: string = "Large", message: string = "I love TypeScript"){
console.log(`Creating a ${size} Shirt with ${message} Prints on Shirt`)
}

//call a fincation with the  by-default Vlues
make_shirt();

//calling a funcation with new size and defalut message.
console.log("\n");

make_shirt("Medium");

//calling a funcatio with small size and also different print message
console.log("\n");
make_shirt("Small","I Like Coding");