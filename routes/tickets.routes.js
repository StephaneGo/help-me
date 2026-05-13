/*import express from "express";
import { findAllTickets } from "../services/ticketsService.js";
*/
const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  findAllTickets,
  createTicket,
  updateTicket,
  deleteTicket,
  findOneTicket,
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

ticketsRouter.get("/", async (req, res) => {
  const tickets = await findAllTickets();
  console.log(JSON.stringify(tickets));
  res.json(tickets);
});

ticketsRouter.get("/:id", async (req, res) => {
  const ticket = await findOneTicket(req.params.id);
  if (!ticket) return res.status(404).json({ errors: "Ticket non trouvé" });
  res.json(ticket);
});

ticketsRouter.post("/", validateTicket, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Renvoie les erreurs de validation
    return res.status(400).json({ errors: errors.array() });
  }

  // Données validées
  const { titre, description } = req.body;

  const ticket = await createTicket(titre, description);
  res.status(201).json(ticket);
});

ticketsRouter.patch("/:noTicket", validateTicket, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Renvoie les erreurs de validation
    return res.status(400).json({ errors: errors.array() });
  }

  const noTicket = req.params.noTicket;

  // Données validées
  const { titre, description } = req.body;

  try {
    const ticket = await updateTicket(noTicket, titre, description);
    return res.status(201).json(ticket);
  } catch (error) {
    return res.status(400).json({ errors: error.message });
  }
});

ticketsRouter.delete("/:noTicket", async (req, res) => {
  const noTicket = req.params.noTicket;
  try {
    await deleteTicket(noTicket);
    return res.status(204).send();
  } catch (error) {
    return res.status(404).json({ errors: error.message });
  }
});

module.exports = { ticketsRouter }; //export default ticketsRouter;
