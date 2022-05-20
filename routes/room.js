const express = require("express");

const allocateRoom = require("../controllers/allocateRooms");

const app = express();

app.post("/allocate", allocateRoom);

module.exports = app;
