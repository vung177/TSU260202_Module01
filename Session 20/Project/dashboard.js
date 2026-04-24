// Bật trang thêm mới sản phẩm
/*
- Lấy phần tử nút thêm mới
- Lấy phần tử Modal, tạo mới modal của bootstrap
- Đặt sự kiện click vào nút
 */
const btnAddNewProduct = document.getElementById('btnAddNewProduct');
const modalElement = document.getElementById('modalAddProduct');
const myProductModal = new bootstrap.Modal(modalElement);

btnAddNewProduct.addEventListener('click', () => {
  myProductModal.show();
});

// Khi thêm sản phẩm mới, nhưng lại chưa nhập tên và mã sản phẩm
const form = document.getElementById('formAddProduct');
const inputId = document.getElementById('productId');
const inputName = document.getElementById('productName');

// Khi người dùng nhấn submit - Thêm
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const idValue = inputId.value.trim();
  const nameValue = inputName.value.trim();
  let isValid = true;

  // Kiểm tra Mã sản phẩm
  if (idValue === '') {
    showError(inputId, 'errorProductId', 'Mã sản phẩm không được để trống');
    isValid = false;
  } else {
    removeError(inputId, 'errorProductId');
  }

  // Kiểm tra Tên sản phẩm
  if (nameValue === '') {
    showError(
      inputName,
      'errorProductName',
      'Tên sản phẩm không được để trống',
    );
    isValid = false;
  } else {
    removeError(inputName, 'errorProductName');
  }

  // Tiến hành thêm sản phẩm
  if (isValid) {
    const newProduct = {
      id: idValue,
      name: nameValue,
    };
    saveToStorage(newProduct);
    alert('Thêm sản phẩm thành công!');
    form.reset();
  }
});

// Lưu item vào localStorage
const newItems = 'listProduct';

function saveItems() {
  const data = localStorage.getItem(newItems);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function saveToStorage(newProduct) {
  const products = saveItems();
  products.push(newProduct);
  localStorage.setItem(newItems, JSON.stringify(products));
}

// Hiển thị lỗi
function showError(input, errorId, message) {
  input.classList.add('is-invalid');
  const errorElement = document.getElementById(errorId);
  errorElement.innerText = message;
  errorElement.style.display = 'block';
}

// Bỏ hiển thị lỗi
function removeError(input, errorId) {
  input.classList.remove('is-invalid');
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = 'none';
}

const data = JSON.parse(localStorage.getItem('listProduct'));
console.log('Danh sách sản phẩm đang có:', data);
