const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fs = require("fs");

const readFile = () => {
  const productsData = fs.readFileSync("./data/products.json");
  return JSON.parse(productsData);
};

// Get list of all warehouses
router.get("/", (req, res) => {
    let productsData = readFile();

    return res.status(200).send(productsData);
  });

  module.exports = router;