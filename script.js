document.addEventListener('DOMContentLoaded', function() {
    var entrarBtn = document.getElementById('entrarBtn');
    var emailInput = document.getElementById('exampleInputEmail1');
    var passwordInput = document.getElementById('exampleInputPassword1');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var message = document.getElementById('message');

    entrarBtn.addEventListener('click', function(event) {

        var valid = true;
        emailError.textContent = '';
        passwordError.textContent = '';
        message.textContent = '';

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Por favor, preencha o campo Email.';
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Por favor, insira um endereço de email válido.';
            valid = false;
        }

        // Verifica se o campo de senha está vazio
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Por favor, preencha o campo Senha.';
            valid = false;
        }

        if (!valid) {
            message.textContent = 'Por favor, corrija os erros antes de enviar.';
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
