document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".cookie-banner");
    const acceptButton = document.querySelector("#aceitar-cookie");
    const rejectButton = document.querySelector("#rejeitar-cookie");

    // Verifica se o usuário já fez uma escolha anteriormente
    if (localStorage.getItem("cookies-aceitos")) {
        banner.style.display = "none";
    }

    // Ação ao clicar em "Aceitar"
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookies-aceitos", "true");
        banner.style.display = "none";
    });

    // Ação ao clicar em "Rejeitar"
    rejectButton.addEventListener("click", function () {
        localStorage.setItem("cookies-aceitos", "false");
        banner.style.display = "none";
    });
});
