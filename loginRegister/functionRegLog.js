document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert("Usuário cadastrado com sucesso!");
});
