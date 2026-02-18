document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope-container');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('musicaFondo');

    // Función para abrir la invitación
    function openInvitation() {
        envelope.style.opacity = '0';
        envelope.style.visibility = 'hidden';
        mainContent.style.display = 'flex';

        if (audio) {
            audio.play().catch(e => console.log('Audio no pudo reproducirse:', e));
        }
    }

    envelope.addEventListener('click', openInvitation);
    envelope.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openInvitation();
        }
    });

    // ===== CUENTA REGRESIVA =====
    // Fecha objetivo: 28 de marzo de 2026, 14:00 (mes 2 = Marzo)
    const targetDate = new Date(2026, 2, 28, 14, 0, 0).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Si ya pasó, mostrar ceros o un mensaje
            document.getElementById('dias').textContent = '00';
            document.getElementById('horas').textContent = '00';
            document.getElementById('minutos').textContent = '00';
            document.getElementById('segundos').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('dias').textContent = days.toString().padStart(2, '0');
        document.getElementById('horas').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutos').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('segundos').textContent = seconds.toString().padStart(2, '0');
    }

    // Actualizar cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});