// Nhận chỉ số chiều cao và cân nặng từ người dùng
let numWeights = Number(prompt('Cân nặng của bạn là bao nhiêu kg?'));
let numHeights = Number(prompt('Chiều cao của bạn là bao nhiêu cm?'));

// Đổi chiều cao từ cm sang m để tính BMI
let numHeightsInMeters = numHeights / 100;

// Tính chỉ số BMI - làm tròn 1 số thập phân toFixed(1)
let numBMI = (numWeights / (numHeightsInMeters * numHeightsInMeters)).toFixed(
  1,
);

// Tiêu chuẩn WHO về BMI
if (numBMI < 18.5) {
  alert('Tiêu chuẩn WHO về BMI:Cân nặng thấp!');
} else if (numBMI >= 18.5 && numBMI < 25) {
  alert('Tiêu chuẩn WHO về BMI: Cân nặng bình thường!');
} else if (numBMI === 25) {
  alert('Tiêu chuẩn WHO về BMI: Thừa cân!');
} else if (numBMI >= 25 && numBMI < 30) {
  alert('Tiêu chuẩn WHO về BMI: Tiền béo phì!');
} else if (numBMI >= 30 && numBMI < 35) {
  alert('Tiêu chuẩn WHO về BMI: Béo phì độ 1!');
} else if (numBMI >= 35 && numBMI < 40) {
  alert('Tiêu chuẩn WHO về BMI: Béo phì độ 2!');
} else {
  alert('Tiêu chuẩn WHO về BMI: Béo phì độ 3!');
}

// Tiêu chuẩn IDI và WPRO
if (numBMI < 18.5) {
  alert('Tiêu chuẩn IDI và WPRO: Cân nặng thấp!');
} else if (numBMI >= 18.5 && numBMI < 23) {
  alert('Tiêu chuẩn IDI và WPRO: Cân nặng bình thường!');
} else if (numBMI === 23) {
  alert('Tiêu chuẩn IDI và WPRO: Thừa cân!');
} else if (numBMI >= 23 && numBMI < 25) {
  alert('Tiêu chuẩn IDI và WPRO: Tiền béo phì!');
} else if (numBMI >= 25 && numBMI < 30) {
  alert('Béo phì độ 1!');
} else {
  alert('Tiêu chuẩn IDI và WPRO: Béo phì độ 2!');
}
