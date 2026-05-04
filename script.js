document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById("mySidebar");
  const overlay = document.getElementById("overlay");

  window.w3_open = function () {
    sidebar.style.display = "block";
    overlay.style.display = "block";
  }

  window.w3_close = function () {
    sidebar.style.display = "none";
    overlay.style.display = "none";
  }

  // Testimonial Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  window.goToSlide = function(index) {
    showSlide(index);
  }

  // Auto slide every 4 seconds
  setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }, 4000);

});
