// Bài 1 in dãy số Fibonacci
let a = 0;
let b = 1;
for (let i = 1; i <= 20; i++) {
  console.log(`Đây là số Fibonacci thứ ${i}: ` + a);
  let c = a + b;
  a = b;
  b = c;
}

// Bài 2: Tính giai thừa của một số nguyên dương
let d = parseInt(
  prompt('Hãy nhập số nguyên dương mà bạn muốn tính giai thừa: '),
);
while (isNaN(d)) {
  alert(`Vui lòng nhập lại số nguyên dương hợp lệ.`);
  d = parseInt(prompt('Hãy nhập số nguyên dương mà bạn muốn tính giai thừa: '));
}
let sum = 1;
for (let i = 1; i <= d; i++) {
  sum *= i;
}
console.log(`Đây là giai thừa của số nguyên dương mà bạn muốn tính: ` + sum);

// Bài 3: In tam giác vuông bằng dấu sao
// Tam giác vuông bên trái
let n = parseFloat(prompt('Hãy nhập số hàng của tam giác mà bạn muốn xây.'));
while (isNaN(n) || n <= 0) {
  alert('Hãy nhập lại số hợp lệ');
  n = parseFloat(prompt('Hãy nhập số hàng của tam giác mà bạn muốn xây.'));
}

let result = '';

for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  result += row + '\n';
}
console.log(result);

// Tam giác vuông ngược bên trái
let m = parseFloat(prompt('Hãy nhập số hàng của tam giác mà bạn muốn xây.'));
while (isNaN(m) || m <= 0) {
  alert('Hãy nhập lại số hợp lệ');
  m = parseFloat(prompt('Hãy nhập số hàng của tam giác mà bạn muốn xây.'));
}

let resultLeft = '';

for (let i = m; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  resultLeft += row + '\n';
}
console.log(resultLeft);

// Tam giác vuông bên phải
let triangleR = parseFloat(
  prompt('Hãy nhập số hàng của tam giác mà bạn muốn xây.'),
);
while (isNaN(triangleR) || triangleR <= 0) {
  alert('Hãy nhập lại số hợp lệ');
  triangleR = parseFloat(
    prompt('Hãy nhập số hàng của tam giác mà bạn muốn xây.'),
  );
}

let resultTR = '';
for (let i = 1; i <= triangleR; i++) {
  let row = '';

  for (let j = 1; j <= triangleR - i; j++) {
    row += ' ';
  }
  for (let k = 1; k <= i; k++) {
    row += '*';
  }
  resultTR += row + '\n';
}
console.log(resultTR);

// Tam giác vuông ngược bên phải
let triangleRR = parseFloat(
  prompt('Hãy nhập số hàng của tam giác mà bạn muốn xây.'),
);
while (isNaN(triangleRR) || triangleRR <= 0) {
  alert('Hãy nhập lại số hợp lệ');
  triangleRR = parseFloat(
    prompt('Hãy nhập số hàng của tam giác mà bạn muốn xây.'),
  );
}
let resultTRR = '';
for (let i = triangleRR; i >= 1; i--) {
  let row = '';

  for (let j = 1; j <= triangleRR - i; j++) {
    row += ' ';
  }
  for (let k = 1; k <= i; k++) {
    row += '*';
  }
  resultTRR += row + '\n';
}
console.log(resultTRR);

// Bài 4: In hình chữ nhật rỗng
let widthRectangle = parseFloat(prompt('Hãy nhập chiều dài: '));
let heightRectangle = parseFloat(prompt('Hãy nhập chiều rộng: '));

while (isNaN(widthRectangle) || isNaN(heightRectangle)) {
  if (isNaN(widthRectangle) || widthRectangle <= 0) {
    alert('Hãy nhập lại giá trị chiều dài hợp lệ');
    widthRectangle = parseFloat(prompt('Hãy nhập chiều dài: '));
  }
  if (isNaN(heightRectangle) || heightRectangle <= 0) {
    alert('Hãy nhập lại giá trị chiều rộng hợp lệ');
    heightRectangle = parseFloat(prompt('Hãy nhập chiều rộng: '));
  }
}

let resultRectangle = '';

for (let i = 1; i <= heightRectangle; i++) {
  let row = '';
  for (let j = 1; j <= widthRectangle; j++) {
    if (i === 1 || i === heightRectangle || j === 1 || j === widthRectangle) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  resultRectangle += row + '\n';
}
console.log(resultRectangle);

// Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi suất hàng tháng.
let moneyStart = parseFloat(prompt('Hãy nhập số tiền ban đầu: '));
let monthForLend = parseFloat(prompt('Hãy nhập số tháng  cần vay: '));
let interestInMonth = parseFloat(prompt('Hãy nhập lãi suất: '));

while (
  isNaN(moneyStart) ||
  moneyStart < 0 ||
  isNaN(monthForLend) ||
  monthForLend < 0 ||
  isNaN(interestInMonth) ||
  interestInMonth < 0
) {
  if (isNaN(moneyStart) || moneyStart < 0) {
    alert('Vui lòng nhập số tiền muốn vay hợp lệ!');
    moneyStart = parseFloat(prompt('Hãy nhập số tiền ban đầu: '));
  }
  if (isNaN(monthForLend) || monthForLend < 0) {
    alert('Vui lòng nhập tháng muốn vay hợp lệ!');
    monthForLend = parseFloat(prompt('Hãy nhập số tháng  cần vay: '));
  }
  if (isNaN(interestInMonth) || interestInMonth < 0) {
    alert('Vui lòng nhập lãi suất hợp lệ!');
    interestInMonth = parseFloat(prompt('Hãy nhập lãi suất: '));
  }
}

let moneyTotal = moneyStart;

for (let i = 1; i <= monthForLend; i++) {
  let thisMonthInterest = moneyTotal * (interestInMonth / 100);
  moneyTotal += thisMonthInterest;
  console.log(
    `Tháng thứ ${i} - Tiền lãi sinh ra là ${thisMonthInterest.toFixed(2)}, Dư nợ là ${moneyTotal.toFixed(2)}`,
  );
}

console.log(`Sau ${monthForLend} tháng - Dư nợ sẽ là ${moneyTotal.toFixed(2)}`);
