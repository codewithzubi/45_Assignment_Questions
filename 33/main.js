var numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 161, 7, 18, 19, 20,
];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalNumbers = void 0;
    if (oneNumber === 1) {
        ordinalNumbers = "st";
    }
    else if (oneNumber === 2) {
        ordinalNumbers = "nd";
    }
    else if (oneNumber === 3) {
        ordinalNumbers = "rd";
    }
    else {
        ordinalNumbers = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalNumbers));
}
