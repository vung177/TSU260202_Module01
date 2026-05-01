let listAccount = JSON.parse(localStorage.getItem('users'));
if (!listAccount) {
  listAccount = [{ email: 'admin@gmail.com', password: '12345678' }];
  localStorage.setItem('users', JSON.stringify(listAccount));
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  const isRemember = document.getElementById('saveId').checked;

  const userFound = listAccount.find(function (user) {
    return user.email === emailValue && user.password === passwordValue;
  });

  if (userFound) {
    if (isRemember) {
      localStorage.setItem('rememberedEmail', emailValue);
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
