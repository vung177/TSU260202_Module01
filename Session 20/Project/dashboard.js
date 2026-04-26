// Nếu có dữ liệu mẫu thì thêm ở đây
let listProducts = JSON.parse(localStorage.getItem('listProducts'));
if (!listProducts) {
  listProducts = [];
}
localStorage.setItem('listProducts', JSON.stringify(listProducts));

const btnAddNewCategory = document.getElementById('btnAddNewCategory');
const modalCategory = document.getElementById('idModalAddCategory');
const categoryAddModal = new bootstrap.Modal(modalCategory);

// Mở Thêm mới danh mục
btnAddNewCategory.addEventListener('click', () => {
  categoryAddModal.show();
});

const categoryForm = document.getElementById('formAddCategory');
const inputIdCategory = document.getElementById('category-id');
const inputNameCategory = document.getElementById('category-name');

// Kiếm tra tên hay mã danh mục có để trống hay không
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
    // saveToStorage(newCategory);
    alert('Thêm danh mục thành công!');
    categoryForm.reset();
    closeModal('idModalAddCategory');
  }
});

const modalUpdateCategory = document.getElementById('idModalUpdateCategory');
const categoryUpdateModal = new bootstrap.Modal(modalUpdateCategory);

// Mở cập nhật danh mục
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn-update-category');
  if (btn) {
    categoryUpdateModal.show();
  }
});

const btnAddNewProduct = document.getElementById('btnAddNewProduct');
const modalElement = document.getElementById('modalAddProduct');
const productAddModal = new bootstrap.Modal(modalElement);

// Mở tab thêm mới sản phẩm
btnAddNewProduct.addEventListener('click', () => {
  productAddModal.show();
  removeError(inputId, 'errorProductId');
  removeError(inputName, 'errorProductName');
});

// Thêm sản phẩm mới
const addForm = document.getElementById('formAddProduct');
const inputId = document.getElementById('productId');
const inputName = document.getElementById('productName');
const inputCategory = document.getElementById('productCategory');
const inputQuantity = document.getElementById('productQuantity');
const inputPrice = document.getElementById('productPrice');
const inputDiscount = document.getElementById('productDiscount');
const inputImg = document.getElementById('productImg');
const inputDescription = document.getElementById('productDescription');

// Khi người dùng nhấn submit - Thêm
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const statusChecked = document.querySelector(
    'input[name="productStatus"]:checked',
  );

  // Lấy trạng thái từ thông tin đăng nhập của người dùng
  let statusSelected;
  if (statusChecked) {
    statusSelected = statusChecked.value;
  } else {
    statusSelected = 'active';
  }

  const idValue = inputId.value.trim();
  const nameValue = inputName.value.trim();
  const categoryValue = inputCategory.value.trim();
  const quantityValue = inputQuantity.value.trim();
  const priceValue = inputPrice.value.trim();
  const discountValue = inputDiscount.value.trim();
  const imgValue = inputImg.value.trim();
  const descriptionValue = inputDescription.value.trim();

  let isValid = true;

  // Kiểm tra Mã sản phẩm
  if (idValue === '') {
    showError(inputId, 'errorProductId', 'Mã sản phẩm không được để trống');
    isValid = false;
  } else {
    removeError(inputId, 'errorProductId');
  }

  let checkId = listProducts.some((checkInputId) => {
    return checkInputId.id === idValue;
  });

  if (checkId) {
    alert('ID hoặc tên sản phẩm bị trùng, vui lòng nhập lại!');
    return;
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
    let newProduct = {
      id: idValue,
      name: nameValue,
      category: categoryValue,
      stock: Number(quantityValue),
      price: Number(priceValue),
      discount: Number(discountValue),
      img: imgValue,
      status: statusSelected,
      description: descriptionValue,
    };
    listProducts.push(newProduct);
    localStorage.setItem('listProducts', JSON.stringify(listProducts));
    alert('Thêm sản phẩm thành công!');
    renderProducts(listProducts);
    addForm.reset();
    closeModal('modalAddProduct');
  }
});

// Mở tab cập nhật sản phẩm
const modalUpdateElement = document.getElementById('modalUpdateProduct');
const productUpdateModal = new bootstrap.Modal(modalUpdateElement);

document.addEventListener('click', function (event) {
  const btn = event.target.closest('.btn-update-product');
  if (btn) {
    productUpdateModal.show();
    removeError(inputUpdateId, 'errorUpdateProductId');
    removeError(inputUpdateName, 'errorUpdateProductName');
  }
});

const updateForm = document.getElementById('updateProduct');
const inputUpdateId = document.getElementById('updateProductId');
const inputUpdateName = document.getElementById('updateProductName');

// Kiểm tra thông tin sản phẩm có bị để trống hay không
updateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const idUpdateValue = inputUpdateId.value.trim();
  const nameUpdateValue = inputUpdateName.value.trim();
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
    isValid = false;
  } else {
    removeError(inputUpdateName, 'errorUpdateProductName');
  }
  if (isValid) {
    alert('Cập nhật sản phẩm thành công!');
    updateForm.reset();
    closeModal('modalUpdateProduct');
  }
});

// Mở tab xóa sản phẩm
const modalDeleteElement = document.getElementById('modalDeleteProduct');
const productDeleteModal = new bootstrap.Modal(modalDeleteElement);
document.addEventListener('click', (d) => {
  const btn = d.target.closest('.btn-delete-product');
  if (btn) {
    const productDeleteName = btn.dataset.name;
    const spanName = modalDeleteElement.querySelector('.modal-body span');
    if (spanName) {
      spanName.textContent = productDeleteName;
      spanName.classList.add('fw-bold');
    }
    productDeleteModal.show();
  }
});

renderProducts(listProducts);

/**
 * Các hàm dùng để check.
 * showError
 * removeError
 * closeModal
 * renderProducts
 * deleteProducts
 */

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

// Hàm đóng Modal
function closeModal(modalID) {
  const modalElement = document.getElementById(modalID);
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
}

// Render sản phẩm ra màn hình
function renderProducts(arr) {
  let products = document.getElementById('tableProducts');
  products.innerHTML = '';

  let newProducts = arr
    .map((p) => {
      const price = p.price ? Number(p.price).toLocaleString('vi-VN') : 0;
      const statusBadge =
        p.status === 'active'
          ? `<span class="badge rounded-pill bg-success-subtle text-success p-2">● Đang hoạt động</span>`
          : `<span class="badge rounded-pill bg-danger-subtle text-danger p-2">● Ngừng hoạt động</span>`;
      return `
    <tr>
                <td class="ps-4">${p.id}</td>
                <td>${p.name}</td>
                <td>${price}</td> 
                <td class="text-center">${p.stock}</td>
                <td class="text-center">${p.discount}%</td>
                <td class="text-center">
                    ${statusBadge}
                </td>
                <td class="text-center">
                    <button class="btn btn-link text-danger p-1 btn-delete-product" data-id="${p.id}" data-name="${p.name}">
                        <i class="bi bi-trash"></i>
                    </button>
                    <button class="btn btn-link text-warning p-1 btn-update-product" data-id="${p.id}" data-name="${p.name}">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                </td>
            </tr>
    `;
    })
    .join('');
  products.innerHTML = newProducts;
}

function deleteProducts(id) {
  listProducts = listProducts.filter((i) => {
    return i.id !== id;
  });
  localStorage.setItem('listProducts', JSON.stringify(listProducts));
  renderProducts(listProducts);
}
