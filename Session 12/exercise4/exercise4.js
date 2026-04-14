// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100, khi số là 99 thì hiển thị hộp thoại thông báo là đã hoàn thành
for (let i = 1; i <= 100; i++) {
  if (i === 99) {
    console.log('Đã hoàn thành');
  }
}

// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào hơn 100, yêu cầu người dùng giảm nhiệt độ, nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ
let temperature = parseFloat(prompt('Hãy nhập nhiệt độ hiện tại: '));

if (isNaN(temperature)) {
  console.log('Vui lòng nhập nhiệt độ hợp lệ.');
} else {
  while (temperature > 100 || temperature < 20) {
    if (temperature > 100) {
      console.log('Nhiệt độ quá cao, vui lòng giảm nhiệt độ.');
    } else if (temperature < 20) {
      console.log('Nhiệt độ quá thấp, vui lòng tăng nhiệt độ.');
    }
    temperature = parseFloat(prompt('Vui lòng nhập lại nhiệt độ'));
  }
  console.log('Nhiệt độ hiện tại bình thường');
}

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên
let a = 0;
let b = 1;
for (let i = 0; i < 20; i++) {
  console.log(`Đây là số fibonacci thứ ${i}: ` + a);
  let c = a + b;
  a = b;
  b = c;
}

// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5
let e = 0;
let f = 1;

while (true) {
  let g = e + f;
  e = f;
  f = g;
  if (e % 5 === 0) {
    console.log(`Đây là số đầu tiên trong dãy fibonacci chia hết cho 5: ${e}`);
    break;
  }
}

// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
let h = 0;
let k = 1;
let sum = 0;

for (let i = 0; i < 20; i++) {
  sum += h;
  let t = h + k;
  h = k;
  k = t;
}

console.log(`Đây là tổng của 20 số đầu tiên trong dãy fibonacci: ${sum}`);

// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let total = 0;
for (let i = 1; i <= 30; i++) {
  total += i * 7;
}
console.log(
  `Đây là tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên: ${total}`,
);

// Bài 7 Hãy viết một chương trình in ra các số từ 1 đến 100, nếu số chia hết cho 3 thì in ra 'Fizz', 5 thì in ra 'Buzz' thay vì in ra số đó, nếu chia hết cho cả 3 và 5 thì in ra 'FizzBuzz'
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else {
    console.log(`Đây là số ${i}`);
  }
}
