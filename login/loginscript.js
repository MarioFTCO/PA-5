// Seleccionar elementos del DOM
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');

// Función para manejar el inicio de sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log(`Iniciando sesión con usuario: ${username} y contraseña: ${password}`);
});

// Función para manejar la creación de cuenta
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    // Aquí puedes agregar la lógica para crear una nueva cuenta
    console.log(`Creando cuenta con nombre: ${name}, correo: ${email} y contraseña: ${password}`);
});

// Función para alternar entre inicio de sesión y creación de cuenta
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});