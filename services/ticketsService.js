//import { Ticket, EtatsTicket } from "../models/Ticket.js";
const { Ticket, EtatsTicket } = require("../models/Ticket.js");
const { getDb } = require("../config/db");

const ticketsCollection = () => getDb().collection("tickets");

//TODO : A supprimer !!!

function initTickets(ticketsJeuEssai) {
  /*
  if (ticketsJeuEssai) {
    tickets.splice(0);
    tickets.push(...ticketsJeuEssai);
  }
    */
}

//const jeuEssai = [];
/*jeuEssai.push(new Ticket("ticket1", "descritpion ticket1"));
jeuEssai.push(new Ticket("ticket2", "descritpion ticket2"));
jeuEssai.push(new Ticket("ticket3", "descritpion ticket3"));*/
//initTickets(jeuEssai);

/*
  récupère tous les tickets
*/
async function findAllTickets() {
  const tickets = await ticketsCollection().find().toArray();
  return tickets;
}

async function createTicket(titre, description) {
  const ticket = new Ticket(titre, description);
  await ticketsCollection().insertOne(ticket);
  console.log(`Ticket créé: ${ticket}`, ticket);
  return ticket;
}

async function updateTicket(noTicket, titre, description) {
  const ticket = await ticketsCollection().findOne({ noTicket: noTicket });
  if (ticket) {
    ticket.titre = titre;
    ticket.description = description;
    await ticketsCollection().updateOne(
      { noTicket: noTicket },
      { $set: ticket },
    );
  } else {
    throw new Error(`Ticket ${noTicket} non trouvé`);
  }
  return ticket;
}

async function deleteTicket(noTicket) {
  let ticket;
  ticket = await ticketsCollection().findOne({ noTicket: noTicket });
  if (ticket) {
    await ticketsCollection().deleteOne({ noTicket: noTicket });
  } else {
    throw new Error(`Ticket ${noTicket} non trouvé`);
  }
}

module.exports = {
  findAllTickets,
  initTickets,
  createTicket,
  updateTicket,
  deleteTicket,
};
