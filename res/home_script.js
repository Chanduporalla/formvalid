// Function to validate the full name
function validateName() {
  const fullName = document.getElementById('fullName').value;
  const nameError = document.getElementById('nameError');

  if (fullName.length < 5) {
    nameError.textContent = "Name must be at least 5 characters long.";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

// Function to validate the email
function validateEmail() {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');

  if (!email.includes('@')) {
    emailError.textContent = "Enter a valid email.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Function to validate the phone number
function validatePhone() {
  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phoneError');

  if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

// Function to validate the password
function validatePassword() {
  const password = document.getElementById('password').value;
  const fullName = document.getElementById('fullName').value;
  const passwordError = document.getElementById('passwordError');

  if (password === "password" || password === fullName || password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long and should not be 'password' or your name.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

// Function to validate the confirm password
function validateConfirmPassword() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

// Function to validate the entire form
function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
    alert("Form submitted successfully!");
    return true;
  } else {
    return false;
  }
}
