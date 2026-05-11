const { Ticket, EtatsTicket } = require("../models/Ticket.js");
const {
  findAllTickets,
  initTickets,
  createTicket,
} = require("../services/ticketsService.js");

describe("findAllTickets", () => {
  beforeEach(() => {});

  test("findAllTickets-cas droit", () => {
    const tickets = [];
    tickets.push(new Ticket("ticket1", "descritpion ticket1"));
    tickets.push(new Ticket("ticket2", "descritpion ticket2"));
    tickets.push(new Ticket("ticket3", "descritpion ticket3"));

    initTickets(tickets);

    const ticketsActual = findAllTickets();
    expect(ticketsActual.length).toBe(3);
  });

  test("findAllTickets-cas aucun ticket", () => {
    const tickets = [];
    initTickets(tickets);

    const ticketsActual = findAllTickets();
    expect(ticketsActual.length).toBe(0);
  });
});

describe("createTicket", () => {
  beforeEach(() => {});

  test("createTicket", () => {
    const tickets = [];
    tickets.push(new Ticket("ticket1", "descritpion ticket1"));
    tickets.push(new Ticket("ticket2", "descritpion ticket2"));
    tickets.push(new Ticket("ticket3", "descritpion ticket3"));

    initTickets(tickets);

    //Act
    createTicket("new ticket", "descritpion new ticket");

    //Assert
    const ticketsActual = findAllTickets();
    expect(ticketsActual.length).toBe(4);
  });
});
