const openModal = document.querySelector(".schedule-open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector("dialog");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
