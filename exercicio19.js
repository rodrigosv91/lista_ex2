// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require("prompt-sync")();

function validarHorario(horario) {
  const partes = horario.split(":");
  if (partes.length !== 3) return false;

  const horas = parseInt(partes[0]);
  const minutos = parseInt(partes[1]);
  const segundos = parseInt(partes[2]);

  if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) return false;
  if (
    horas < 0 ||
    horas > 23 ||
    minutos < 0 ||
    minutos > 59 ||
    segundos < 0 ||
    segundos > 59
  )
    return false;

  return true;
}

function main() {
  console.log("Bem-vindo ao programa de validação de horários!");

  const horarios = [];

  for (let i = 0; i < 5; i++) {
    let horario;
    do {
      horario = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
      if (!validarHorario(horario)) {
        console.log("Horário inválido! Digite no formato HH:MM:SS.");
      }
    } while (!validarHorario(horario));
    horarios.push(horario);
  }

  console.log("\nHorários válidos no formato HH.MM.SS:");

  horarios.forEach((horario) => {
    const [horas, minutos, segundos] = horario.split(":");
    console.log(
      `${horas.padStart(2, "0")}.${minutos.padStart(
        2,
        "0"
      )}.${segundos.padStart(2, "0")}`
    );
  });
}

main();
