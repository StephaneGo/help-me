//import { Ticket, EtatsTicket } from "../models/Ticket.js";
const { Ticket, EtatsTicket } = require("../models/Ticket.js");

const tickets = [];

//TODO : A supprimer !!!
function initTickets(ticketsJeuEssai) {
  if (ticketsJeuEssai) {
    tickets.splice(0);
    tickets.push(...ticketsJeuEssai);
  }
}

const jeuEssai = [];
/*jeuEssai.push(new Ticket("ticket1", "descritpion ticket1"));
jeuEssai.push(new Ticket("ticket2", "descritpion ticket2"));
jeuEssai.push(new Ticket("ticket3", "descritpion ticket3"));*/
initTickets(jeuEssai);

/*
  récupère tous les tickets
*/
function findAllTickets() {
  return [...tickets];
}

function createTicket(titre, description) {
  const ticket = new Ticket(titre, description);
  tickets.push(ticket);
  return ticket;
}

function updateTicket(noTicket, titre, description) {
  const ticket = tickets.find((t) => t.noTicket === noTicket);
  if (ticket) {
    ticket.titre = titre;
    ticket.description = description;
  } else {
    throw new Error(`Ticket ${noTicket} introuvable`);
  }
  return ticket;
}

function deleteTicket(noTicket) {
  const ticket = tickets.find((t) => t.noTicket === noTicket);
  if (ticket) {
    tickets.splice(tickets.indexOf(ticket), 1);
  } else {
    throw new Error(`Ticket ${noTicket} introuvable`);
  }
}

module.exports = {
  findAllTickets,
  initTickets,
  createTicket,
  updateTicket,
  deleteTicket,
};
