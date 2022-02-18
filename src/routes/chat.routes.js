const controller = require("../Controller/Chat.controller");
const express = require("express");
const user = require("../models/Chat");
const { createUser } = require("../Controller/Chat.controller");
const { check, validationResult} = require("express-validator");
const { Router } = require("express");
const app = express.Router();

const route= {
    "/createChat": (req, res) => {
        controller.createUser(req, res);
    },
    "/getUser": (req, res) => {
        controller.getUser(req, res);
      },
}
app.use("/", (req, res) => {
    const path = req.path;
    console.log(path);
    route[path](req, res);
  });
  module.exports = app;