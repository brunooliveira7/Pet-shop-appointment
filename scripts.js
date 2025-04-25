const newSchedule = document.querySelector(".scheduling-button");
const schedule = document.querySelector(".schedule-button");
const closeSchedule = document.querySelector(".close");
const fade = document.querySelector(".fade");
const modal = document.querySelector(".modal-overlay");

const toggleModal = () => {
  modal.classList.toggle("hidden");
  fade.classList.toggle("hidden");
};

// Abre o modal
schedule.addEventListener("click", (event) => {
  event.preventDefault();
  toggleModal();
});

// Fecha o modal (clicando nos elementos que devem fechar)
[newSchedule, closeSchedule, fade].forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal();
  });
});
