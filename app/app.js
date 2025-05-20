//todo:========Slider======== //

const slides = document.querySelector('.slides');
const slideCount = slides.children.length;
let currentIndex = 0;

function showSlide(index) {
    if(currentIndex <= -1 || currentIndex >= 6 ){
        currentIndex = 1;
    }
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;
}

slides.addEventListener('transitionend', () => {
    if (currentIndex === slideCount - 1) {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        currentIndex = 0;
    }
});

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// setInterval(nextSlide, 5000);

//todo:========Login========//

let loginTooltip = document.querySelectorAll(".tooltip-text");

function validateForm(itsLogin) {
    let valid = true; 

    if(itsLogin){
        const loginContainer = document.querySelector(".login-container");

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const usernameError = document.getElementById("usernameError");
        const passwordError = document.getElementById("passwordError");

        const forbiddenChars = /[#\$%@!?,'"<>^{}\[\]№~`]/;

        if (forbiddenChars.test(username)) {

            usernameError.textContent = "The name must not contain any special characters.";
            valid = false;

        } 
        else if (username.trim() === "") {
            usernameError.textContent = "The name field cannot be empty.";
            valid = false;
        } 
        else {
            usernameError.textContent = "";
        }

        if (password.length < 8) {
            passwordError.textContent = "The password must be at least 8 characters long.";
            valid = false;
        } 
        else {
            passwordError.textContent = "";
        }

        if (valid) {
        localStorage.setItem("user", JSON.stringify({ username }));
    
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
        } else {
            loginContainer.classList.add("big-login-container");
        }
    }
    else{
        const registerContainer = document.querySelector(".register-container");

        const passwordConfirm = document.getElementById("passwordConfirm").value;
        const passwordConfirmError = document.getElementById("passwordConfirmError");

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const usernameError = document.getElementById("usernameError");
        const passwordError = document.getElementById("passwordError");

        const forbiddenChars = /[#\$%@!?,'"<>^{}\[\]№~`]/;

        if (forbiddenChars.test(username)) {

            usernameError.textContent = "The name must not contain any special characters.";
            valid = false;

        } 
        else if (username.trim() === "") {
            usernameError.textContent = "The name field cannot be empty.";
            valid = false;
        } 
        else {
            usernameError.textContent = "";
        }

        if (password.length < 8) {
            passwordError.textContent = "The password must be at least 8 characters long.";
            valid = false;
        } 
        else {
            passwordError.textContent = "";
        }

        if(passwordConfirm < 8){
            passwordConfirmError.textContent = "The password confirm field cannot be empty.";
            valid = false;
        }
        else if(passwordConfirm == password){
            passwordConfirmError.textContent = "";
        }
        else {
            passwordConfirmError.textContent = "The password is wrong.";
            valid = false;
        }

        if (valid) {
        localStorage.setItem("user", JSON.stringify({ username }));
    
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
        } else {
            registerContainer.classList.add("big-register-container");
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username) {
        document.querySelector(".tooltip-text").textContent = `${user.username}`;
    }
});

//*Others

function mainmanu(){
    window.location.href = "index.html";
}
