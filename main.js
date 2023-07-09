var loginbutton = document.getElementById("login-btn")
var email = document.getElementById("email")
var password = document.getElementById("password")
loginbutton.addEventListener("click", () => {
    if (email.value == "Muhammadjon" && password.value == "Muhammadjon") {
        window.open("./lesson 18 Figma/index.html");
    } else {
        email.value =""
        password.value =""
    }

})