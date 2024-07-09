document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("loginForm");
  var emailInput = document.getElementById("exempleEmail1");
  var passwordInput = document.getElementById("exampleInputPassword1");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", function (event) {
    var valid = true;
    emailError.textContent = "";
    passwordError.textContent = "";

    if (emailInput.value.trim() === "") {
      emailError.textContent = "Preencha o campo email.";
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = "Insira o endereço de email válido.";
      valid = false;
    }

    if (passwordError.textContent === "") {
      passwordError.textContent = "Preencha o campo senha";
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
