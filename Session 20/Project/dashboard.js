// Nếu có dữ liệu mẫu thì thêm ở đây
let listProducts = JSON.parse(localStorage.getItem('listProducts'));
if (!listProducts) {
  listProducts = [
    {
      id: 'SP01',
      name: 'iPhone 15 Pro Max',
      price: '28000000',
      status: 'active',
      category: 'DM008',
      stock: 30,
      discount: 5,
    },
    {
      id: 'SP02',
      name: 'Samsung Galaxy S24 Ultra',
      price: '26500000',
      status: 'inactive',
      category: 'DM008',
      stock: 50,
      discount: 5,
    },
    {
      id: 'SP03',
      name: 'MacBook Air M3',
      price: '27990000',
      status: 'active',
      category: 'DM011',
      stock: 20,
      discount: 10,
    },
    {
      id: 'SP04',
      name: 'Sony WH-1000XM5',
      price: '6500000',
      status: 'active',
      stock: 30,
      discount: 10,
    },
    {
      id: 'SP05',
      name: 'Apple Watch Series 9',
      price: '9200000',
      status: 'active',
      stock: 10,
      discount: 15,
    },
    {
      id: 'SP06',
      name: 'Bàn phím cơ Keychron K2',
      price: '1800000',
      status: 'inactive',
      stock: 20,
      discount: 15,
    },
    {
      id: 'SP07',
      name: 'Chuột Logitech MX Master 3S',
      price: '2300000',
      status: 'active',
      stock: 20,
      discount: 15,
    },
    {
      id: 'SP08',
      name: 'Màn hình Dell Ultrasharp',
      price: '8500000',
      status: 'active',
      stock: 10,
      discount: 15,
    },
    {
      id: 'SP09',
      name: 'iPad Pro M2',
      price: '21000000',
      status: 'active',
      stock: 30,
      discount: 5,
    },
    {
      id: 'SP10',
      name: 'Loa Marshall Emberton II',
      price: '3200000',
      status: 'active',
      stock: 20,
      discount: 12,
    },
    {
      id: 'SP11',
      name: 'Máy ảnh Fujifilm X-T5',
      price: '42000000',
      status: 'inactive',
      stock: 10,
      discount: 15,
    },
    {
      id: 'SP12',
      name: 'Tai nghe Airpods Pro 2',
      price: '5500000',
      status: 'inactive',
      stock: 20,
      discount: 10,
    },
    {
      id: 'SP13',
      name: 'Sạc dự phòng Anker 20000mAh',
      price: '1200000',
      status: 'inactive',
      stock: 30,
      discount: 12,
    },
    {
      id: 'SP14',
      name: 'Đồng hồ Garmin Fenix 7',
      price: '15000000',
      status: 'active',
      stock: 10,
      discount: 10,
    },
    {
      id: 'SP15',
      name: 'Tay cầm PS5 DualSense',
      price: '1600000',
      status: 'active',
      stock: 20,
      discount: 15,
    },
    {
      id: 'SP16',
      name: 'Ổ cứng SSD Samsung 1TB',
      price: '2500000',
      status: 'active',
      stock: 30,
      discount: 10,
    },
    {
      id: 'SP17',
      name: 'Bút Apple Pencil 2',
      price: '2800000',
      status: 'inactive',
      stock: 20,
      discount: 5,
    },
    {
      id: 'SP18',
      name: 'Loa Bluetooth JBL Flip 6',
      price: '2400000',
      status: 'inactive',
      stock: 20,
      discount: 10,
    },
    {
      id: 'SP19',
      name: 'Microphone Blue Yeti',
      price: '3500000',
      status: 'inactive',
      stock: 10,
      discount: 12,
    },
    {
      id: 'SP20',
      name: 'Đèn bàn học chống cận',
      price: '500000',
      status: 'inactive',
      stock: 20,
      discount: 10,
    },
  ];
}
localStorage.setItem('listProducts', JSON.stringify(listProducts));

