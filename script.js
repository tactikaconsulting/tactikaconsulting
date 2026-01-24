document.addEventListener('DOMContentLoaded', () => {

  // Animaciones
  const pasos = document.querySelectorAll('.paso');
  pasos.forEach(paso => {
    paso.style.opacity = '0';
    paso.style.transform = 'translateY(30px)';
    paso.style.transition = 'all 0.6s ease';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  pasos.forEach(paso => observer.observe(paso));

  // FORMULARIO WHATSAPP
  const form = document.getElementById('form-whatsapp');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const correo = document.getElementById('correo').value;
    const tipo = document.getElementById('tipo').value;
    const detalle = document.getElementById('detalle').value;
    const presupuesto = document.getElementById('presupuesto').value;

    let mensaje = `Hola, quiero una cotización con Compra Inteligente:%0A%0A`;
    mensaje += `👤 Nombre: ${nombre}%0A`;
    mensaje += `📲 WhatsApp: ${whatsapp}%0A`;
    mensaje += `📧 Correo: ${correo}%0A`;
    mensaje += `📦 Tipo: ${tipo}%0A`;
    mensaje += `📝 Detalle: ${detalle}%0A`;
    if (presupuesto) {
      mensaje += `💰 Presupuesto: $${presupuesto}%0A`;
    }

    const url = `https://wa.me/56964295330?text=${mensaje}`;
    window.open(url, '_blank');
  });

});
