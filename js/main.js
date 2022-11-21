// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus",function(){
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder","통합검색");
});

searchInputEl.addEventListener("blur",function(){
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder","");
});

//  BADGES
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // gsap.to(요소, 지속시간, {옵션});
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2,{
      x: 0
    });
  }else{
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2,{
      x: 100
    });
  }
} ,300));

// _.throttle(함수, 시간)



toTopEl.addEventListener("click",function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
})


// FADE IN
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // .7s, 1.4s, 2.1s, 2.8s
    opacity: 1
  });
});

// SWIPER
new Swiper(".notice-line .swiper", {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionToggleBtnIcon = promotionToggleBtn.querySelector(".material-icons");

let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add("hide");
    promotionToggleBtnIcon.innerHTML = 'download';
  }else{
    promotionEl.classList.remove("hide");
    promotionToggleBtnIcon.innerHTML = 'upload';   
  }
});

// FLOATING 
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
};

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 20);
floatingObject(".floating3", 1.5, 25);

// SCROLL
const spyEl = document.querySelectorAll("section.scroll-spy");

spyEl.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, "show")
  .addTo(new ScrollMagic.Controller());
});

// AWARDS SLIDE
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
});

// YEAR
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
