function realizarLogin() {
    // Obtém os dados do formulário de login
    var form = document.getElementById('loginForm');
    var formData = new FormData(form);
    var emailDigitado = formData.get('email');
    var senhaDigitada = formData.get('senha');

    // Obtém os dados cadastrados do localStorage
    var dadosCadastrados = JSON.parse(localStorage.getItem('dadosCadastrados')) || [];

    // Verifica se há uma correspondência entre o email/senha digitados e os dados cadastrados
    var usuarioValido = dadosCadastrados.some(function(dado) {
        return dado.email === emailDigitado && dado.senha === senhaDigitada;
    });

    // Exibe uma mensagem de sucesso ou erro
    if (usuarioValido) {
        alert('Login bem-sucedido!');
        window.location.href="../../../index.html"
    } else {
        alert('Email ou senha incorretos. Tente novamente.');
    }
}
