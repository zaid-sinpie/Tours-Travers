const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).send("Login successfully");
});

app.post("/signup", (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  console.log(email, password, confirmPassword);
  res.status(200).send("Signup successfully");
});

app.listen(3000);
