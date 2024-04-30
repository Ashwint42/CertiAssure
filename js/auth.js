const btns = document.querySelectorAll(".btns");
const formDisplay = document.querySelector(".form-container");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "signup") {
      showSignUpForm();
    } else {
      showLoginForm();
    }
  });
});

function showSignUpForm() {
  formDisplay.innerHTML = `<div id="signupModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Sign Up</h2>
      <form id="signupForm">
        <label for="signup-name">Name:</label>
        <input type="text" id="signup-name" name="name" required>
        <label for="signup-email">Email:</label>
        <input type="email" id="signup-email" name="email" required>
        <label for="signup-password">Password:</label>
        <input type="password" id="signup-password" name="password" required>
        <label for="signup-role">Role:</label>
        <div class="radio-container">
          <input type="radio" id="signup-university" name="role" value="university">
          <label for="signup-university">University</label>
        </div>
        <div class="radio-container">
          <input type="radio" id="signup-college" name="role" value="college">
          <label for="signup-college">College</label>
        </div>
        <div class="radio-container">
          <input type="radio" id="signup-student" name="role" value="student" checked>
          <label for="signup-student">Student</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="#" id="toggleLogin">Sign In</a></p>
    </div>
  </div>`;

  const closeButton = document.querySelector(".modal-content .close");
  const modal = document.getElementById("signupModal");
  const toggleLogin = document.getElementById("toggleLogin");
  closeButton.addEventListener("click", () => {
    modal.classList.add("closeForm"); // Add the class to hide the modal
  });
  toggleLogin.addEventListener("click", () => {
    showLoginForm();
  });
}

function showLoginForm() {
  formDisplay.innerHTML = `<div id="loginModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="login-email">Email:</label>
      <input type="email" id="login-email" name="email" required>
      <label for="login-password">Password:</label>
      <input type="password" id="login-password" name="password" required>
    
      <button id="submit" type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="#" id="toggleRegister">Register</a></p>
  </div>
</div>
`;

  const closeButton = document.querySelector(".modal-content .close");
  const modal = document.getElementById("loginModal");
  const toggleRegister = document.getElementById("toggleRegister");

  const emailField = document.querySelector('input[type="email"]');
  const passwordField = document.querySelector('input[type="password"]');

  closeButton.addEventListener("click", () => {
    modal.classList.add("closeForm");
  });
  toggleRegister.addEventListener("click", () => {
    showSignUpForm();
  });

  const form = document.getElementById("loginForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    routePage(emailField, passwordField);
  });
}

function routePage(emailField, passwordField) {
  if (
    (emailField.value = "student@gmail.com") &&
    passwordField.value == "student"
  )
    open("studentDashboard");
  else if (
    (emailField.value = "college@gmail.com") &&
    passwordField.value == "college"
  )
    open("collegeDashboard");
  else if (
    (emailField.value = "university@gmail.com") &&
    passwordField.value == "university"
  )
    open("universityDashboard");
  else alert("No User Found");
}

function open(fileName) {
  window.location.href = `../src/${fileName}.html`;
}
