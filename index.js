require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const weather = require("./weather");

app.use(express.json());

app.use(cors());

//test route

app.use(express.static("public"));

app.use("/weather", weather);

app.listen(port, () => console.log(`App listening on port ${port}`));
