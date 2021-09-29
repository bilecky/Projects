
const modal_btn = document.querySelector(".modal-btn");
const modal_ovrl = document.querySelector(".modal-overlay");
const close_btn = document.querySelector(".close-btn");

modal_btn.addEventListener("click", () => {
  modal_ovrl.classList.add("open-modal");
});
close_btn.addEventListener("click", () => {
  modal_ovrl.classList.remove("open-modal");
});
