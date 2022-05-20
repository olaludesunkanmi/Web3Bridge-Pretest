const express = require("express");

const cors = require("cors");

require("express-async-errors");

// const clientRouter = require("./routes/client");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to Home");
});
// app.use(clientRouter);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.all("*", async () => {
  throw new Error("Not Found");
});

module.exports = { app };
