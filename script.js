// Exibe o modal ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("lgpd-modal");
    const closeModal = document.getElementById("close-modal");

    // Exibe o modal
    modal.style.display = "flex";

    // Fecha o modal ao clicar no botão
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});