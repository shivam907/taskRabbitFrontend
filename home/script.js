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
