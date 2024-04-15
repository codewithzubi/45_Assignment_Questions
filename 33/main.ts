let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let oneNumber of numbers) {
  let ordinalNumbers: string;
  if (oneNumber === 1) {
    ordinalNumbers = "st";
  } else if (oneNumber === 2) {
    ordinalNumbers = "nd";
  } else if (oneNumber === 3) {
    ordinalNumbers = "rd";
  } else {
    ordinalNumbers = "th";
  }
  console.log(`${oneNumber}${ordinalNumbers}`);
}
