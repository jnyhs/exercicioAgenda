function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("tel").value;


    if (nome.trim() === "" && telefone.trim() === ""){
        alert("Por favor, insira o nome e o telefone do seu contato.")

    }else if ( telefone.trim() === ""){
        alert("Por favor, insira o telefone do seu contato.");
    }else if(nome.trim() === "") {
        alert("Por favor, insira o nome do seu contato.");
    }else {
        alert("Dados inseridos com sucesso!")
    }

    let tabela = document.getElementById("tabela");
    let novaLinha = tabela.insertRow();
    let colunaNome = novaLinha.insertCell(0);
    let colunaTelefone = novaLinha.insertCell(1);

    // Adicionar os valores do contato às colunas
    colunaNome.innerText = nome;
    colunaTelefone.innerText = telefone;

    // Limpar o formulário
    document.getElementById("nome").value = "";
    document.getElementById("tel").value = "";
}