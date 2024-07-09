document.addEventListener('DOMContentLoaded', function() {
    var entrarBtn = document.getElementById('entrarBtn');
    var emailInput = document.getElementById('exampleInputEmail1');
    var passwordInput = document.getElementById('exampleInputPassword1');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var message = document.getElementById('message');

    entrarBtn.addEventListener('click', function() {
        var valid = true;

        emailError.textContent = '';
        passwordError.textContent = '';
        message.textContent = '';

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Preencha o campo Email.';
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Insira um endereço de email válido.';
            valid = false;
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Preencha o campo Senha.';
            valid = false;
        }

        if (!valid) {
            message.textContent = '';
            message.className = 'error';
        } else {
            message.textContent = 'Login realizado com sucesso!';
            message.className = 'success';
        
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
