document.addEventListener('DOMContentLoaded', () => {
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
});
