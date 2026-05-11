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

module.exports = {
  findAllTickets,
  initTickets,
  createTicket,
};
