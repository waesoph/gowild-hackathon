const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fs = require("fs");

const readFile = () => {
  const productsData = fs.readFileSync("./data/products.json");
  return JSON.parse(productsData);
};