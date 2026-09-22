/*
=== Đăng ký tài khoản ===
- Họ và tên gồm tên đệm và tên
- Email, có đúng định dạng hay không
- Mật khẩu, được bảo vệ khi nhập vào, khi nhập sai hay xác nhận mật khẩu thì thông báo, phải nhập mật khẩu xác nhận, mật khẩu phải 8 ký tự trở lên.
- Dấu tích vào ô đồng ý với chính sách và điều khoản
- Nút đăng ký gửi tài khoản, nếu thành công sẽ chuyển hướng về trang đăng nhập có thông báo trên màn hình, không thành công cũng có thông báo trên màn hình
- Nếu đã có tài khoản thì nhấp vào đăng nhập, chuyển đến màn hình đăng nhập
- Tất cả ô thông tin phải được nhập thông tin trước khi đăng ký.
*/

// Liên kết icon Profile: nếu đã đăng nhập thì vào Dashboard, nếu chưa thì vào Đăng nhập
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
