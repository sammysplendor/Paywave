import { userData } from "./data.js";

// =============== SIGNUP FORM =============== //

export const initSignup = () => {
  const signupForm = document.querySelector("#signup-form");

  if (!signupForm) return;

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#fullname").value.trim();
    const emailInput = document.querySelector("#email-input").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document
      .querySelector("#confirm-password")
      .value.trim();

    const email = emailInput.toLowerCase();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById(
      "confirm-password-error",
    );

    let hasError = false;

    if (name.length < 2) {
      nameError.innerText = "Name must be atleast 2 letters";
      hasError = true;
    } else if (name.split(" ").length < 2) {
      nameError.innerText = "Enter fullname (First and Last name)";
      hasError = true;
    } else {
      nameError.innerText = "";
    }

    if (!email.includes("@")) {
      emailError.innerText = "Please enter a valid email";
      hasError = true;
    } else {
      emailError.innerText = "";
    }

    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[!@#$%^&*(){}?<>|]/.test(password)
    ) {
      passwordError.innerText =
        "Must be at least 8 characters, including a number and a symbol.";
      hasError = true;
    } else {
      passwordError.innerText = "";
    }

    if (password !== confirmPassword) {
      confirmPasswordError.innerText = "Passwords do not match";
      hasError = true;
    } else {
      confirmPasswordError.innerText = "";
    }

    if (hasError) {
      return;
    }

    userData.name = name;
    userData.email = email;
    userData.password = password;

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Sign Up successful!");
    window.location.replace("../pages/signin.html");
  });
};

// =============== SIGNIN FORM =============== //

export const initSignin = () => {
  const signinForm = document.getElementById("signin-form");

  if (!signinForm) return;

  const error = document.querySelector(".error");
  const loginProcess = document.querySelector(".login-process");

  signinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    const emailInput = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    const email = emailInput.toLowerCase();

    if (
      !savedUser ||
      savedUser.email !== email ||
      savedUser.password !== password
    ) {
      error.innerText = "Incorrect Email or Password";
      return;
    }

    error.innerText = "";
    localStorage.setItem("isLoggedIn", "true");
    loginProcess.innerText = "Logging in...";

    setTimeout(() => {
      window.location.replace("../pages/dashboard.html");
    }, 1000);
  });
};
