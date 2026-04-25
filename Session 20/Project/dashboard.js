// Mở tab Thêm mới danh mục
const btnAddNewCategory = document.getElementById('btnAddNewCategory');
const modalCategory = document.getElementById('idModalAddCategory');
const myCategoryModal = new bootstrap.Modal(modalCategory);

btnAddNewCategory.addEventListener('click', () => {
  myCategoryModal.show();
});

// Kiểm tra việc Thêm mới danh mục, tên danh mục và mã danh mục có để trống hay không.
const categoryForm = document.getElementById('formAddCategory');
const inputIdCategory = document.getElementById('category-id');
const inputNameCategory = document.getElementById('category-name');

categoryForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const categoryIdValue = inputIdCategory.value.trim();
  const categoryNameValue = inputNameCategory.value.trim();
  let isValid = true;
  if (categoryIdValue === '') {
    showError(
      inputIdCategory,
      'errorCategoryId',
      'Mã danh mục không được để trống',
    );
    isValid = false;
  } else {
    removeError(inputIdCategory, 'errorCategoryId');
  }
  if (categoryNameValue === '') {
    showError(
      inputNameCategory,
      'errorCategoryName',
      'Tên danh mục không được để trống',
    );
    isValid = false;
  } else {
    removeError(inputNameCategory, 'errorCategoryName');
  }

  if (isValid) {
    const newCategory = {
      id: categoryIdValue,
      name: categoryNameValue,
    };
    saveToStorage(newCategory);
    alert('Thêm danh mục thành công!');
    categoryForm.reset();
    closeModal('idModalAddCategory');
  }
});

// Cập nhật danh mục
const modalUpdateCategory = document.getElementById('idModalUpdateCategory');
const myNewCategoryModal = new bootstrap.Modal(modalUpdateCategory);

document.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('btn-update-category') ||
    event.target.closest('.btn-update-category')
  ) {
    myNewCategoryModal.show();
  }
});

// Mở tab thêm mới sản phẩm
const btnAddNewProduct = document.getElementById('btnAddNewProduct');
const modalElement = document.getElementById('modalAddProduct');
const myProductModal = new bootstrap.Modal(modalElement);

btnAddNewProduct.addEventListener('click', () => {
  myProductModal.show();
});

// Cập nhật sản phẩm
/*
- Vì là chỉnh sửa sản phẩm (có rất nhiều sản phẩm), nên không thể làm theo item (ID), mà nên làm theo class
- Cần lấy thông tin vào tất cả thông tin trong tài liệu document
- Đặt sự kiện click (gián tiếp) vào phần document có chứa btn-update-product
*/
const modalUpdateElement = document.getElementById('modalUpdateProduct');
const myNewProductModal = new bootstrap.Modal(modalUpdateElement);

document.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('btn-update-product') ||
    event.target.closest('.btn-update-product') //Bắt buộc
  ) {
    myNewProductModal.show();
  }
});

// Kiểm tra Tên sản phẩm hay Mã sản phẩm đã được nhập hay chưa
const addForm = document.getElementById('formAddProduct');
const inputId = document.getElementById('productId');
const inputName = document.getElementById('productName');

// Khi người dùng nhấn submit - Thêm
addForm.addEventListener('submit', (event) => {
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
    addForm.reset();
    closeModal('modalAddProduct');
  }
});

// Cập nhật hay chỉnh sửa thông tin sản phẩm
const updateForm = document.getElementById('updateProduct');
const inputUpdateId = document.getElementById('updateProductId');
const inputUpdateName = document.getElementById('updateProductName');

updateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const idUpdateValue = updateProductId.value.trim();
  const nameUpdateValue = updateProductName.value.trim();
  let isValid = true;
  if (idUpdateValue == '') {
    showError(
      inputUpdateId,
      'errorUpdateProductId',
      'Mã sản phẩm không được để trống',
    );
    isValid = false;
  } else {
    removeError(inputUpdateId, 'errorUpdateProductId');
  }
  if (nameUpdateValue == '') {
    showError(
      inputUpdateName,
      'errorUpdateProductName',
      'Tên sản phẩm không được để trống',
    );
    isValue = false;
  } else {
    removeError(inputUpdateName, 'errorUpdateProductName');
  }
  if (isValid) {
    alert('Cập nhật sản phẩm thành công!');
    updateForm.reset();
    closeModal('modalUpdateProduct');
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

const data = JSON.parse(localStorage.getItem('listProduct'));

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

// Hàm tự đóng Modal
function closeModal(modalID) {
  const modalElement = document.getElementById(modalID);
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
}
