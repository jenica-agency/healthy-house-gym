// function change navbar background on scroll
// function changeNavcColor (){
//     let navbar = document.querySelector(".custom-nav");
//     let logoImg = document.querySelector(".logo-img");

//     // console.log(logoImg);
//     let scroll = window.scrollY;
//     if(scroll < 500){
//         navbar.classList.remove("scroll-nav");
//         logoImg.setAttribute("src","./assest/imgs/logo-black.png");

//     }else{
//         navbar.classList.add("scroll-nav");
//         logoImg.setAttribute("src","./assest/imgs/logo.png");

//     }
// }
// window.addEventListener('scroll', changeNavcColor);

// function tabs in slider two
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    const arrow = this.querySelector(".arrow-down");
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
      ele.querySelector(".arrow-down").classList.remove("rotate");
    });

    e.currentTarget.classList.add("active");
    arrow.classList.toggle("rotate");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });

    document.querySelector(e.currentTarget.dataset.content).style.display =
      "flex";
  });
});

// swiper function

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
