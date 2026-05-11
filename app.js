/*
import express from "express";
import { findAllTickets } from "./services/ticketsService.js";
import { ticketsRouter } from "./routes/tickets.routes.js";
*/
const express = require("express");
const { findAllTickets } = require("./services/ticketsService.js");
const { ticketsRouter } = require("./routes/tickets.routes.js");

const app = express();
const router = express.Router();
exports.router = router;

//Chargement du fichier .env dans les variables d'environnement
(async () => {
  await process.loadEnvFile(".env");
  console.log(".env chargé"); // Affiche la valeur depuis .env
})();

app.use("/tickets", ticketsRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:" + process.env.PORT);
});
