function makeSandwiches(...items:string[]){
    
    console.log("Making a Sandwiches With the following Items");
    items.forEach(singleItem => console.log(singleItem));
    console.log("Now Enjoy SandWhiche\n");
}

makeSandwiches("Chicken","Cheese","Egg","Mayo ");


makeSandwiches("batter","Bread")

makeSandwiches("Chicken","Cheese","Egg","Mayo","batter","Bread")