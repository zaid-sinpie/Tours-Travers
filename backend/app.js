const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// const { toursDataInternational } = require("./util/data");
// const { toursDataIndian } = require("./util/data");

const toursData = require("./util/data");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "userData",
  "user.json"
);
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  fs.readFile(p, (err, fileContent) => {
    if (!err) {
      const users = JSON.parse(fileContent);
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        res.status(200).json({ message: "User found", user });
        console.log(user);
      } else {
        res.status(401).json({ message: "User not found" });
      }
    }
  });
});

app.post("/signup", (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log(err);
    }

    const users = fileContent ? JSON.parse(fileContent) : [];

    const user = users.find((user) => user.email === email);

    if (!user) {
      const id = users.length;

      users.push({ email, password, confirmPassword, id });

      fs.writeFile(p, JSON.stringify(users), (err) => {
        if (err) console.log(err);
      });
      res.status(200).send("Signup successfully");
    } else {
      res.status(400).json({ message: "Email already exists" });
    }
  });
});

app.get("/home", (req, res) => {
  const { toursDataInternational, toursDataIndian } = toursData;
  // try {
  //   res.status(200).json(data); // No need for JSON.stringify
  // } catch (error) {
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
  res.status(200).json({ toursDataInternational, toursDataIndian });
});

app.listen(3000);
