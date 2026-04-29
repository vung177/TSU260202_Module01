document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // 1. Lấy các element và giá trị
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('emailInput').value;
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  let isValid = true;

  // 2. Kiểm tra mật khẩu có ít nhất 8 ký tự
  if (password.length < 8) {
    passwordInput.classList.add('is-invalid');
    isValid = false;
  } else {
    passwordInput.classList.remove('is-invalid');
  }

  // 3. Kiểm tra mật khẩu có trùng hay không
  if (confirmPassword !== password) {
    confirmPasswordInput.classList.add('is-invalid');
    isValid = false;
  } else {
    confirmPasswordInput.classList.remove('is-invalid');
  }

  // 4. Kết luận
  if (isValid) {
    const user = {
      fullName: `${firstName} ${lastName}`,
      email: email,
      password: password,
    };
    let dataRaw = localStorage.getItem('users');
    let listAccount;

    if (dataRaw !== null) {
      listAccount = JSON.parse(dataRaw);
    } else {
      listAccount = [{ email: 'admin@gmail.com', password: '12345678' }];
    }
    if (listAccount.some((u) => u.email === email)) {
      alert('Email đã được đăng ký, vui lòng đăng ký email khác!');
      return;
    }
    listAccount.push(user);
    localStorage.setItem('users', JSON.stringify(listAccount));
    alert('Đăng ký thành công!');
    window.location.href = './signin.html';
  }
});
