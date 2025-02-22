document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 5000, // 5 seconds per slide
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
AOS.init();

        // Initialize Swiper
        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".swiper-container", {
                loop: true,
                autoplay: {
                    delay: 5000, // 5 seconds per slide
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        });
        
document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["Travel with No Limits", "Explore Without Boundaries", "Fly Beyond Imagination"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    };
    var typed = new Typed("#typed-text", options);
});
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
  var swiper = new Swiper(".mySwiper.loop-gallery", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});