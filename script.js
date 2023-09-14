function cadastrarEspecialidade() {
    const nomeEspecialidade = document.getElementById('nomeEspecialidade').value;

    // Verifica se o nome da especialidade foi preenchido
    if (!nomeEspecialidade) {
        alert('Por favor, preencha o nome da especialidade.');
        return;
    }

    // Formata os dados no formato JSON
    const data = {
        nomeEspecialidade: nomeEspecialidade
    };

    // Envia a requisição POST para o servidor Spring com o corpo em formato JSON
    fetch('http://localhost:8080/clinica/especialidade/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Converte o objeto em uma string JSON
    })
    .then(response => {
        if (response.status === 200) {
            alert('Especialidade cadastrada com sucesso!');
            // Limpar o campo após o cadastro
            document.getElementById('nomeEspecialidade').value = '';
        } else {
            alert('Erro ao cadastrar a especialidade.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao realizar a requisição.');
    });
}
    