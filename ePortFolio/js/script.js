import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// configure modules you want to use
Swiper.use([Navigation, Pagination, Scrollbar]);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
