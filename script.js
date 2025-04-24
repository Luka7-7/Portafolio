function toggleMenu() {
  const menu = document.getElementById('dropdown-menu');
  menu.classList.toggle('show');
}

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.style.setProperty('--primary-color', isDarkMode ? 'black' : 'white');
document.documentElement.style.setProperty('--secondary-color', isDarkMode ? 'white' : 'black');

//carrusel
document.querySelectorAll('.carousel-container').forEach((carousel) => {
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const progressBar = carousel.querySelector('.progress-bar');
  let currentIndex = 0;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex);
    });
    const progress = ((currentIndex + 1) / items.length) * 100;
    progressBar.style.width = `${progress}%`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  // Inicializar
  updateCarousel();
});
