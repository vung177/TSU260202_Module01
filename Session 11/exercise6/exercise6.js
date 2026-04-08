let a = Number(prompt('Mời bạn nhập vào số a: '));
let b = Number(prompt('Mời bạn nhập vào số b: '));

// Phép tính này chỉ là ký tự, không phải là phép tính thực sự, cần phối hợp với hàm if/else hoặc switch để thực hiện các phép tính tương ứng
let x = prompt('Mời bạn nhập vào phép tính (+, -, *, /): ');
let result;

switch (x) {
  case '+':
    result = a + b;
    alert(`Kết quả phép tính là: ${a} + ${b} = ${result}`);
    break;
  case '-':
    result = a - b;
    alert(`Kết quả phép tính là: ${a} - ${b} = ${result}`);
    break;
  case '*':
    result = a * b;
    alert(`Kết quả phép tính là: ${a} * ${b} = ${result}`);
    break;
  case '/':
    if (b === 0) {
      alert('Lỗi: Không thể chia cho 0');
    } else {
      result = a / b;
      alert(`Kết quả phép tính là: ${a} / ${b} = ${result}`);
    }
    break;
  default:
    alert('Lỗi: Phép tính chưa hợp lệ');
}
