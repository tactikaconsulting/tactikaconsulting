document.addEventListener('DOMContentLoaded', () => {

    // DATOS SIMULADOS
    const data = {
        totalSavings: 2895000,
        totalClients: 247
    };

    animateCounter('totalSavings', data.totalSavings, '$');
    animateCounter('totalClients', data.totalClients, '');

    // FORMULARIO
    const form = document.getElementById('cotizacionForm');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const nombre = nombreInput().value;
        const whatsapp = whatsappInput().value.replace(/\D/g, '');
        const correo = correoInput().value;
        const tipo = tipoInput().value;
        const detalle = detalleInput().value;

        const mensaje =
`Hola, quiero una cotización:

👤 Nombre: ${nombre}
📧 Correo: ${correo}
📦 Tipo: ${tipo}
📝 Detalle: ${detalle}`;

        window.open(`https://wa.me/56964295330?text=${encodeURIComponent(mensaje)}`, '_blank');
        form.reset();
    });

    // FUNCIONES
    function animateCounter(id, value, prefix) {
        const el = document.getElementById(id);
        let start = 0;
        const duration = 1500;
        const step = value / (duration / 16);

        const interval = setInterval(() => {
            start += step;
            if (start >= value) {
                start = value;
                clearInterval(interval);
            }
            el.textContent = prefix + Math.floor(start).toLocaleString('es-CL');
        }, 16);
    }

    function nombreInput(){ return document.getElementById('nombre'); }
    function whatsappInput(){ return document.getElementById('whatsapp'); }
    function correoInput(){ return document.getElementById('correo'); }
    function tipoInput(){ return document.getElementById('tipo'); }
    function detalleInput(){ return document.getElementById('detalle'); }

});
