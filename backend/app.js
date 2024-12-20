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

const bookings = path.join(
  path.dirname(process.mainModule.filename),
  "bookings",
  "allBooking.json"
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

app.post("/signup", (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  fs.readFile(p, (err, fileContent) => {
    if (err && err.code !== "ENOENT") {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }

    const users = fileContent ? JSON.parse(fileContent) : [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const id = users.length + 1;
    users.push({ email, password, id });

    fs.writeFile(p, JSON.stringify(users), (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        return res.status(500).json({ message: "Failed to save user" });
      }
      return res.status(200).json({ message: "Signup successfully" });
    });
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

app.get("/place", async (req, res, next) => {
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

app.post("/place", (req, res, next) => {
  const price = req.body.price * req.body.peoples;

  fs.readFile(bookings, (err, fileContent) => {
    if (!err) {
      const bookingData = fileContent ? JSON.parse(fileContent) : [];
      const newBooking = {
        id: bookingData.length + 1,
        fullName: req.body.fullName,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        place: req.body.place,
        to: req.body.to,
        from: req.body.from,
        peoples: req.body.peoples,
        price: price,
      };
      bookingData.push(newBooking);

      fs.writeFile(bookings, JSON.stringify(bookingData), (err) => {
        if (err) console.error(err);
      });
      res.status(200).send("Booking Done Successfully!");
    } else {
      console.error("File Read Error:", err);
      res.status(500).json({ error: "Failed to load tour data" });
    }
  });
});

app.listen(3000);
