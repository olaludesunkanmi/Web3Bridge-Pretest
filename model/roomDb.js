const rooms = [];

const room1 = {
  id: 1,
  hasFacilitator: false,
  hasHtmlDev: false,
  hasCssDev: false,
  hasJsDev: false,
  hasFemale: false,
  names: [],
  roomName: "Gold",
};

const room2 = {
  id: 2,
  hasFacilitator: false,
  hasHtmlDev: false,
  hasCssDev: false,
  hasJsDev: false,
  hasFemale: false,
  names: [],
  roomName: "Silver",
};

const room3 = {
  id: 3,
  hasFacilitator: false,
  hasHtmlDev: false,
  hasCssDev: false,
  hasJsDev: false,
  hasFemale: false,
  names: [],
  roomName: "Pearl",
  //slotRemaining: 2,
};

rooms.push(room1, room2, room3);
module.exports = rooms;