let categories = JSON.parse(localStorage.getItem('categories'));
if (!categories) {
  categories = [
    { id: 'DM001', name: 'Quần Áo', status: 'active' },
    { id: 'DM002', name: 'Kính mắt', status: 'inactive' },
    { id: 'DM003', name: 'Giày dép', status: 'active' },
    { id: 'DM004', name: 'Thời trang nam', status: 'inactive' },
    { id: 'DM005', name: 'Thời trang nữ', status: 'active' },
    { id: 'DM006', name: 'Hoa quả', status: 'inactive' },
    { id: 'DM007', name: 'Rau', status: 'active' },
    { id: 'DM008', name: 'Điện thoại', status: 'inactive' },
    { id: 'DM009', name: 'Bàn phím máy tính', status: 'active' },
    { id: 'DM010', name: 'Máy tính bảng', status: 'active' },
    { id: 'DM011', name: 'Máy tính mini', status: 'active' },
    { id: 'DM012', name: 'Tai nghe', status: 'inactive' },
  ];
}

localStorage.setItem('categories', JSON.stringify(categories));

let currentPage = 1;
let currentListData = categories;
const itemsPerPage = 6;

// Tìm kiếm và lọc - sản phẩm và danh mục
// Sản phẩm
const inputProductSearch = document.getElementById('inputProductSearch');
const productStatusLinks = document.querySelectorAll(
  '#mainProduct .dropdown-menu .dropdown-item',
);

let productStatusFilter = 'Tất cả';

// Tìm kiếm sản phẩm theo tên
inputProductSearch.addEventListener('input', () => {
  filterAndRenderProduct();
});

// Lọc trạng thái sản phẩm
productStatusLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    productStatusFilter = e.target.textContent.trim();
    e.target
      .closest('.dropdown')
      .querySelector('button').firstChild.textContent =
      productStatusFilter + ' ';
    filterAndRenderProduct();
  });
});

function filterAndRenderProduct() {
  const searchText = inputProductSearch.value.toLowerCase().trim();

  const filtered = listProducts.filter((p) => {
    const matchName = p.name.toLowerCase().includes(searchText);
    const matchStatus =
      productStatusFilter === 'Tất cả' ||
      (productStatusFilter === 'Đang hoạt động' && p.status === 'active') ||
      (productStatusFilter === 'Ngừng hoạt động' && p.status === 'inactive');
    return matchName && matchStatus;
  });
  renderProducts(filtered);
}
// Danh mục
const inputCategorySearch = document.getElementById('inputCategorySearch');
const categoryStatusLinks = document.querySelectorAll(
  '#mainCategory .dropdown-menu .dropdown-item',
);

let categoryStatusFilter = 'Tất cả';

inputCategorySearch.addEventListener('input', () => {
  filterAndRenderCategories();
});

categoryStatusLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    categoryStatusFilter = e.target.textContent.trim();
    e.target
      .closest('.dropdown')
      .querySelector('button').firstChild.textContent =
      categoryStatusFilter + ' ';
    filterAndRenderCategories();
  });
});

function filterAndRenderCategories() {
  const searchText = inputCategorySearch.value.toLowerCase().trim();
  currentListData = categories.filter((c) => {
    const matchName = c.name.toLowerCase().includes(searchText);
    const matchStatus =
      categoryStatusFilter === 'Tất cả' ||
      (categoryStatusFilter === 'Đang hoạt động' && c.status === 'active') ||
      (categoryStatusFilter === 'Ngừng hoạt động' && c.status === 'inactive');
    return matchName && matchStatus;
  });
  currentPage = 1;
  renderCategories(currentPage, currentListData);
  setupPagination(currentListData);
}

