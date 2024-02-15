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

function toggleFormVisibility() {
  var formulario = document.getElementById('formulario-contato');
  formulario.classList.toggle('mostrando');
}
