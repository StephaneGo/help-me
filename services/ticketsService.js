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

initTickets();

function findAllTickets() {
  return [...tickets];
}

module.exports = {
  findAllTickets,
  initTickets,
};
