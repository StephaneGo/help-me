import express from "express";
import { findAllTickets } from "./services/ticketsService.js";

const app = express();

//Chargement du fichier .env dans les variables d'environnement
(async () => {
  await process.loadEnvFile(".env");
  console.log(".env chargé"); // Affiche la valeur depuis .env
})();

app.get("/tickets", (req, res) => {
  const tickets = findAllTickets();
  console.log(JSON.stringify(tickets));
  res.json(tickets);
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:" + process.env.PORT);
});
