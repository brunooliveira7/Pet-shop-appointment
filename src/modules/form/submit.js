import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
//carrega a data atual - formata o input do modal.
selectedDate.value = inputToday;

//validação da data - data mínima é a data atual.
selectedDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted");
};
