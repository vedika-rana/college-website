// Crestwood University - Image Preloading & Interactive Features
document.addEventListener('DOMContentLoaded', () => {
  // Preload all critical images into browser cache
  const imagesToPreload = [
    'crestwoodimage.jpg',
    'crousel/classroom.jpg',
    'crousel/lab.jpg',
    'crousel/lib.jpg',
    'crousel/ground.jpg',
    'courses/cs.jpg',
    'courses/engineering.jpg',
    'courses/health.jpg',
    'courses/postgraduate.jpg',
    'courses/management.jpg',
    'courses/law.jpg',
  ];

  imagesToPreload.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  const navLinks = document.querySelectorAll('.custom-nav .nav-link');
  const sections = document.querySelectorAll('section, div.hero');

  // Update active state on click
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Highlight active nav item on scroll
  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute('id');
      }
    });

    if (currentSection) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
