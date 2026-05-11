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
    this.dateCreation = new Date().toISOString();
  }

  toString() {
    return `Ticket: [noTicket=${this.noTicket}|titre=${this.titre}|description=${this.description}|etat=${this.etat}|dateCreation=${this.dateCreation}  ]`;
  }
}

exports.Ticket = Ticket;
exports.EtatsTicket = EtatsTicket;
