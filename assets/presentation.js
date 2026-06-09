const container = document.getElementById('slideContainer');
const slides    = document.querySelectorAll('.slide');
let current  = 0;
let locked   = false;
const DURATION = 680; // ms — matches CSS animation (0.65s + small buffer)

const SECTIONS = [
    'Inicio','Contexto','Marco Teórico','Estado del Arte',
    'Objetivos','Solución','Arquitectura','Calidad','Resultados','Cierre'
];

function getSection(i) {
    const h = slides[i].querySelector('.section-header');
    return h ? h.textContent.trim() : 'Inicio';
}

function buildBar(slide, i) {
    const colored = slide.classList.contains('slide-colored') ||
                    slide.classList.contains('slide-portada') ||
                    slide.classList.contains('slide-cierre');
    const bar  = document.createElement('div');
    bar.className = 'progress-bar' + (colored ? ' progress-bar-colored' : '');
    const wrap = document.createElement('div');
    wrap.className = 'progress-sections';
    const sec = getSection(i);
    const idx = SECTIONS.indexOf(sec);
    SECTIONS.forEach((s, j) => {
        const el  = document.createElement('div');
        el.className = 'progress-section' +
            (j === idx ? ' active' : j < idx ? ' completed' : '');
        const dot = document.createElement('span');
        dot.className = 'progress-dot';
        const lbl = document.createElement('span');
        lbl.textContent = s;
        el.appendChild(dot);
        el.appendChild(lbl);
        wrap.appendChild(el);
    });
    bar.appendChild(wrap);
    slide.appendChild(bar);
}

// ── Bootstrap ──────────────────────────────────────────────────────────────
slides.forEach((s, i) => {
    buildBar(s, i);
    // All slides hidden by default; JS controls visibility
    if (i === 0) {
        s.style.display = 'flex';
    } else {
        s.style.display = 'none';
    }
});

// ── Transition: new slide fades in on top, old slide hides after ──────────
function go(to) {
    if (to < 0 || to >= slides.length || to === current || locked) return;
    locked = true;

    const fromSlide = slides[current];
    const toSlide   = slides[to];
    const forward   = to > current;

    // Place old slide underneath
    fromSlide.style.zIndex = '1';

    // Show new slide on top, start fade-in animation
    toSlide.style.zIndex   = '2';
    toSlide.style.display  = 'flex';
    toSlide.classList.add(forward ? 'entering-next' : 'entering-prev');

    setTimeout(() => {
        // Clean up animation class
        toSlide.classList.remove('entering-next', 'entering-prev');
        toSlide.style.zIndex = '';

        // Hide the old slide now that new one is fully visible
        fromSlide.style.display = 'none';
        fromSlide.style.zIndex  = '';

        // Reset scroll on the slide we just left
        if (fromSlide.scrollTop) fromSlide.scrollTop = 0;

        current = to;
        locked  = false;
    }, DURATION);
}

// ── Input: keyboard + presenter clicker ───────────────────────────────────
document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowRight': case ' ':         case 'PageDown': case 'Enter':
            e.preventDefault(); go(current + 1); break;
        case 'ArrowLeft':  case 'Backspace': case 'PageUp':
            e.preventDefault(); go(current - 1); break;
        case 'Home': e.preventDefault(); go(0);                 break;
        case 'End':  e.preventDefault(); go(slides.length - 1); break;
    }
});

// Block all scroll / touch
document.addEventListener('wheel',     e => e.preventDefault(), { passive: false });
document.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
