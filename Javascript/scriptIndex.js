document.addEventListener('DOMContentLoaded', () => {
    // Seu código JavaScript aqui

    // Função para definir um cookie com a preferência do usuário
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Função para ocultar o banner de consentimento
function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookie-consent');
    cookieBanner.style.display = 'none';
}

// Event listener para aceitar cookies
document.getElementById('accept-cookies').addEventListener('click', () => {
    setCookie('cookies-accepted', 'true', 365); // Armazena a preferência do usuário por 365 dias
    hideCookieBanner();
});

// Event listener para rejeitar cookies
document.getElementById('reject-cookies').addEventListener('click', () => {
    setCookie('cookies-accepted', 'false', 365);
    hideCookieBanner();
});

// Verifica se o usuário já fez uma escolha anteriormente
window.addEventListener('load', () => {
    const cookiesAccepted = document.cookie.includes('cookies-accepted=true');
    if (!cookiesAccepted) {
        const cookieBanner = document.getElementById('cookie-consent');
        cookieBanner.style.display = 'block';
    }
});

});


