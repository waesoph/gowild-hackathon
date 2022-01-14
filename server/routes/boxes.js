const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fs = require("fs");

const readFile = () => {
  const boxesData = fs.readFileSync("./data/box.json");
  return JSON.parse(boxesData);
};

// Get list of all boxes
router.get("/", (req, res) => {
    let boxData = readFile();

    return res.status(200).send(boxData);
  });

module.exports = router;