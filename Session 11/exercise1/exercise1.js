let checkYear = Number(prompt('Enter a year: '));
if (checkYear % 4 === 0 && checkYear % 100 !== 0) {
  console.log(checkYear + ' is a leap year.');
} else if (checkYear % 100 === 0 && checkYear % 400 === 0) {
  console.log(checkYear + ' is a leap year.');
} else {
  console.log(checkYear + ' is not a leap year.');
}
