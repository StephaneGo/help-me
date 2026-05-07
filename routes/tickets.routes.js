import express from "express";
import { findAllTickets } from "../services/ticketsService.js";

export const ticketsRouter = express.Router();

ticketsRouter.get("/", (req, res) => {
  const tickets = findAllTickets();
  console.log(JSON.stringify(tickets));
  res.json(tickets);
});