// Sắp xếp Sản phẩm theo tên
function sortProducts(direction = 'asc') {
  listProducts.sort((a, b) => {
    return direction === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
}

// Sắp xếp theo danh mục
function sortCategories(direction = 'asc') {
  categories.sort((a, b) => {
    return direction === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
  renderCategories(1);
}

// Kiểm tra danh mục có còn sản phẩm hay không
document.getElementById('listCategories').addEventListener('click', (e) => {
  const btnDelete = e.target.closest('.text-danger');
  if (btnDelete) {
    const catId = btnDelete.dataset.id;
    const catName = btnDelete.dataset.name;

    if (confirm(`Bạn có chắn chắn muốn xóa danh mục ${catName}?`)) {
      const hasProduct = listProducts.some(
        (p) => String(p.category) === String(catId),
      );

      if (hasProduct) {
        alert(
          `Không thể xóa danh mục "${catName}" vì vẫn còn sản phẩm thuộc danh mục này!`,
        );
      } else {
        categories = categories.filter((c) => c.id !== catId);
        localStorage.setItem('categories', JSON.stringify(categories));
        renderCategories(currentPage, categories);
        setupPagination(categories);
        renderCategoryToSelect();
        alert(`Đã xóa danh mục "${catName}" thành công!`);
      }
    }
  }
});

// Đăng xuất tài khoản
// Chuyển hướng về trang đăng nhập
// Kiểm tra trạng thái đã đăng nhập hay chưa?
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

  const isExisted = categories.some((item) => item.id === categoryIdValue);
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
    renderCategories(currentPage);
    setupPagination();
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
  const categoryValue = inputCategory.value;
  const quantityValue = parseInt(inputQuantity.value) || 0;
  const priceValue = parseFloat(inputPrice.value.replace(/\./g, '')) || 0;
  const discountValue = parseFloat(inputDiscount.value) || 0;
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
      stock: quantityValue,
      price: priceValue,
      discount: discountValue,
      img: imgValue,
      status: statusSelected,
      description: descriptionValue,
    };
    listProducts.push(newProduct);
    localStorage.setItem('listProducts', JSON.stringify(listProducts));
    alert('Thêm sản phẩm thành công!');
    renderProducts(listProducts);
    addForm.reset();
    productAddModal.hide();
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

renderCategories(1);
setupPagination();
renderCategories(categories);
renderProducts(listProducts);

/**
 * Danh sách các hàm
 * setupPagination - cần xem lại
 * renderCategories
 * showError
 * removeError
 * closeModal
 * renderProducts
 * deleteProducts
 * BONUS
 */

function setupPagination(dataToPaginate = currentListData) {
  const paginationUl = document.querySelector('#pagination ul');
  if (!paginationUl) return;
  paginationUl.innerHTML = '';

  const pageCount = Math.ceil(dataToPaginate.length / itemsPerPage);
  if (pageCount < 1) return;

  // 1. Nút Mũi tên Trái (Previous)
  const prevLi = document.createElement('li');
  prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
  prevLi.innerHTML = `<a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a>`;
  prevLi.onclick = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderCategories(currentPage, dataToPaginate);
      setupPagination(dataToPaginate);
    }
  };
  paginationUl.appendChild(prevLi);

  // 2. Vòng lặp chính
  const delta = 1;
  const range = [];
  for (let i = 1; i <= pageCount; i++) {
    if (
      i === 1 ||
      i === pageCount ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i);
    }
  }

  let l;
  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        renderPageBtn(paginationUl, l + 1, dataToPaginate);
      } else if (i - l !== 1) {
        const dotLi = document.createElement('li');
        dotLi.className = 'page-item disabled';
        dotLi.innerHTML = '<span class="page-link border-0"> ... </span>';
        paginationUl.appendChild(dotLi);
      }
    }
    renderPageBtn(paginationUl, i, dataToPaginate);
    l = i;
  }

  // 3. Nút Mũi tên Phải (Next)
  const nextLi = document.createElement('li');
  nextLi.className = `page-item ${currentPage === pageCount ? 'disabled' : ''}`;
  nextLi.innerHTML = `<a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a>`;
  nextLi.onclick = (e) => {
    e.preventDefault();
    if (currentPage < pageCount) {
      currentPage++;
      renderCategories(currentPage, dataToPaginate);
      setupPagination(dataToPaginate);
    }
  };
  paginationUl.appendChild(nextLi);
}

function renderPageBtn(container, i, dataToPaginate) {
  const li = document.createElement('li');
  li.className = `page-item ${i === currentPage ? 'active' : ''}`;
  li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
  li.onclick = (e) => {
    e.preventDefault();
    currentPage = i;
    renderCategories(currentPage, dataToPaginate);
    setupPagination(dataToPaginate);
  };
  container.appendChild(li);
}

