const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  slidesToShow: 1,
  arrows: true, // arrows enabled 767px and down
  dots: true,
  responsive: {
    768: {
      slidesToShow: 2,
      arrows: true,
    },
    960: {
      disable: false, // slider disabled 960px to 1279px
      slidesToShow: 3,
      arrows: true
    },
    1280: {
      disable: false,
      slidesToShow: 3,
      arrows: true,
      dots: true // dots enabled 1280px and up
    }
  }
});