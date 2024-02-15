const imagens = document.querySelectorAll(".sidebar ul li img");
const redeSociais = document.querySelectorAll(".redes-sociais a");

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("mouseover", (event) => {
    event.target.style.cursor = "pointer"; // Altera o cursor para ponteiro
    event.target.style.opacity = 0.8; // Adiciona um leve fade à imagem
  });

  imagens[i].addEventListener("mouseout", (event) => {
    event.target.style.cursor = "default"; // Volta o cursor ao normal
    event.target.style.opacity = 1; // Remove o fade
  });
}

for (let i = 0; i < redeSociais.length; i++) {
  redeSociais[i].addEventListener("mouseover", (event) => {
    event.target.style.cursor = "pointer"; // Altera o cursor para ponteiro
    event.target.style.opacity = 0.8; // Adiciona um leve fade à imagem
  });

  redeSociais[i].addEventListener("mouseout", (event) => {
    event.target.style.cursor = "default"; // Volta o cursor ao normal
    event.target.style.opacity = 1; // Remove o fade
  });
}

/// Função para mostrar popup de campo obrigatório
function mostraPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
}

// Função para ocultar popup de campo obrigatório
function escondePopup(input, label) {
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

// Função para validar input
function validarInput(input, helper, regex, errorMessage) {
  input.addEventListener("change", (event) => {
    let valor = event.target.value;

    if (regex.test(valor)) {
      input.classList.remove("error");
      input.classList.add("correct");
      helper.classList.remove("visible");
    } else {
      input.classList.remove("correct");
      input.classList.add("error");
      helper.innerText = errorMessage;
      helper.classList.add("visible");
    }
  });
}

// Armazenar elementos HTML em variáveis
let nomeNegocioInput = document.getElementById("nomeNegocio");
let nomeNegocioLabel = document.querySelector('label[for="nomeNegocio"]');
let nomeNegocioHelper = document.getElementById("nomeDaEmpresa-helpe");

let tipoNegocioInput = document.getElementById("tipoDeNegocio");
let tipoNegocioLabel = document.querySelector('label[for="tipoDeNegocio"]');
let tipoNegocioHelper = document.getElementById("tipoDeNegocio-helper");

let enderecoInput = document.getElementById("endereco");
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.getElementById("endereco-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");

let descricaoInput = document.getElementById("descricao");
let descricaoLabel = document.querySelector('label[for="descricao"]');
let descricaoHelper = document.getElementById("descricao-helper");

// Aplicar funções de mostrar e ocultar popup para cada input
mostraPopup(nomeNegocioInput, nomeNegocioLabel);
escondePopup(nomeNegocioInput, nomeNegocioLabel);
mostraPopup(tipoNegocioInput, tipoNegocioLabel);
escondePopup(tipoNegocioInput, tipoNegocioLabel);
mostraPopup(enderecoInput, enderecoLabel);
escondePopup(enderecoInput, enderecoLabel);
mostraPopup(emailInput, emailLabel);
escondePopup(emailInput, emailLabel);
mostraPopup(telefoneInput, telefoneLabel);
escondePopup(telefoneInput, telefoneLabel);
mostraPopup(descricaoInput, descricaoLabel);
escondePopup(descricaoInput, descricaoLabel);

// Aplicar validação para cada input
validarInput(nomeNegocioInput, nomeNegocioHelper, /.+/, "Por favor, insira o nome da empresa");
validarInput(tipoNegocioInput, tipoNegocioHelper, /.+/, "Por favor, insira o tipo de negócio");
validarInput(enderecoInput, enderecoHelper, /.+/, "Por favor, insira o endereço");
validarInput(emailInput, emailHelper, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Por favor, insira um email válido");
validarInput(telefoneInput, telefoneHelper, /.+/, "Por favor, insira um número de telefone");
validarInput(descricaoInput, descricaoHelper, /.+/, "Por favor, insira uma descrição do negócio");

// Armazenar o formulário em uma variável
let formularioContato = document.querySelector("form");

// Função para verificar se todos os campos estão preenchidos
function verificarCamposPreenchidos() {
  let inputs = formularioContato.querySelectorAll("input, textarea");
  let preenchidos = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      preenchidos = false;
      return;
    }
  });

  return preenchidos;
}

// Adicionar evento de envio ao formulário
formularioContato.addEventListener("submit", (event) => {
  if (!verificarCamposPreenchidos()) {
    event.preventDefault(); // Impede o envio do formulário se os campos não estiverem preenchidos
    alert("Por favor, preencha todos os campos antes de enviar o formulário.");
  }
});