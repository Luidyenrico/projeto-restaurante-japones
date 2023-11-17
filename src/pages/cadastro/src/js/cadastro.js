function salvarCadastro() {
    // Obtém os dados do formulário
    var form = document.getElementById('cadastroForm');
    var formData = new FormData(form);

    // Verifica se há campos vazios ou e-mail inválido
    if (camposVazios(formData)) {
        return; // Interrompe o processo se houver campos vazios ou e-mail inválido
    }

    // Obtém os dados existentes do localStorage ou cria um array vazio
    var dadosCadastrados = JSON.parse(localStorage.getItem('dadosCadastrados')) || [];

    // Adiciona os novos dados ao array
    dadosCadastrados.push(Object.fromEntries(formData));

    // Atualiza o localStorage com os novos dados
    localStorage.setItem('dadosCadastrados', JSON.stringify(dadosCadastrados));

    window.location.href="../login/index.html";
    alert('Cadastro salvo com sucesso!');    
}


function camposVazios(formData) {
    // Itera sobre os pares chave-valor do FormData
    for (var pair of formData.entries()) {
        // Verifica se algum valor está vazio
        if (pair[1].trim() === '') {
            alert("Preencha todos os campos antes de salvar o cadastro.");
            return true; // Campos vazios encontrados
        }

        // Adiciona validação específica para o campo de e-mail
        if (pair[0] === 'email' && !validarEmail(pair[1])) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return true; // E-mail inválido
        }
    }
    return false; // Não há campos vazios ou e-mail inválido
}

function validarEmail(email) {
    // Utiliza uma expressão regular para validar o formato do e-mail
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function baixarDados() {
    var dadosCadastrados = JSON.parse(localStorage.getItem('dadosCadastrados')) || [];

    var texto = '';
    dadosCadastrados.forEach(function (dado) {
        for (var chave in dado) {
            texto += chave + ': ' + dado[chave] + '\t';
        }
        texto += '\n';
    });

    var blob = new Blob([texto], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);

    var link = document.createElement('a');
    link.href = url;
    link.download = 'dados_cadastrados.txt';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
}
