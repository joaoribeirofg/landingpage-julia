function changeSlide(slider) {
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;
  
    // Adiciona a classe 'active' à primeira imagem inicialmente
    slides[currentIndex].classList.add('active');
  
    // Troca a imagem a cada 5 segundos
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length; // Próxima imagem
        slides[currentIndex].classList.add('active');
    }, 2000);
  }
  
  // Inicializa o slider no "hero" e no "header"
  const heroSlider = document.querySelector('.image-slider');
  const headerSlider = document.querySelector('.header-slider');
  
  if (heroSlider) {
    changeSlide(heroSlider);
  }
  
  if (headerSlider) {
    changeSlide(headerSlider);
  }