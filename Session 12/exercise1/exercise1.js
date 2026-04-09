// Bài 1: Kiểm tra số a có chia hết cho b hay không, hiển thị ra thông báo console
let numberA = Number(prompt('Nhập số a: '));
let numberB = Number(prompt('Nhập số b: '));
if (numberA % numberB === 0) {
  console.log(`${numberA} chia hết cho ${numberB}`);
} else {
  console.log(`${numberA} không chia hết cho ${numberB}`);
}

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10
let numberAge = Number(prompt('Nhập tuổi của học sinh: '));
if (numberAge < 15) {
  console.log('Học sinh không đủ điều kiện vào học lớp 10');
} else {
  console.log('Học sinh đủ điều kiện vào học lớp 10');
}

// // Bài 3: Nhập một số nguyên bất kỳ và in ra kết quả ra màn hình số đó là lớn hơn hay nhỏ hơn 0
let numberC = Number(prompt('Nhập một số nguyên: '));
if (numberC > 0) {
  console.log(`${numberC} là số lớn hơn 0`);
} else if (numberC < 0) {
  console.log(`${numberC} là số nhỏ hơn 0`);
} else {
  console.log('Bạn chưa nhập số hoặc dữ liệu bạn nhập không phải là số');
}

// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
let numberD = Number(prompt('Nhập số nguyên thứ nhất:'));
let numberE = Number(prompt('Nhập số nguyên thứ hai: '));
let numberF = Number(prompt('Nhập số nguyên thứ ba: '));
let maxNumber = numberD;

if (numberE > maxNumber) {
  maxNumber = numberE;
}

if (numberF > maxNumber) {
  maxNumber = numberF;
}
console.log(`Số nguyên lớn nhất là: ${maxNumber}`);

// Bài 5: Xếp hạng học lực của học sinh dựa trên điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ (Xuất sắc: 9-10, Giỏi: 8-8.9, Khá: 7-7.9, Trung bình: 5-6.9, Yếu: dưới 5)
let testScore = Number(prompt('Nhập điểm bài kiểm tra: ')).toFixed(1);
let midtermScore = Number(prompt('Nhập điểm thi giữa kỳ: ')).toFixed(1);
let finalExamScore = Number(prompt('Nhập điểm thi cuối kỳ: ')).toFixed(1);

// Có gợi ý về parseFloat thay Number vì parseFloat sẽ giữ nguyên phần thập phân, trong khi Number có thể làm tròn số nếu có phần thập phân

let averageScore = ((testScore + midtermScore + finalExamScore) / 3).toFixed(1);
if (averageScore >= 9 && averageScore <= 10) {
  console.log('Học lực: Xuất sắc');
} else if (averageScore >= 8 && averageScore < 9) {
  console.log('Học lực: Giỏi');
} else if (averageScore >= 7 && averageScore < 8) {
  console.log('Học lực: Khá');
} else if (averageScore >= 5 && averageScore < 7) {
  console.log('Học lực: Trung bình');
} else {
  console.log('Học lực: Yếu');
}
