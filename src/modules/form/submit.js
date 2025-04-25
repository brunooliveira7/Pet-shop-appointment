import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const selectedHour = document.getElementById("hour");
const availableHoursDataList = document.getElementById("available-hours");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
//carrega a data atual e valida definindo a data mínima sendo a atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;


form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted");
};
