const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const blurOverlay = document.querySelector('.blur-overlay');
const menu = document.querySelector('.menu');

// Función para activar el modo móvil
function activateMobileMode() {
  if (window.innerWidth <= 768) {
    toggleBtn.style.display = 'block';
  } else {
    toggleBtn.style.display = 'none';
    sidebar.classList.remove('open');
    content.classList.remove('open');
    blurOverlay.classList.remove('open');
  }
}

// Llamar a la función inicialmente
activateMobileMode();

// Agregar evento de redimensionamiento de ventana
window.addEventListener('resize', activateMobileMode);

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  content.classList.toggle('open');
  blurOverlay.classList.toggle('open');
});

blurOverlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  content.classList.remove('open');
  blurOverlay.classList.remove('open');
});