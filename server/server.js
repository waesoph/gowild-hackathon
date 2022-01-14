const express = require("express");
const app = express();
const cors = require("cors");

const productsRoute = require('./routes/products');
const boxesRoute = require("./routes/boxes");

//Config
require("dotenv").config();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());

app.use('/products', productsRoute);
app.use("/boxes", boxesRoute);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
  