/*import express from "express";
import { findAllTickets } from "../services/ticketsService.js";
*/
const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  findAllTickets,
  createTicket,
} = require("../services/ticketsService.js");

const ticketsRouter = express.Router();

const validateTicket = [
  body("titre")
    .exists({ checkFalsy: true })
    .withMessage("Le titre est requis")
    .isString()
    .withMessage("Le titre doit être une chaîne"),
  body("description")
    .exists({ checkFalsy: true })
    .withMessage("La description est requise")
    .isString()
    .withMessage("La description doit être une chaîne")
    .isLength({ min: 3 })
    .withMessage("La description doit contenir au moins 3 caractères"),
];

ticketsRouter.get("/", (req, res) => {
  const tickets = findAllTickets();
  console.log(JSON.stringify(tickets));
  res.json(tickets);
});

ticketsRouter.post("/", validateTicket, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Renvoie les erreurs de validation
    return res.status(400).json({ errors: errors.array() });
  }

  // Données validées
  const { titre, description } = req.body;

  const ticket = createTicket(titre, description);
  res.status(201).json(ticket);
});

module.exports = { ticketsRouter }; //export default ticketsRouter;
