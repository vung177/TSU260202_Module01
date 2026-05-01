// Nếu có dữ liệu mẫu thì thêm ở đây
let listProducts = JSON.parse(localStorage.getItem('listProducts'));
if (!listProducts) {
  listProducts = [
    {
      id: 1,
      productName: 'Quần Áo',
      status: 'Đang hoạt động',
      img: '../img/anh1.png',
    },

    {
      id: 2,
      productName: 'Kính mắt',
      status: 'Đang hoạt động',
      img: '../img/anh2.png',
    },

    {
      id: 3,
      productName: 'Điện tử',
      status: 'Ngừng hoạt động',
      img: '../img/anh3.png',
    },

    {
      id: 4,
      productName: 'Hoa quả',
      status: 'Đang hoạt động',
      img: '../img/anh4.png',
    },

    {
      id: 5,
      productName: 'Giày dép',
      status: 'Ngừng hoạt động',
      img: '../img/anh1.png',
    },
  ];
}
localStorage.setItem('listProducts', JSON.stringify(listProducts));

let categories = JSON.parse(localStorage.getItem('categories'));
if (!categories) {
  categories = [];
}

localStorage.setItem('categories', JSON.stringify(categories));

// Log out user
let isLogin = JSON.parse(localStorage.getItem('isLogin'));
if (!isLogin) {
  window.location.href = './signin.html';
}

let logOutModal = new bootstrap.Modal(document.getElementById('modalLogOut'));

let btnLogOut = document.getElementById('logOutBtn');
btnLogOut.addEventListener('click', (e) => {
  e.preventDefault();
  logOutModal.show();
});

let btnConfirmLogOut = document.querySelector('.btn-logout');
if (btnConfirmLogOut) {
  btnConfirmLogOut.addEventListener('click', () => {
    localStorage.removeItem('isLogin');
    logOutModal.hide();
    window.location.href = './signin.html';
  });
}

// Mở Thêm mới danh mục
const btnAddNewCategory = document.getElementById('btnAddNewCategory');
const modalCategory = document.getElementById('idModalAddCategory');
const categoryAddModal = new bootstrap.Modal(modalCategory);

btnAddNewCategory.addEventListener('click', () => {
  categoryAddModal.show();
});

const categoryForm = document.getElementById('formAddCategory');
const inputIdCategory = document.getElementById('categoryId');
const inputNameCategory = document.getElementById('categoryName');

// Kiếm tra tên hay mã danh mục có để trống hay không
categoryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const statusChecked = document.querySelector(
    'input[name="categoriesStatus"]:checked',
  );
  // Lấy trạng thái từ thông tin đăng nhập của người dùng
  let statusSelected;
  if (statusChecked) {
    statusSelected = statusChecked.value;
  } else {
    statusSelected = 'active';
  }
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

  const isExisted = categories.some((item) => item.id === newCategory.id);
  if (isExisted) {
    alert('Mã danh mục đã tồn tại, vui lòng nhập lại!');
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
      status: statusSelected,
    };

    categories.push(newCategory);
    localStorage.setItem('categories', JSON.stringify(categories));
    alert('Thêm danh mục thành công!');

    categoryForm.reset();
    categoryAddModal.hide();
    renderCategories(categories);
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

  let checkName = listProducts.some((checkInputName) => {
    return (
      checkInputName.name.toLowerCase().trim() ===
      nameValue.toLowerCase().trim()
    );
  });

  if (checkId || checkName) {
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
    const idOld = btn.dataset.id;
    const productIdOld = listProducts.find((p) => p.id === idOld);
    if (productIdOld) {
      document.getElementById('updateProductId').value = productIdOld.id;
      document.getElementById('updateProductName').value = productIdOld.name;
      document.getElementById('updateProductCategory').value =
        productIdOld.category;
      document.getElementById('updateProductQuantity').value =
        productIdOld.stock || 0;
      document.getElementById('updateProductPrice').value =
        productIdOld.price || 0;
      document.getElementById('updateProductDiscount').value =
        productIdOld.discount || 0;
      document.getElementById('updateProductImg').value = productIdOld.img;
      document.getElementById('updateProductDescription').value =
        productIdOld.description;
    }
    productUpdateModal.show();
    removeError(inputUpdateId, 'errorUpdateProductId');
    removeError(inputUpdateName, 'errorUpdateProductName');
  }
});

const updateForm = document.getElementById('updateProduct');
const inputUpdateId = document.getElementById('updateProductId');
const inputUpdateName = document.getElementById('updateProductName');

/** Thực thi cập nhật sản phẩm
 * Kiểm tra tên sản phẩm hay mã sản phẩm phải được điền, không được để trống, tên sản phẩm khi cập nhật không được trùng
 * Lấy thông tin sản phẩm cần cập nhật: mã sản phẩm, danh mục, giá, số lượng, giảm giá, trạng thái
 * Thay thế toàn bộ thông tin đó bằng thông tin vừa nhập
 * Lưu vào localStorage
 * render dữ liệu ra màn hình
 */
updateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const statusUpdateChecked = document.querySelector(
    'input[name="productUpdateStatus"]:checked',
  );

  // Lấy dữ liệu ô radio
  let statusUpdateSelected;
  if (statusUpdateChecked) {
    statusUpdateSelected = statusUpdateChecked.value;
  } else {
    statusUpdateSelected = 'active';
  }

  // Khởi tạo các giá trị về thông tin sản phẩm update
  const idUpdateValue = inputUpdateId.value.trim();
  const nameUpdateValue = inputUpdateName.value.trim();
  const categoryUpdate = document.getElementById('updateProductCategory').value;
  const stockUpdate = Number(
    document.getElementById('updateProductQuantity').value || 0,
  );
  const priceUpdate = Number(
    document.getElementById('updateProductPrice').value || 0,
  );
  const discountUpdate = Number(
    document.getElementById('updateProductDiscount').value || 0,
  );
  const imgUpdate = document.getElementById('updateProductImg').value;
  const descriptionUpdate = document.getElementById(
    'updateProductDescription',
  ).value;

  // Khi cập nhật các ô tên sản phẩm và mã sản phẩm không được để trống
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

  // Khi tên sản phẩm được nhập, kiểm tra xem có trùng tên sản phẩm không
  if (isValid) {
    let checkName = listProducts.some((checkInputName) => {
      return (
        checkInputName.id !== idUpdateValue &&
        checkInputName.name.toLowerCase().trim() ===
          nameUpdateValue.toLowerCase().trim()
      );
    });

    if (checkName) {
      alert('Tên sản phẩm đã bị trùng, vui lòng nhập lại!');
      return;
    }
  }
  // Lấy toàn bộ những thông tin đã nhập trước đó ghi đè vào mảng đã có dựa theo id
  if (isValid) {
    const index = listProducts.findIndex((p) => p.id === idUpdateValue);
    if (index !== -1) {
      listProducts[index] = {
        // ...listProducts[index],
        id: idUpdateValue,
        name: nameUpdateValue,
        category: categoryUpdate,
        status: statusUpdateSelected,
        stock: stockUpdate,
        price: priceUpdate,
        discount: discountUpdate,
        img: imgUpdate,
        description: descriptionUpdate,
      };
    }
    localStorage.setItem('listProducts', JSON.stringify(listProducts));
    renderProducts(listProducts);
    alert('Cập nhật sản phẩm thành công!');
    updateForm.reset();
    closeModal('modalUpdateProduct');
  }
});

// Mở tab xóa sản phẩm
// Cần có 1 biến trung gian để khi xóa sản phẩm cần lưu id sản phẩm xóa đó vào biến trung gian
const modalDeleteElement = document.getElementById('modalDeleteProduct');
const productDeleteModal = new bootstrap.Modal(modalDeleteElement);
let idProductToDelete = null;
document.addEventListener('click', (d) => {
  const btn = d.target.closest('.btn-delete-product');
  if (btn) {
    // Lấy id sản phẩm muốn xóa
    idProductToDelete = btn.dataset.id;
    const productDeleteName = btn.dataset.name;

    // Hiển thị tên sản phẩm lên bảng
    const spanName = modalDeleteElement.querySelector('.modal-body span');
    if (spanName) {
      spanName.textContent = productDeleteName;
      spanName.classList.add('fw-bold');
    }
    productDeleteModal.show();
  }
});

const btnConfirmDelete = document.querySelector(
  '#modalDeleteProduct .btn-danger',
);
const successToast = new bootstrap.Toast(
  document.getElementById('deleteSuccessToast'),
);

// Nhấn nút xóa sản phẩm
btnConfirmDelete.addEventListener('click', () => {
  if (idProductToDelete) {
    deleteProducts(idProductToDelete);
    idProductToDelete = null;
    productDeleteModal.hide();
    closeModal('modalDeleteProduct');
    successToast.show();
  }
});

renderCategories(categories);
renderProducts(listProducts);

/**
 * Danh sách các hàm
 * renderCategories
 * showError
 * removeError
 * renderProducts
 * deleteProducts
 * BONUS
 */

// Render danh mục ra màn hình
function renderCategories(arr) {
  const tabelCategories = document.getElementById('listCategories');
  tabelCategories.innerHTML = '';

  tabelCategories.innerHTML = arr
    .map((e) => {
      let statusBadge =
        e.status === 'active'
          ? `<span class="badge rounded-pill bg-success-subtle text-success p-2">● Đang hoạt động</span>`
          : `<span class="badge rounded-pill bg-danger-subtle text-danger p-2">● Ngừng hoạt động</span>`;
      return `<tr>
                    <td class="ps-4">${e.id}</td>
                    <td>${e.name}</td>
                    <td class="text-center">${statusBadge}
                    </td>
                    <td class="text-center">
                      <button class="btn btn-link text-danger p-1" data-id="${e.id}" data-name="${e.name}">
                        <i class="bi bi-trash"></i>
                      </button>
                      <button
                        class="btn btn-link text-warning p-1 btn-update-category" data-id="${e.id}" data-name="${e.name}"
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                    </td>
                  </tr>`;
    })
    .join('');
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

// BONUS ++++++++++++++++++
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('revenueChart').getContext('2d');

  new Chart(ctx, {
    type: 'line', // Loại biểu đồ đường để thấy sự tăng giảm
    data: {
      labels: [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
      ], // Trục hoành
      datasets: [
        {
          label: 'Doanh thu (VNĐ)',
          data: [65000000, 59000000, 80000000, 81000000, 56000000, 95000000], // Dữ liệu tăng giảm
          fill: true,
          backgroundColor: 'rgba(13, 110, 253, 0.1)', // Màu nền dưới đường kẻ
          borderColor: '#0d6efd', // Màu đường kẻ (Primary color của Bootstrap)
          tension: 0.4, // Độ cong của đường kẻ cho "mượt"
          pointRadius: 5,
          pointBackgroundColor: '#0d6efd',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // Ẩn chú thích nếu chỉ có 1 tập dữ liệu cho gọn
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            // Định dạng hiển thị tiền tệ
            callback: function (value) {
              return value.toLocaleString('vi-VN') + 'đ';
            },
          },
        },
      },
    },
  });
});
