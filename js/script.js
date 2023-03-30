// Selecciona todos los enlaces en el menú de navegación
const navLinks = document.querySelectorAll('nav a');

// Agrega un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Evita el comportamiento predeterminado del enlace
    e.preventDefault();

    // Obtén la sección de destino del atributo href del enlace
    const section = document.querySelector(link.hash);

    // Usa el método scrollIntoView para desplazarse suavemente a la sección de destino
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Selecciona todas las habilidades
const skills = document.querySelectorAll('.sub-contenedor-2');

// Itera sobre cada habilidad
skills.forEach(skill => {
  // Obtiene el número de círculos llenos en la habilidad
  const filledCircles = skill.querySelectorAll('.fas.fa-circle').length;

  // Obtiene el número total de círculos en la habilidad
  const totalCircles = skill.querySelectorAll('.fas.fa-circle, .far.fa-circle').length;

  // Calcula el porcentaje de habilidad
  const percent = filledCircles / totalCircles * 100;

  // Crea una animación usando anime.js para aumentar la anchura del elemento de progreso de habilidad
  anime({
    targets: skill.querySelector('.fa-circle:first-child').parentNode,
    width: `${percent}%`,
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 500
  });
});

// Selecciona el formulario de contacto
const contactForm = document.querySelector('#contact form');

// Agrega un evento de envío al formulario
contactForm.addEventListener('submit', e => {
  // Obtén los valores de los campos de nombre, correo electrónico y mensaje
  const name = contactForm.querySelector('#name').value;
  const email = contactForm.querySelector('#email').value;
  const message = contactForm.querySelector('#message').value;

  // Verifica que todos los campos requeridos estén completos
  if (!name || !email || !message) {
    // Si falta algún campo, evita que se envíe el formulario y muestra un mensaje de error
    e.preventDefault();
    alert('Por favor complete todos los campos requeridos.');
  }
});
