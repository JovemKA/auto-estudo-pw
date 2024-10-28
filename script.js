function gravarDados() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Armazenando os dados no localStorage em chaves separadas
    localStorage.setItem("nome", nome);
    localStorage.setItem("endereco", endereco);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);

    alert("Dados gravados com sucesso!");
}

function exibirDados() {
    // Recuperando os dados do localStorage
    const nome = localStorage.getItem("nome");
    const endereco = localStorage.getItem("endereco");
    const email = localStorage.getItem("email");
    const telefone = localStorage.getItem("telefone");

    // Exibindo os dados recuperados
    document.getElementById("exibirDados").innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Endereço:</strong> ${endereco}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
    `;
}
