import { Ticket, EtatsTicket } from "../models/Ticket.js";

const tickets = [];

//TODO : A supprimer !!!
function initTickets() {
  tickets.push(new Ticket("ticket1", "descritpion ticket1"));
  tickets.push(new Ticket("ticket2", "descritpion ticket2"));
  tickets.push(new Ticket("ticket3", "descritpion ticket3"));
}

initTickets();

export function findAllTickets() {
  return [...tickets];
}
