/*
=== Account Registration ===
- Full name includes first and last name
- Valid email format check
- Password protection, validation, and confirmation (minimum 8 characters)
- Terms and conditions agreement checkbox
- Registration redirect to sign in on success
- Link to sign in if user already has an account
*/

// Profile icon link: if already logged in -> go to Dashboard, otherwise -> Sign In
const profileLink = document.getElementById('profileLink');
if (profileLink) {
  profileLink.addEventListener('click', (e) => {
    const isLogin = JSON.parse(localStorage.getItem('isLogin'));
    if (isLogin) {
      e.preventDefault();
      window.location.href = './dashboard.html';
    }
  });
}
