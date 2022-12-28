
const swiper = new Swiper('.main_swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
  }
});

const tabBtn = document.querySelectorAll('.tab_btn')
const tabContents = document.querySelectorAll('.tab_contents')

for(let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click', function(e){
    e.preventDefault();

    for(let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].classList.remove('active')
      tabContents[j].classList.remove('active')
    }

    tabBtn[i].classList.add('active')
    tabContents[i].classList.add('active')
  })
}
const swiper2 = new Swiper('.event_swiper', {
  loop: true,
  
  pagination: {
    el: '.swiper-pagination2',
  },
  autoplay: {
    delay: 3000,
  },
  observer: true,
  observeParents: true,
});

document.querySelector(".swiper-button-pause").addEventListener('click', function(){
  swiper2.autoplay.stop();
  this.style.display = 'none';
  document.querySelector('.swiper-button-play').style.display = 'block';
})

document.querySelector(".swiper-button-play").addEventListener('click', function(){
  swiper2.autoplay.start();
  this.style.display = 'none';
  document.querySelector('.swiper-button-pause').style.display = 'block';
})

const swiper3 = new Swiper('.gallery_swiper', {
  loop: true,
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper4 = new Swiper('.banner_swiper', {
  loop: true,
  breakpoints: {
    330: {
      slidesPerView: 2,
    },
    390: {
      slidesPerView: 2.5,
    },
    550: {
      slidesPerView: 3,
    },
    630: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    }
  }
});


const swiper5 = new Swiper('.tab_swiper1', {
  loop: true,      
  slidesPerView: 1,
  spaceBetween: 18,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper6 = new Swiper('.tab_swiper2', {
  loop: true,      
  slidesPerView: 1,
  spaceBetween: 18,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper7 = new Swiper('.tab_swiper3', {
  loop: true,      
  slidesPerView: 1,
  spaceBetween: 18,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper8 = new Swiper('.tab_swiper4', {
  loop: true,      
  slidesPerView: 1,
  spaceBetween: 18,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper9 = new Swiper('.quick_swiper', {
  slidesPerView: 4,
  breakpoints: {
    330: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 4,
    },
    430: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    530: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".view_next",
    prevEl: ".view_prev",
  },
})