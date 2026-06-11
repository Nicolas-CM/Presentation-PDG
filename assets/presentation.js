/* ==========================================
   VIMOV — NAVEGACIÓN DE PRESENTACIÓN
   Universidad Icesi
   ========================================== */

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let hideControlsTimeout;

function scaleSlides() {
    const baseWidth = 1920;
    const baseHeight = 1080;

    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;

    const scale = Math.min(scaleX, scaleY);

    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.transform =
            `translate(-50%, -50%) scale(${scale})`;
    });
}

// Crear controles de navegación dinámicamente
function createNavigationControls() {
    const navControls = document.createElement('div');
    navControls.className = 'nav-controls';
    navControls.id = 'navControls';
    navControls.innerHTML = `
        <button class="nav-btn" id="prevBtn" aria-label="Slide anterior">←</button>
        <span class="slide-counter">
            <span id="currentSlide">1</span> / <span id="totalSlides">${totalSlides}</span>
        </span>
        <button class="nav-btn" id="nextBtn" aria-label="Siguiente slide">→</button>
    `;
    document.body.appendChild(navControls);
    
    // Agregar event listeners
    document.getElementById('prevBtn').addEventListener('click', () => changeSlide(-1));
    document.getElementById('nextBtn').addEventListener('click', () => changeSlide(1));
}

// Mostrar controles al mover el mouse
function showControls() {
    const navControls = document.getElementById('navControls');
    navControls.classList.add('visible');
    
    // Cancelar timeout anterior si existe
    clearTimeout(hideControlsTimeout);
    
    // Ocultar después de 3 segundos sin movimiento
    hideControlsTimeout = setTimeout(() => {
        navControls.classList.remove('visible');
    }, 3000);
}

// Detectar movimiento del mouse
document.addEventListener('mousemove', showControls);

// Mantener visibles al pasar el mouse sobre los controles
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const navControls = document.getElementById('navControls');
        if (navControls) {
            navControls.addEventListener('mouseenter', () => {
                clearTimeout(hideControlsTimeout);
            });
            navControls.addEventListener('mouseleave', () => {
                hideControlsTimeout = setTimeout(() => {
                    navControls.classList.remove('visible');
                }, 1000);
            });
        }
    }, 100);
});

// Mostrar slide específica
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
    
    document.getElementById('currentSlide').textContent = index + 1;
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === totalSlides - 1;
}

// Cambiar slide
function changeSlide(direction) {
    currentSlideIndex += direction;
    currentSlideIndex = Math.max(0, Math.min(currentSlideIndex, totalSlides - 1));
    showSlide(currentSlideIndex);
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        changeSlide(1);
    } else if (e.key === 'Home') {
        currentSlideIndex = 0;
        showSlide(currentSlideIndex);
    } else if (e.key === 'End') {
        currentSlideIndex = totalSlides - 1;
        showSlide(currentSlideIndex);
    }
});

// Soporte para gestos táctiles (swipe)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - siguiente slide
            changeSlide(1);
        } else {
            // Swipe right - slide anterior
            changeSlide(-1);
        }
    }
}

// Inicializar presentación
window.addEventListener('DOMContentLoaded', () => {
    scaleSlides();
    createNavigationControls();
    showSlide(0);
    console.log(`✅ Presentación inicializada: ${totalSlides} slides`);
    
    // Mostrar hint de navegación por 4 segundos
    showKeyboardHint();
});

// Mostrar hint inicial de navegación por teclado
function showKeyboardHint() {
    const hint = document.createElement('div');
    hint.className = 'keyboard-hint';
    hint.innerHTML = 'Usa las flechas ← → o mueve el mouse para navegar';
    document.body.appendChild(hint);
    
    // Mostrar después de 500ms
    setTimeout(() => {
        hint.classList.add('show');
    }, 500);
    
    // Ocultar después de 4 segundos
    setTimeout(() => {
        hint.classList.add('hide');
        // Eliminar del DOM después de la animación
        setTimeout(() => {
            hint.remove();
        }, 500);
    }, 4500);
    
    // Ocultar si el usuario hace algo (click, tecla o movimiento)
    const hideHint = () => {
        if (hint && hint.parentNode) {
            hint.classList.add('hide');
            setTimeout(() => hint.remove(), 500);
        }
        // Remover listeners después de usarlos
        document.removeEventListener('keydown', hideHint);
        document.removeEventListener('click', hideHint);
        document.removeEventListener('mousemove', hideOnMove);
    };
    
    let moved = false;
    const hideOnMove = () => {
        if (!moved) {
            moved = true;
            return; // Ignorar el primer movimiento
        }
        hideHint();
    };
    
    document.addEventListener('keydown', hideHint);
    document.addEventListener('click', hideHint);
    document.addEventListener('mousemove', hideOnMove);
}

// Modo presentación con fullscreen (F11 o doble click)
document.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Los controles ya están ocultos por defecto en fullscreen
// Solo se mostrarán al mover el mouse gracias a showControls()
window.addEventListener('resize', scaleSlides);
