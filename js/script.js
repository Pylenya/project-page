$(document).ready(function () {
  $(".project__sliders").slick({
    speed: 1200,
    easing: "ease-in-out",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 997,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const body = document.body;
const navItems = nav?.querySelectorAll("a");

burger?.addEventListener("click", () => {
  body.classList.toggle("stop--scroll");
  burger?.classList.toggle("burger--active");
  nav?.classList.toggle("nav--visible");
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop--scroll");
    burger?.classList.remove("burger--active");
    nav?.classList.remove("nav--visible");
  });
});
