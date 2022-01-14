const express = require("express");
const app = express();
const cors = require("cors");

//Config
require("dotenv").config();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
  