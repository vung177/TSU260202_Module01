// Bài 1: Chuyển từ độ C sang độ F
let celsius = Number(prompt('Nhập nhiệt độ (độ C): '));

if (isNaN(celsius)) {
  console.log('Vui lòng nhập nhiệt độ hợp lệ.');
} else {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius} độ C = ${fahrenheit} độ F`);
}

// Bài 2: Chuyển từ mét sang feet
let meters = Number(prompt('Nhập chiều dài (mét): '));
if (isNaN(meters)) {
  console.log('Vui lòng nhập chiều dài hợp lệ.');
} else {
  let feet = meters * 3.28084;
  console.log(`${meters} mét = ${feet} feet`);
}

// Bài 3: Tính diện tích hình vuông khi biết cạnh a
let side = Number(prompt('Nhập độ dài cạnh hình vuông (a): '));
if (isNaN(side)) {
  console.log('Vui lòng nhập độ dài hợp lệ.');
} else if (side <= 0) {
  console.log('Độ dài cạnh phải lớn hơn 0.');
} else {
  let areaSquare = side * side;
  console.log(`Diện tích hình vuông với cạnh ${side} là: ${areaSquare}`);
}

// Bài 4: Tính diện tích hình chữ nhật khi biết chiều dài 2 cạnh c và d
let numberC = Number(prompt('Nhập chiều dài cạnh a của hình chữ nhật: '));
let numberD = Number(prompt('Nhập chiều dài cạnh b của hình chữ nhật: '));

if (isNaN(numberC) || isNaN(numberD)) {
  console.log('Vui lòng nhập chiều dài cho 2 cạnh hợp lệ.');
} else if (numberC <= 0 || numberD <= 0) {
  console.log('Chiều dài các cạnh phải lớn hơn 0.');
} else {
  let areaRectangle = numberC * numberD;
  console.log(
    `Diện tích hình chữ nhật với cạnh a = ${numberC} và cạnh b = ${numberD} là: ${areaRectangle}`,
  );
}

// Bài 5: Tính diện tích tam giác vuông khi biết 2 cạnh kề e và f
let sideE = Number(prompt('Nhập độ dài cạnh a của tam giác vuông: '));
let sideF = Number(prompt('Nhập độ dài cạnh b của tam giác vuông: '));

if (isNaN(sideE) || isNaN(sideF)) {
  console.log('Vui lòng nhập độ dài cho 2 cạnh hợp lệ.');
} else if (sideE <= 0 || sideF <= 0) {
  console.log('Độ dài các cạnh phải lớn hơn 0.');
} else {
  let areaTriangle = (sideE * sideF) / 2;
  console.log(
    `Diện tích tam giác vuông với cạnh a = ${sideE} và cạnh b = ${sideF} là: ${areaTriangle}`,
  );
}

// Bài 6: Giải phương trình bậc 1 ax + b = 0
let a = Number(prompt('Nhập hệ số a: '));
let b = Number(prompt('Nhập hệ số b: '));
if (isNaN(a) || isNaN(b)) {
  console.log('Vui lòng nhập hệ số a và b hợp lệ.');
} else if (a === 0) {
  if (b === 0) {
    console.log('Phương trình có vô số nghiệm.');
  }
} else if (a === 0) {
  console.log('Phương trình vô nghiệm.');
} else if (a !== 0) {
  let x = -b / a;
  console.log(`Nghiệm của phương trình ${a}x + ${b} = 0 là: x = ${x}`);
} else {
  console.log('Phương trình có vô số nghiệm.');
}

// Bài 7: Giải phương trình bậc 2 ax^2 + bx + c = 0
let numberAA = parseFloat(prompt('Nhập hệ số a: '));
let numberBB = parseFloat(prompt('Nhập hệ số b: '));
let numberCC = parseFloat(prompt('Nhập hệ số c: '));

if (isNaN(numberAA) || isNaN(numberBB) || isNaN(numberCC)) {
  console.log('Vui lòng nhập hệ số a,b,c hợp lệ. ');
} else if (numberAA === 0) {
  if (numberBB === 0) {
    if (numberCC === 0) {
      console.log('Phương trình có vô số nghiệm.');
    } else {
      console.log('Phương trình vô nghiệm.');
    }
  } else {
    let result = -numberCC / numberBB;
    console.log(`Phương trình có nghiệm x = ${result}`);
  }
} else {
  let delta = numberBB * numberBB - 4 * numberAA * numberCC;
  if (delta < 0) {
    console.log('Phương trình vô nghiệm.');
  } else if (delta === 0) {
    let resultA = -numberBB / (2 * numberAA);
    console.log(`Phương trình có nghiệm kép x = ${resultA}`);
  } else {
    let resultB = (-numberBB + Math.sqrt(delta)) / (2 * numberAA);
    let resultC = (-numberBB - Math.sqrt(delta)) / (2 * numberAA);
    console.log(
      `Phương trình có 2 nghiệm phân biệt: x1 = ${resultB} và x2 = ${resultC}`,
    );
  }
}

// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không (điều kiện: một số nguyên là tuổi của một người khi nhỏ hơn 120 và lớn hơn 0)

let inputAge = parseFloat(prompt(' Hãy nhập tuổi của bạn: '));
if (isNaN(inputAge)) {
  console.log('Hãy nhập số tuổi hợp lệ');
} else if (!Number.isInteger(inputAge)) {
  console.log('Hãy nhập lại số tuổi hợp lệ');
} else if (inputAge > 0 && inputAge < 120) {
  console.log(
    `Số tuổi bạn nhập (${inputAge}) là số tuổi hợp lệ của một người.`,
  );
} else {
  console.log(
    `Số tuổi bạn nhập (${inputAge}) không phải là số tuổi hợp lệ của một người.`,
  );
}
