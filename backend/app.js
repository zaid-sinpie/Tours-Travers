const express = require("express");
const bodyParser = require("body-parser");

const { dataForIndianPlaces } = require("./data");
const { dataForInternationPlaces } = require("./data");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/home", (req, res, next) => {
  const type = req.body.value;
  if (type === "indian") {
    res.send(JSON.stringify(dataForIndianPlaces));
  } else {
    res.send(JSON.stringify(dataForInternationPlaces));
  }
});

app.use("/", (req, res, next) => {
  res.send("This always run");
  console.log("this always run");
});

app.listen(3000);
