const form = document.querySelector("form");
const clientName = document.getElementById("client");
const petName = document.getElementById("pet");
const phoneClient = document.getElementById("phone");
const description = document.getElementById("description");
const selectedDate = document.getElementById("date");
const selectedHour = document.getElementById("hour");

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    //recupera o nome do cliente
    const name = clientName.value.trim();
    const pet = petName.value.trim();
    const phone = phoneClient.value.trim();
    const date = selectedDate.value;
    const hour = selectedHour.value;

    //validação dos campos
    if (
      name === "" ||
      pet === "" ||
      phone === "" ||
      date === "" ||
      hour === ""
    ) {
      return alert("Preencha todos os campos");
    }


  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
