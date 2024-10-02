document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('password').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert("login realizado com sucesso");
        window.location.href = "../user/perfil.html";
    }
    else {
        alert("Email ou senha incorreto. Tente novamente.")
    };
});