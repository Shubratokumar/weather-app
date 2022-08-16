const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


app.post("/getWeather", (req, res) => {
  const result = req.body;
  res.send(result);
});

// server testing
app.get("/", (req, res) => {
  res.send("weather app server is running");
});

app.listen(port, () => {
  console.log(
    `weather app server is listening from the port no : ${port}`
  );
});