// Đồng bộ danh mục
function syncCategoryData() {
  localStorage.setItem('categories', JSON.stringify(categories));
  renderCategories(categories);
}

// Đồng bộ sản phẩm
function syncProductData() {
  localStorage.setItem('listProducts', JSON.stringify(listProducts));
  renderProducts(listProducts);
}

// Hàm đóng Modal
function closeModal(modalId) {
  const modalElement = document.getElementById(modalId);
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
}

// Render danh mục ra màn hình
function renderCategories(page = 1, dataToRender = categories) {
  const tableCategories = document.getElementById('listCategories');
  if (!tableCategories) return;

  tableCategories.innerHTML = '';

  const start = itemsPerPage * (page - 1);
  const end = start + itemsPerPage;
  const paginatedItems = dataToRender.slice(start, end);

  if (paginatedItems.length === 0) {
    tableCategories.innerHTML = `<tr><td colspan="4" class="text-center">Không tìm thấy dữ liệu</td></tr>`;
    return;
  }

  tableCategories.innerHTML = paginatedItems
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
// Code này cũng cần xem lại
function renderCategoryToSelect() {
  const selectAdd = document.getElementById('productCategory');
  const selectUpdate = document.getElementById('updateProductCategory');
  const options = categories
    .map((cat) => `<option value="${cat.id}">${cat.name}</option>`)
    .join('');
  if (selectAdd) selectAdd.innerHTML = options;
  if (selectUpdate) selectUpdate.innerHTML = options;
}

// Đảm bảo các hàm này được gọi ngay khi file JS load xong
document.addEventListener('DOMContentLoaded', () => {
  // 1. Reset về trang 1
  currentPage = 1;
  renderCategoryToSelect();
  // 2. Gọi hàm render dữ liệu (Truyền số 1 vào để tránh lỗi undefined)
  renderCategories(currentPage);
  renderProducts(listProducts); // Nếu sản phẩm chưa có phân trang thì render cả mảng

  // 3. Gọi hàm tạo các nút bấm
  setupPagination(categories);
});

// 1. Lấy tất cả các link menu và các section
const menuLinks = document.querySelectorAll('#menu .nav-link');
const sections = {
  'section-thong-ke': document.getElementById('mainStatistics'),
  'section-danh-muc': document.getElementById('mainCategory'),
  'section-san-pham': document.getElementById('mainProduct'),
};

// 2. Lắng nghe sự kiện click trên từng menu
menuLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Bước A: Xóa class 'active' ở tất cả các menu và thêm vào menu vừa click
    menuLinks.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');

    // Bước B: Lấy tên target từ data-target của menu vừa click
    const targetId = this.getAttribute('data-target');

    // Bước C: Duyệt qua các section để ẩn/hiện
    Object.keys(sections).forEach((key) => {
      if (key === targetId) {
        // Hiện section tương ứng (xóa d-none)
        sections[key].classList.remove('d-none');
      } else {
        // Ẩn các section còn lại (thêm d-none)
        sections[key].classList.add('d-none');
      }
    });

    // Bước D: (Bonus) Tùy chỉnh thêm nếu cần khi chuyển tab
    if (targetId === 'section-danh-muc') {
      renderCategories(1);
      setupPagination(categories);
    } else if (targetId === 'section-san-pham') {
      renderProducts(listProducts);
    }
  });
});

/**
 * Đoạn code lấy dữ liệu từ localStorage
// Lấy dữ liệu có tên key là "categories"
let data = localStorage.getItem('categories');

console.log(data);

// 1. Lấy chuỗi JSON từ localStorage
let rawData = localStorage.getItem('categories');

// 2. Chuyển chuỗi đó về lại thành Mảng/Đối tượng
if (rawData) {
  let categories = JSON.parse(rawData);
  console.log('Danh sách danh mục:', categories);

  // Bây giờ bạn có thể dùng categories.length để tính số trang
} else {
  console.log('Không tìm thấy dữ liệu trong localStorage');
}
 */
