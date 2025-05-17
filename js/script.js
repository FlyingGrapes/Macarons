
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

// .typed-text used in ###Home
  const typedText = document.querySelector(".typed-text");
  const messages = [
    "Welcome to my portfolio!",
    "Cybersecurity meets creativity.",
    "Exploring, building, growing.",
    "Let's make tech human."
  ];
  let i = 0;
  let j = 0;
  let currentMessage = "";
  let isDeleting = false;

  function type() {
    if (i < messages.length) {
      currentMessage = messages[i];
      if (!isDeleting && j <= currentMessage.length) {
        typedText.textContent = currentMessage.slice(0, j++);
        setTimeout(type, 100);
      } else if (isDeleting && j > 0) {
        typedText.textContent = currentMessage.slice(0, j--);
        setTimeout(type, 50);
      } else if (!isDeleting && j > currentMessage.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % messages.length;
        setTimeout(type, 200);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", type);


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

