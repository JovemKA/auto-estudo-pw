// Função para gravar dados no LocalStorage
function gravarDados() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  // Armazenando cada campo em chaves separadas
  localStorage.setItem("nome", nome);
  localStorage.setItem("endereco", endereco);
  localStorage.setItem("email", email);
  localStorage.setItem("telefone", telefone);

  alert("Dados gravados com sucesso!");
}

// Função para exibir dados armazenados
function exibirDados() {
  const nome = localStorage.getItem("nome") || "Não cadastrado";
  const endereco = localStorage.getItem("endereco") || "Não cadastrado";
  const email = localStorage.getItem("email") || "Não cadastrado";
  const telefone = localStorage.getItem("telefone") || "Não cadastrado";

  // Montando o HTML para exibição
  document.getElementById("exibirArea").innerHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Endereço:</strong> ${endereco}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
  `;
}

// Função para enviar dados via WhatsApp
function enviarWhatsApp() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  // Concatenando os dados em uma única string
  const texto = `Nome: ${nome}\nEndereço: ${endereco}\nEmail: ${email}\nTelefone: ${telefone}`;

  // URL para enviar via WhatsApp
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(texto)}`;

  // Redireciona para o link do WhatsApp
  window.open(urlWhatsApp, '_blank');
}
