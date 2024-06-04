const prompt = require("prompt-sync")();

// Estrutura de Dados
let hoteis = [];
let reservas = [];
let proximoIdReserva = 1;

class Hotel {
  constructor(id, nome, cidade, quartosTotais) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosTotais;
    this.avaliacoes = [];
  }
}

class Reserva {
  constructor(idHotel, nomeCliente) {
    this.idReserva = proximoIdReserva++;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
  }
}

// Funcionalidades
function adicionarHotel(nome, cidade, quartosTotais) {
  const id = hoteis.length + 1;
  const hotel = new Hotel(id, nome, cidade, quartosTotais);
  hoteis.push(hotel);
}

function buscarHoteisPorCidade(cidade) {
  return hoteis.filter((hotel) => hotel.cidade === cidade);
}

function fazerReserva(idHotel, nomeCliente) {
  const hotel = hoteis.find((hotel) => hotel.id === idHotel);
  if (hotel && hotel.quartosDisponiveis > 0) {
    const reserva = new Reserva(idHotel, nomeCliente);
    reservas.push(reserva);
    hotel.quartosDisponiveis--;
    console.log("Reserva feita com sucesso!");
    return reserva;
  } else {
    console.log("Não foi possível fazer a reserva. Quartos indisponíveis.");
    return null;
  }
}

function cancelarReserva(idReserva) {
  const reservaIndex = reservas.findIndex(
    (reserva) => reserva.idReserva === idReserva
  );
  if (reservaIndex !== -1) {
    const reserva = reservas[reservaIndex];
    const hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    if (hotel) {
      hotel.quartosDisponiveis++;
    }
    reservas.splice(reservaIndex, 1);
    console.log("Reserva cancelada com sucesso!");
  } else {
    console.log("Reserva não encontrada.");
  }
}

function listarReservas() {
  return reservas.map((reserva) => {
    const hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    return {
      idReserva: reserva.idReserva,
      nomeCliente: reserva.nomeCliente,
      hotel: {
        id: hotel.id,
        nome: hotel.nome,
        cidade: hotel.cidade,
      },
    };
  });
}

// Menu
function exibirMenu() {
  console.log("\n===== Menu =====");
  console.log("1. Adicionar hotel");
  console.log("2. Buscar hotéis por cidade");
  console.log("3. Fazer reserva");
  console.log("4. Cancelar reserva");
  console.log("5. Listar reservas");
  console.log("6. Sair");
}

// Loop principal
let escolha;
do {
  exibirMenu();
  escolha = prompt("Escolha uma opção: ");

  switch (escolha) {
    case "1":
      const nomeHotel = prompt("Nome do hotel: ");
      const cidadeHotel = prompt("Cidade do hotel: ");
      const quartosHotel = parseInt(prompt("Número de quartos do hotel: "));
      adicionarHotel(nomeHotel, cidadeHotel, quartosHotel);
      console.log("Hotel adicionado com sucesso!");
      break;
    case "2":
      const cidadeBusca = prompt("Digite a cidade para buscar hotéis: ");
      const hoteisEncontrados = buscarHoteisPorCidade(cidadeBusca);
      if (hoteisEncontrados.length === 0) {
        console.log("Nenhum hotel encontrado nessa cidade.");
      } else {
        console.log("Hotéis encontrados:");
        hoteisEncontrados.forEach((hotel) => {
          console.log(
            `ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`
          );
        });
      }
      break;
    case "3":
      const idHotelReserva = parseInt(
        prompt("Digite o ID do hotel para fazer a reserva: ")
      );
      const nomeClienteReserva = prompt("Digite seu nome para a reserva: ");
      fazerReserva(idHotelReserva, nomeClienteReserva);
      break;
    case "4":
      const idReservaCancelar = parseInt(
        prompt("Digite o ID da reserva para cancelar: ")
      );
      cancelarReserva(idReservaCancelar);
      break;
    case "5":
      const listaDeReservas = listarReservas();
      if (listaDeReservas.length === 0) {
        console.log("Não há reservas.");
      } else {
        console.log("Reservas:");
        listaDeReservas.forEach((reserva) => {
          console.log(
            `ID: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${reserva.hotel.nome}, Cidade: ${reserva.hotel.cidade}`
          );
        });
      }
      break;
    case "6":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
} while (escolha !== "6");
