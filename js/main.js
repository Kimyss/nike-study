new Swiper('.section-4 .swiper', {
  loop: true, 
  slidesPerView: 3, 
  spaceBetween: 30, 
  navigation: { 
    nextEl: '.section-4 .swiper-button-next',
    prevEl: '.section-4 .swiper-button-prev',
  },
});


new Swiper('.section-5 .swiper', {
  loop: true,
  autoplay:{
    delay:5000
  },
  slidesPerView: 3, 
  spaceBetween: 10,
  navigation: { 
    nextEl: '.section-5 .swiper-button-next',
    prevEl: '.section-5 .swiper-button-prev',
  },
});


const fadeEls = document.querySelectorAll('.section-1 .fade-in');
console.log(fadeEls);
fadeEls.forEach(function (fadeEl, index) {
  console.log(index);
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.3
  });
});

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(toTopEl, 1, {
      opacity: 0.8,
      y: 0
    });
  } else {
    gsap.to(toTopEl, 1, {
      opacity: 0,
      y: 100,
    });
  }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
console.log(new Date().getFullYear());