
// Initialize swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openPopupBtn");
  const closeBtn = document.getElementById("closePopupBtn");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popupOverlay");

  openBtn.addEventListener("click", function () {
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});

