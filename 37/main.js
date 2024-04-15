function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " Shirt with ").concat(message, " Prints on Shirt"));
}
//call a fincation with the  by-default Vlues
make_shirt();
//calling a funcation with new size and defalut message.
console.log("\n");
make_shirt("Medium");
//calling a funcatio with small size and also different print message
console.log("\n");
make_shirt("Small", "I Like Coding");
