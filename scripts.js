const newSchedule = document.querySelector(".scheduling-button");
const schedule = document.querySelector(".schedule-button");
const closeSchedule = document.querySelector(".close");
const fade = document.querySelector(".fade");
const modal = document.querySelector(".modal-overlay");

const toggleModal = () => {
  modal.classList.toggle("hidden");
  fade.classList.toggle("hidden");
};

[newSchedule, schedule, closeSchedule].forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal();
  });
});
