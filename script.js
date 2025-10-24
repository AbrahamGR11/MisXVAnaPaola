// --- Lógica de la Música de Fondo ---
window.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    let isPlaying = false;

    // Se necesita interacción del usuario para reproducir audio automáticamente.
    document.body.addEventListener('click', () => {
        if (!isPlaying) {
            music.play();
            isPlaying = true;
            musicToggle.textContent = '⏸️';
        }
    }, { once: true });

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicToggle.textContent = '▶️';
        } else {
            music.play();
            musicToggle.textContent = '⏸️';
        }
        isPlaying = !isPlaying;
    });
});


// --- Lógica de la Cuenta Regresiva ---
// La fecha debe estar en formato "Mes día, año hh:mm:ss"
const countdownDate = new Date("Dec 6, 2025 13:30:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado si los elementos existen
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    // Si la cuenta termina
    if (distance < 0) {
        clearInterval(countdownFunction);
        if (document.getElementById("countdown-timer")) {
            document.getElementById("countdown-timer").innerHTML = "¡El gran día ha llegado!";
        }
    }
}, 1000);

// --- Lógica del Botón de WhatsApp ---
document.getElementById("whatsapp-button").addEventListener('click', () => {
    // ¡¡¡IMPORTANTE!!! Reemplaza este número con el tuyo.
    const phoneNumber = "524422600601"; 
    const message = "Hola, quiero confirmar mi asistencia a los XV años de Ana Paola.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});


// --- Lógica de la Música de Fondo (Versión con Reproductor Dedicado) ---
window.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('background-music');
    const mainMusicButton = document.getElementById('main-music-button');
    const musicIcon = mainMusicButton.querySelector('i');
    const lanternIcon = document.querySelector('.lantern-icon');
    let isPlaying = false;

    // Función para manejar la reproducción/pausa
    function togglePlay() {
        if (isPlaying) {
            music.pause();
            musicIcon.className = 'fa-solid fa-play';
            lanternIcon.classList.remove('spinning');
        } else {
            music.play();
            musicIcon.className = 'fa-solid fa-pause';
            lanternIcon.classList.add('spinning');
        }
        isPlaying = !isPlaying;
    }

    // Asignar el evento al nuevo botón
    mainMusicButton.addEventListener('click', togglePlay);
});

// --- Lógica de la Galería de Fotos (Lightbox) ---
window.addEventListener('DOMContentLoaded', () => {
    const galleryLinks = document.querySelectorAll('.gallery-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    galleryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que el navegador siga el enlace
            lightboxImg.src = link.href; // Establece la imagen grande
            lightbox.classList.add('active'); // Muestra el lightbox
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
        });
    });

    // Función para cerrar el lightbox
    function closeLightbox() {
        lightbox.classList.remove('active'); // Oculta el lightbox
        document.body.style.overflow = ''; // Restaura el scroll del fondo
        lightboxImg.src = ''; // Limpia la imagen para liberar memoria
    }

    // Cerrar al hacer clic en el botón X
    lightboxClose.addEventListener('click', closeLightbox);

    // Cerrar al hacer clic fuera de la imagen (en el fondo oscuro)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) { // Solo si se hace clic directamente en el overlay
            closeLightbox();
        }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});