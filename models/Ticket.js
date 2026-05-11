const { uuidv7 } = require("uuidv7");

const EtatsTicket = Object.freeze({
  OUVERT: 1,
  CLOS: 2,
});

class Ticket {
  constructor(titre, description) {
    this.titre = titre;
    this.description = description;
    this.noTicket = uuidv7();
    this.etat = EtatsTicket.OUVERT;
  }

  toString() {
    return `Ticket: [noTicket=${this.noTicket}|titre=${this.titre}|description=${this.description}]`;
  }
}

exports.Ticket = Ticket;
exports.EtatsTicket = EtatsTicket;
