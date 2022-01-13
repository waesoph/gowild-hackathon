const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fs = require("fs");

const readFile = () => {
  const boxesData = fs.readFileSync("./data/box.json");
  return JSON.parse(boxesData);
};