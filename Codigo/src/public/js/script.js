document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do modal e do botão
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalButton = document.querySelector(".modal-button");

    // Evento para o botão no modal
    modalButton.addEventListener("click", () => {
        modalOverlay.classList.add("hidden"); // Adiciona a classe que esconde o modal
        document.body.style.overflow = "auto"; // Permite rolar a página após fechar o modal
    });

    // Verifica no localStorage se o modal já foi exibido
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
        modalOverlay.classList.remove("hidden"); // Exibe o modal
        document.body.style.overflow = "hidden"; // Bloqueia a rolagem enquanto o modal está aberto
        localStorage.setItem("modalShown", "true"); // Marca como exibido
    } else {
        modalOverlay.classList.add("hidden"); // Garante que o modal esteja oculto
        document.body.style.overflow = "auto"; // Ativa a rolagem
    }
});
