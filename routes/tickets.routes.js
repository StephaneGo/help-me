/*import express from "express";
import { findAllTickets } from "../services/ticketsService.js";
*/
const express = require("express");
const { findAllTickets } = require("../services/ticketsService.js");

const ticketsRouter = express.Router();

ticketsRouter.get("/", (req, res) => {
  const tickets = findAllTickets();
  console.log(JSON.stringify(tickets));
  res.json(tickets);
});

module.exports = { ticketsRouter }; //export default ticketsRouter;
