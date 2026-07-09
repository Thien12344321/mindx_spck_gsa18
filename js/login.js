const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let email = document.getElementById("log-email").value.trim();
    let password = document.getElementById("log-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = null;

    // Tìm email
    for (let i = 0; i < users.length; i++) {

        if (users[i].email === email) {

            user = users[i]
            break;

        }

    }

    // Email chưa tồn tại
    if (user === null) {
        alert("Email chưa được đăng ký.");
        return;

    }

    // Sai mật khẩu
    if (user.password !== password) {
        alert("Sai mật khẩu.");
        return;
    }

    // Đăng nhập thành công

    localStorage.setItem("currentUser", user.username);
    alert("Đăng nhập thành công!");
    window.location.href = "home.html";

});