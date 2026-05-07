import { uuidv7 } from "uuidv7";

export const EtatsTicket = Object.freeze({
  OUVERT: 1,
  CLOS: 2,
});

export class Ticket {
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
