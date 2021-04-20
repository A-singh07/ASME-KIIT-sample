// Dark Mode toggler

var toggler_p = $("#toggle-p");

$(".mode-toggler").click(function () {

  $("body, html").toggleClass("darkMode");

  if (toggler_p.text() == "Go Dark")
    toggler_p.text("Go Light");
  else
    toggler_p.text("Go Dark");
});

// const options = {
//   bottom: '64px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#100f2c',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true // default: true
// }

// const darkmode = new Darkmode(options);
// darkmode.showWidget();

//  ------ scrollBar -------

// window.addEventListener('scroll', this.handleScroll, true);
// handleScroll = (e) => {
//     if (e.target.classList.contains("on-scrollbar") === false) {
//         e.target.classList.add("on-scrollbar");
//     }
// }


// ----- Loader  --- Gsap 

const tl = gsap.timeline();

tl.to(".hide-text", {
  y: "0%",
  duration: 1.3,
  stagger: 0.3,
  ease: "back.out"
});
tl.to(".intro-slider", {
  y: "-100%",
  duration: 1.5,
  delay: 0.6
});
tl.to(".intro", {
  y: "-100%",
  duration: 1
}, "-=1");

//Important -- till the final responsive layout is ready
// if (window.matchMedia("(min-width: 769px)").matches) {
//     tl.fromTo("#mother-container", { autoAlpha: "0", display: "none" }, { autoAlpha: "1", display: "block" }, "-=1");
// }

tl.fromTo("#motsher-container", { autoAlpha: "0" }, { autoAlpha: "1" }, "-=1");

if (window.matchMedia("(min-width: 800px)").matches) {

  let navTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "bottom 20%",
      toggleActions: "play none none reverse",
      markers: false
    }
  });

  let blog_btn = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "bottom 15%",
      toggleActions: "play none none reverse",
      markers: false
    }
  });

  navTl
    .fromTo("#sidebar", { autoAlpha: 0, x: "-100px" }, { autoAlpha: 1, x: "20px" }, "-=0.5");
  // .fromTo("#sidebar ul li", { x: "-100px" }, { x: "0", stagger: 0.1 }, "-=0.6");
  // .fromTo("#nav", { autoAlpha: 0, x: "-100px" }, { autoAlpha: 1, x: "20px" });

  blog_btn
    .to(".blogpost_btn", { y: "-88vh", duration: 1, ease: "ease.out" })
    .fromTo(".mode-toggler", { scale: "0" }, { scale: "1" }, "-=0.8");
}
else if (window.matchMedia("(max-width: 768px)").matches) {
  let navTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "bottom 40%",
      toggleActions: "play none none reverse",
      markers: false
    }
  });

  navTl
    .fromTo(".nav-mobile-top", { y: "-100%", autoAlpha: 0 }, { y: "0px", autoAlpha: 1 })
    .fromTo("#nav-mobile", { autoAlpha: 0 }, { autoAlpha: 1 })

}



// ----- NAVBAR

var sidebar = $(".sidebar");
var sidebar_i = $(".sidebar li i");
var sidebar_span = $(".sidebar li span");
var nav = $("#nav");
var nav_ham = $("#hamburger");
var nav_ham_mob = $("#hamburger-mob");
var nav_close_mob = $("#nav-close-mob");
var nav_close = $("#nav-close");


// Active Class in Nav
$(".nav-li").click(function () {
  $(this).prevAll().removeClass("nav-li-active");
  $(this).nextAll().removeClass("nav-li-active");
  $(this).addClass("nav-li-active");
});

