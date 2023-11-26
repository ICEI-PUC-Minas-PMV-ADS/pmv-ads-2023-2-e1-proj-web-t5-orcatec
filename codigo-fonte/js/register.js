var users = [];

function toggleForm() {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

function register() {
  var regUsername = document.getElementById("regUsername").value;
  var regLegalName = document.getElementById("regLegalName").value;
  var regLegalResponsible = document.getElementById("regLegalResponsible").value;
  var regEmail = document.getElementById("regEmail").value;
  var regPhoneNumber = document.getElementById("regPhoneNumber").value;
  var regPassword = document.getElementById("regPassword").value;
  var regConfirmPassword = document.getElementById("regConfirmPassword").value;

  var isUserExist = users.some(function (user) {
    return user.username === regUsername;
  });

  if (isUserExist) {
    alert("Nome de usuario ja existente. Por favor digite um nome de usuario diferente.");
  } else {
    users.push({
      username: regUsername,
      password: regPassword
    });

    alert("Registro concluido com sucesso. Voce ja pode se conectar.");
    toggleForm();
  }
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var isValidUser = users.some(function (user) {
    return user.username === username && user.password === password;
  });

  if (isValidUser) {
    alert("Conectado!");
    // Redireciona para a pagina de login depois de ter sucedido
    window.location.href = "dashboard.html";
  } else {
    alert("Nome de usuario ou senha invalidos. Por favor, tente novamente.");
  }
}