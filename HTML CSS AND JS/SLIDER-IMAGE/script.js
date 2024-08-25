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

    autoplay: {
        delay: 4000,
      },
  });


//   <!-- Setup and start animation! -->

  var typed = new Typed("#element", {
    strings: ["<h1>Naruto uzumaki</h1>"],
    typeSpeed: 100,
    backDelay: 700,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
  });

  var typed = new Typed("#element1", {
  strings: ["<h1>Jujutsu kaisen</h1>"],
  typeSpeed: 100,
  backDelay: 700,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
});


var typed = new Typed("#element2", {
  strings: ["<h1>demon slayer</h1>"],
  typeSpeed: 100,
  backDelay: 700,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
});

var typed = new Typed("#element3", {
    strings: ["<h1>One piece</h1>"],
    typeSpeed: 100,
    backDelay: 700,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
  });


//   video1

let video = document.querySelector(".video")
let button = document.querySelector(".btn-grad")
let close = document.querySelector('.close')

button.addEventListener('click', ()=>{
    video.classList.add('video-active')
})

close.addEventListener('click', ()=>{
    video.classList.remove('video-active')
})

//   video2

let video1 = document.querySelector(".video1")
let button1 = document.querySelector(".btn-grad1")
let close1 = document.querySelector('.close1')

button1.addEventListener('click', ()=>{
    video1.classList.add('video1-active')
})
close1.addEventListener('click', ()=>{
    video1.classList.remove('video1-active')
})

//   video3

let video2 = document.querySelector(".video2")
let button2 = document.querySelector(".btn-grad2")
let close2 = document.querySelector('.close2')

button2.addEventListener('click', ()=>{
    video2.classList.add('video2-active')
})
close2.addEventListener('click', ()=>{
    video2.classList.remove('video2-active')
})

//   video4

let video3 = document.querySelector(".video3")
let button3 = document.querySelector(".btn-grad3")
let close3 = document.querySelector('.close3')

button3.addEventListener('click', ()=>{
    video3.classList.add('video3-active')
})
close3.addEventListener('click', ()=>{
    video3.classList.remove('video3-active')
})