function salvarCadastro() {
    // Obtém os dados do formulário
    var form = document.getElementById('cadastroForm');
    var formData = new FormData(form);

    // Obtém os dados existentes do localStorage ou cria um array vazio
    var dadosCadastrados = JSON.parse(localStorage.getItem('dadosCadastrados')) || [];

    // Adiciona os novos dados ao array
    dadosCadastrados.push(Object.fromEntries(formData));

    if ()

    // Atualiza o localStorage com os novos dados
    localStorage.setItem('dadosCadastrados', JSON.stringify(dadosCadastrados));

    alert('Cadastro salvo com sucesso!');
    window.location.href="../login/index.html";
}

function baixarDados() {
    var dadosCadastrados = JSON.parse(localStorage.getItem('dadosCadastrados')) || [];

    var texto = '';
    dadosCadastrados.forEach(function(dado) {
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