const slide = document.getElementById('carouselSlide');
    const images = slide.querySelectorAll('img');
    let counter = 0;

    document.getElementById('nextBtn').addEventListener('click', () => {
      counter = (counter + 1) % images.length;
      slide.style.transform = `translateX(-${counter * 100}vw)`;
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      counter = (counter - 1 + images.length) % images.length;
      slide.style.transform = `translateX(-${counter * 100}vw)`;
    });