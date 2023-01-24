const menu = document.querySelector(".navbar");
const close = document.querySelector(".close");
menu.addEventListener("click", (el) => {
  document.querySelector(".navigation").classList.remove("none");
  console.log("vadia");
});
console.log("kida");
close.addEventListener("click", () => {
  document.querySelector(".navigation").classList.add("none");
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav2");

    // console.log($nav.height(), $(this).scrollTop() > $nav.height() / 3);
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
    $(".kl").toggleClass("nav-el", $(this).scrollTop() > $nav.height() / 3);
    $(".logo a").toggleClass("chitta", $(this).scrollTop() > $nav.height() / 3);
  });
});