// Nav Open
$(nav_ham).click(function () {

  if (window.matchMedia("(max-width: 1024px)").matches) {

    $(sidebar).animate({ width: '16rem', left: '0' }, 300, function () {
      sidebar_span.css("display", "inline");
      nav_ham.hide();
      nav_close.show();
    });
    nav.animate({ width: '16rem' }, 300);
  }
  else {
    nav_ham.hide();
    nav_close.show();
    $(sidebar).animate({ width: '16rem', left: '0' }, 300, function () {
      sidebar_span.css("display", "inline");
    });

    nav.animate({ width: '16rem' }, 300);
  }

  sidebar_i.css("width", "30%");

});
// Nav-mob-open
$(nav_ham_mob).click(function () {

  if (window.matchMedia("(max-width: 768px)").matches) {

    $(sidebar).animate({ width: '100vw', left: '0' }, 300, function () {
      sidebar_span.css("display", "inline");
      nav_ham_mob.hide();
      nav_close_mob.show();
    });
    $("body").addClass("modal-open");  // bootstrap 5 cdn dependent
  }
  sidebar_i.css("width", "30%");
});


//Nav Close Func
function navCloseFunc() {

  sidebar_span.css("display", "none");
  sidebar_i.css("width", "100%");

  if (window.matchMedia("(max-width: 768px)").matches) {

    $(sidebar).animate({ width: '70px', left: '-100px' }, 300, function () {
      nav_ham_mob.show();
      nav_close_mob.hide();
    });
    $("body").removeClass("modal-open");  // bootstrap 5 cdn dependent
  }
  else if (window.matchMedia("(max-width: 1024px)").matches) {

    $(sidebar).animate({ width: '0', left: '-100px' }, 300, function () {
      nav_ham.show();
      nav_close.hide();
    });
    nav.animate({ width: '70px' }, 300);
  }
  else {
    $(sidebar).animate({ width: '70px', left: '0' }, 300, function () {
      nav_ham.show();
      nav_close.hide();
    });

    nav.animate({ width: '70px' }, 300);
  }
}
$(nav_close).click(function () {
  navCloseFunc();
});
$(nav_close_mob).click(function () {
  navCloseFunc();
});

$(".nav-li").click(function () {
  navCloseFunc();
});

$("section").click(function () {
  navCloseFunc();
});
$(".landing-cover").click(function () {
  navCloseFunc();
})

// ----- Achievements

// $(window).scroll(function () {

//     //to check scrol pos: -
//     // const samY = document.documentElement.scrollTop;
//     // console.log('Scroll Y: ' + samY);

//     if ($(this).scrollTop() > 750)
//         $("#progress-line").addClass("animate-progress-line");
//     else
//         $("#progress-line").removeClass("animate-progress-line");
// })

// // for small dots to show active
// $(".step").click(function () {
//     $(this).addClass("tl-active").prevAll().addClass("tl-active");
//     $(this).nextAll().removeClass("tl-active");
// });

// var totalSteps = $(".step");
// var division = 100 / (totalSteps.length - 1);

// function activeFunc(step) {

//     //for progress-line animation
//     if (step == 1) {
//         $("#progress-line").css("width", "3%");
//     }
//     else {
//         $("#progress-line").css("width", ((step - 1) * division) + "%");
//     }
//     // showing the content
//     $(".content-timeline").removeClass("cnt-active");
//     $(".content" + step).addClass("cnt-active");

// }


// ----- OUR TEAM

$(".tabs").click(function () {
  $(this).prevAll().removeClass("tab-active");
  $(this).nextAll().removeClass("tab-active");
  $(this).addClass("tab-active");
});

function activeCont(cont) {
  $(".t-content").removeClass("t-content-active");
  $("#" + cont).addClass("t-content-active");
}


// ----- GALLERY

var swiper = new Swiper('.swiper-container', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 180,
    stretch: 0,
    depth: 260,
    modifier: 2,
    slideShadows: true,
  }

});

// RIPPLE EFFECT

$(".nav-li").on("click", function (e) {

  $(".ripple").remove();

  var posX = $(this).offset().left,
    posY = $(this).offset().top,
    buttonWidth = $(this).width(),
    buttonHeight = $(this).height();

  $(this).prepend("<span class='ripple'></span>");

  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;

  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});

