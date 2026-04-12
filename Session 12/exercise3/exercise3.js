let count = 0;
let numberA = 2;

while (count < 20) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(numberA); i++) {
    if (numberA % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`Đây là số nguyên tố thứ ${count + 1}: ${numberA}`);
    count++;
  }
  numberA++;
}
