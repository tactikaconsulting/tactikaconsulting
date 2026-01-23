// Smooth scroll y animaciones
document.addEventListener('DOMContentLoaded', function() {
    // Animar pasos al scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('.paso').forEach(paso => {
        paso.style.opacity = '0';
        paso.style.transform = 'translateY(30px)';
        paso.style.transition = 'all 0.6s ease';
        observer.observe(paso);
    });
    
    // WhatsApp click tracking (opcional)
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            gtag?.('event', 'whatsapp_click', { 'event_category': 'conversion' });
        });
    });
});


