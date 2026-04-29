let listAccount = JSON.parse(localStorage.getItem('users'));
if (!listAccount) {
  listAccount = [{ id: 'admin@gmail.com', password: '12345678' }];
  localStorage.setItem('user', JSON.stringify(listAccount));
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const isRemember = document.getElementById('saveId').checked;

  const userFound = listAccount.find(function (user) {
    return user.email === emailInput && user.password === passwordInput;
  });

  if (userFound) {
    if (isRemember) {
      localStorage.setItem('rememberedEmail', emailInputs);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    alert('Đăng nhập thành công!');
    window.location.href = './dashboard.html';
  } else {
    alert('Email và mật khẩu không đúng!');
  }
});

window.onload = () => {
  const saveEmail = localStorage.getItem('rememberedEmail');
  if (saveEmail) {
    document.getElementById('email').value = saveEmail;
    document.getElementById('saveId').checked = true;
  }
};

document.getElementById('register').addEventListener('click', (e) => {
  window.location.href = './register.html';
});

document.getElementById('forgetPassword').addEventListener('click', (e) => {
  alert('Trang đang được hoàn thiện, vui lòng quay lại sau!');
});
