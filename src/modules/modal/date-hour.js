import dayjs from "dayjs";
const selectedDate = document.getElementById("date");
const selectedHour = document.getElementById("hour");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
//carrega a data atual e valida definindo a data mínima sendo a atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

// Função para atualizar os horários disponíveis
function updateAvailableHours() {
  const selectedDateValue = dayjs(selectedDate.value);
  const today = dayjs();
  const isToday =
    selectedDateValue.format("YYYY-MM-DD") === today.format("YYYY-MM-DD");

  // Obtenha todas as opções de hora (exceto a primeira, que é o placeholder)
  const hourOptions = selectedHour.querySelectorAll("option:not(:first-child)");

  hourOptions.forEach((option) => {
    // Reativa todas as opções inicialmente
    option.disabled = false;

    // Se for hoje, desabilita horários que já passaram
    if (isToday) {
      const optionHour = option.value.split(":")[0];
      const currentHour = today.hour();

      if (parseInt(optionHour) <= currentHour) {
        option.disabled = true;
      }
    }
  });

  // Redefine o valor selecionado para o placeholder se a opção atual estiver desativada
  if (
    selectedHour.selectedIndex > 0 &&
    selectedHour.options[selectedHour.selectedIndex].disabled
  ) {
    selectedHour.selectedIndex = 0;
  }
}

// Atualizar os horários quando a página carregar
updateAvailableHours();

// Atualizar os horários quando a data for alterada
selectedDate.addEventListener("change", updateAvailableHours);


