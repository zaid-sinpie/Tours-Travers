const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "userData",
  "user.json"
);
const pathForIndianTours = path.join(
  path.dirname(process.mainModule.filename),
  "tourPlaces",
  "indianTours.json"
);
const pathForInternationalTours = path.join(
  path.dirname(process.mainModule.filename),
  "tourPlaces",
  "internationalTours.json"
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

app.post("/home", (req, res, next) => {
  const { name, description, price, image, from, to, type } = req.body;
  // const { test, type } = req.body;
  let path;

  if (type === "indian") {
    path = pathForIndianTours;
  }
  if (type === "international") {
    path = pathForInternationalTours;
  }

  fs.readFile(path, (err, fileContent) => {
    if (err) {
      console.log(err);
    }

    const tours = fileContent ? JSON.parse(fileContent) : [];
    const id = tours.length;
    tours.push({ id, name, description, price, image, from, to });
    fs.writeFile(path, JSON.stringify(tours), (err) => {
      if (err) console.log(err);
      res.status(200).send("Data added successfully");
    });
  });
});

app.get("/home", async (req, res, next) => {
  const fs = require("fs").promises;

  try {
    const indianData = await fs.readFile(pathForIndianTours, "utf8");
    const internationalData = await fs.readFile(
      pathForInternationalTours,
      "utf8"
    );

    const indian = JSON.parse(indianData);
    const international = JSON.parse(internationalData);

    res.status(200).json({ indian, international });
  } catch (err) {
    console.error("Error reading files:", err);
    res.status(500).json({ error: "Failed to load tour data" });
  }
});

app.listen(3000);
