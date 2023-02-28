const elem = document.querySelector("#parallax");

function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${50 - (_mouseX - _w) * 0.003}% ${50 - (_mouseY - _h) * 0.01}%`;
  let x = `${_depth1}`;
  //console.log(x);
  elem.style.backgroundPosition = x;
}


// Magic happens here


const elem2 = document.querySelector(".flow-0");
function parallax2(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.001}%`;
  let x = `${_depth1}`;
  //console.log(x);
  elem2.style.backgroundPosition = x;

}

document.addEventListener("mousemove", parallax2);
document.addEventListener("mousemove", parallax);

const swiper = new Swiper('.main-swiper', {
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

  slidesPerView: '1',

  freeMode: true,

  speed: 7000,

  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
  },
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
    },
  }
});

swiper.autoplay.run()

const cardSwiper = new Swiper('.card-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: '2',
  loop: true,
  autoplay: true,

  autoplay: {
    delay: 2000,

  },
  //cssMode: true,
  //
  //effect: 'cards',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});

const modalOpen = function (project) {
  document.querySelector(`.${project}-m`).style.display = "flex";
  document.querySelector('body').classList.add('body-no-scroll');
  if (project == 'portrait') {
    cardSwiper.autoplay.running = true;
    cardSwiper.autoplay.start();
  }
  swiper.autoplay.running = false;

  window.onclick = function (event) {

    if (event.target == document.querySelector(`.${project}-m`)) {
      document.querySelector(`.${project}-m`).style.display = "none";
      document.querySelector('body').classList.remove('body-no-scroll');
      swiper.autoplay.running = true;
    }
  }
};

const fleche = document.querySelector('.arrow-box');

fleche.addEventListener("click", function () {
  let hauteur = document.querySelector('.reali').getBoundingClientRect();
  console.log(hauteur.top);
  window.scrollTo({ left: 0, top: hauteur.top, behavior: 'smooth' });
});


