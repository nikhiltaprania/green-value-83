let login = document.querySelector(".login");
let userLogin = document.querySelector(".SignIn");
let create = document.querySelector(".create");
let userSubmit = document.querySelector(".submit");
let container = document.querySelector(".container");
let username = document.querySelector(".username");
let email = document.querySelector(".email");
let newEmail = document.getElementById("email");
let password = document.querySelector(".pass");
let newPass = document.getElementById("pass");
let confirmPass = document.querySelector(".confirmPass");
let singupText = document.getElementById("signupText");
let singinText = document.getElementById("signinText");
let goToHome = document.getElementById("toHomePage");
let spinner = document.querySelector(".spinner");
let spin = document.getElementById("spin");

login.onclick = () => {
    container.classList.add("signinForm");
}
create.onclick = () => {
    container.classList.remove("signinForm");
}

const userData = JSON.parse(localStorage.getItem("user")) || [];

userSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if (password.value !== confirmPass.value) {
        singupText.innerText = "Please enter the same password";
        singupText.style.color = "red";
        singupText.style.fontSize = "16px";

    } else if (checkExisting(userData)) {
        singupText.innerText = "Account alredy exist";
        singupText.style.color = "#00dfc4";
        singupText.style.fontSize = "17px";

    } else {
        const data = {
            Name: username.value,
            Email: email.value,
            Password: password.value
        };
        userData.push(data);
        localStorage.setItem("user", JSON.stringify(userData));
        singupText.innerText = "Account Created";
        singupText.style.color = "greenyellow";
    }
});

function checkExisting(data) {
    for (let i = 0; i < data.length; ++i) {
        if (data[i].Email === email.value) {
            return true;
        }
    }
    return false;
}

userLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (userData.length === 0) {
        singinText.innerText = "Account doesn't exist";
        singinText.style.color = "yellow";
    } else if (checkDetails(userData)) {
        singinText.innerText = "Login Successful";
        singinText.style.color = "greenyellow";

        spin.style.display = "none";
        spinner.style.display = "block";
        setTimeout(() => {
            spinner.style.display = "block";
            window.location.href = "#";
        }, 3000);

    } else {
        singinText.innerText = "Email or password is incorrect";
        singinText.style.fontSize = "16px";
        singinText.style.color = "red";
    }
})

function checkDetails(data) {
    for (let i = 0; i < data.length; ++i) {
        if (data[i].Email === newEmail.value && data[i].Password === newPass.value) {
            return true;
        }
    }
    return false;
}