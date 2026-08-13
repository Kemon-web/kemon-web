// KEMON — interacciones ligeras (sin dependencias)

document.addEventListener('DOMContentLoaded', () => {

  // Menú móvil
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const abierto = links.classList.toggle('abierto');
      toggle.setAttribute('aria-expanded', abierto);
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('abierto');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Aparición suave al hacer scroll
  const elementos = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && elementos.length) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    elementos.forEach(el => observador.observe(el));
  } else {
    elementos.forEach(el => el.classList.add('visible'));
  }
});
