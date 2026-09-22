document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // 1. Get elements and values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('emailInput').value;
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  let isValid = true;

  // 2. Validate password length (min 8 chars)
  if (password.length < 8) {
    passwordInput.classList.add('is-invalid');
    isValid = false;
  } else {
    passwordInput.classList.remove('is-invalid');
  }

  // 3. Validate password confirmation
  if (confirmPassword !== password) {
    confirmPasswordInput.classList.add('is-invalid');
    isValid = false;
  } else {
    confirmPasswordInput.classList.remove('is-invalid');
  }

  // 4. Save account to localStorage if valid
  e.target.classList.add('was-validated');

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
    if (listAccount.some((e) => e.email === email)) {
      alert('This email is already registered, please use another email!');
      return;
    }
    listAccount.push(user);
    localStorage.setItem('users', JSON.stringify(listAccount));
    alert('Registration successful!');
    window.location.href = './signin.html';
  }
});

document.getElementById('logIn').addEventListener('click', function (e) {
  window.location.href = './signin.html';
});
