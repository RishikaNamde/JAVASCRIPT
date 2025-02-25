document.addEventListener("DOMContentLoaded", function () {
    // Toggle Menu
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Initialize Swiper Sliders
    if (typeof Swiper !== "undefined") {
        var swiper = new Swiper(".swiper-container", {
            loop: true,
            autoplay: {
                delay: 5000,
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

        var cardSwiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
        });

        var loopGallerySwiper = new Swiper(".mySwiper.loop-gallery", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        // Initialize Thumbnail Swiper
        var thumbSlider = new Swiper(".thumb-slider", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        // Initialize Main Swiper linked to thumbnails
        var mainSlider = new Swiper(".main-slider", {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: thumbSlider,
            },
        });
    } else {
        console.warn("Swiper.js not loaded.");
    }

    // Initialize Typed.js
    if (typeof Typed !== "undefined" && document.getElementById("typed-text")) {
        new Typed("#typed-text", {
            strings: ["Travel with No Limits", "Explore Without Boundaries", "Fly Beyond Imagination"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    // Initialize AOS if available
    if (typeof AOS !== "undefined") {
        AOS.init();
    } else {
        console.warn("AOS.js not loaded.");
    }
});
//section -4 auto scroll
function scrollOffers(amount) {
    document.getElementById('offers').scrollBy({ left: amount, behavior: 'smooth' });
}

function autoScroll() {
    let container = document.getElementById('offers');
    setInterval(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }, 3000);
}

window.onload = autoScroll;
function scrollOffers(amount) {
    document.getElementById('offers').scrollBy({ left: amount, behavior: 'smooth' });
}
//section-5
let customIndex = 0;
        function moveCustomSlider(step) {
            const customSlider = document.getElementById("custom-slider");
            const customSlides = document.querySelectorAll(".custom-slide");
            const totalCustomSlides = customSlides.length;

            customIndex = (customIndex + step + totalCustomSlides) % totalCustomSlides;
            customSlider.style.top = -customIndex * 400 + "px";
        }