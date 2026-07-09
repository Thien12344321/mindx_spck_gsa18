const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let username = document.getElementById("signup-name").value.trim()
    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value
    let confirmPassword = document.getElementById("signup-confirm-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || []

    let hasUpper = false;
    let hasLower = false
    let hasNumber = false
    let hasSpecial = false

    // Username
    if (username.length < 3 || username.length > 20) {
        alert("Tên người dùng phải từ 3 đến 20 ký tự.");
        return;
    }


    // Password
    for(let i = 0; i < password.length; i++){

        let c = password[i];

        if(c >= 'A' && c <= 'Z'){
            hasUpper = true;
        }

        else if(c >= 'a' && c <= 'z'){
            hasLower = true
        }

        else if(c >= '0' && c <= '9'){
           hasNumber = true;
        }

        else{
           hasSpecial = true
        }

    }

    if(password.length < 8){
       alert("Mật khẩu phải có ít nhất 8 ký tự")
       return;
    }

    if(password.length > 20){
        alert("Mật khẩu chỉ có nhiều nhất 20 kí tự")
        return;
    }


    if(hasUpper == false){
       alert("Mật khẩu phải có chữ in hoa")
       return;
    }

    if(hasLower == false){
       alert("Mật khẩu phải có chữ thường")
       return;
    }

    if(hasNumber == false ){
       alert("Mật khẩu phải có số")
       return;
    }

    if(hasSpecial == false){
       alert("Mật khẩu phải có ký tự đặc biệt")
       return;
    }

    // Confirm password
    if (password !== confirmPassword) {
        alert("Mật khẩu nhập lại không khớp.");
        return;
    }

    // Kiểm tra email trùng
    for (let i = 0; i < users.length; i++) {

        if (users[i].email === email) {

            alert("Email đã được đăng ký.");
            return;

        }

    }

    users.push({

        username: username,
        email: email,
        password: password

    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Đăng ký thành công!");

    window.location.href = "/login.html"

});