const userName =document.getElementById("username");
const email = document.getElementById("email");
const passWord = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");

//validation
userName.addEventListener("input", () => {
    if (userName.value.length <= 4) {
        document.getElementById("userError").innerText = "Username must be at least 3 characters";
    }
    else {
        document.getElementById("userError").innerText = "Looks good";
        document.getElementById("userError").className = "success";
    }
});

email.addEventListener("input", () => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(pattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
    }
    else {
        document.getElementById("emailError").innerText = "Looks good";
        document.getElementById("emailError").className = "success";
    }
});

passWord.addEventListener("input", () => {
    if (passWord.value.length <= 8) {
        document.getElementById("passError").innerText = "Password must be at least 6 characters";
    }
    else {
        document.getElementById("passError").innerText = "Strong password";
    document.getElementById("passError").className = "success";
    }
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value !== passWord.value) {
        document.getElementById("confirmError").innerText = "Passwords do not much";
    }
    else {
        document.getElementById("confirmError").innerText = "Passwords match";
        document.getElementById("confirmError").className = "success";
    }
});

// final check on button click
function validateForm() {
    if (
        userName.value.length > 4 &&
        email.value.includes("@") &&
        passWord.value.length > 8 &&
        passWord.value === confirmPassword.value
    ) {
         localStorage.setItem("username",userName.value);
         localStorage.setItem("email",email.value);
         localStorage.setItem("password",passWord.value);
         window.location.href = "expensetracker.html";
    }
    else {
        alert ("Please fix errors before submitting.");
    }
}