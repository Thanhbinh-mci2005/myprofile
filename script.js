// === Mobile Navigation ===
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// === Navbar scroll effect ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// === Scroll fade-in animation ===
const fadeEls = document.querySelectorAll(
    '.skill-card, .tl-item, .ach-card, .proj-card, .act-card, .act-featured, .edu-card, .cert-chip, .ct-card, .info-item, .about-portrait, .edu-gallery, .tl-image'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

// === Active nav link on scroll ===
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
});

// === Contact form handler ===
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        e.target.reset();
    }, 2500);
}
